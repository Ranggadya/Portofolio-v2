import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { certificates as fallbackCertificates } from '@/data/certificates';
import type { Certificate } from '@/types';

export interface SupabaseCertificateRow {
  id?: string | number;
  title?: string;
  judul?: string;
  name?: string;
  image?: string;
  image_url?: string;
  gambar?: string;
  img?: string;
  photo?: string;
  file_url?: string;
  link?: string;
  verify_url?: string;
  url?: string;
  credential_id?: string;
  code?: string;
  issuer?: string;
  penerbit?: string;
  issuer_sub?: string;
  description?: string;
  deskripsi?: string;
  syllabus?: string;
  silabus?: string;
  tags?: string[] | string;
  score?: string;
  grade?: string;
  issue_date?: string;
  date?: string;
  year?: string | number;
  watermark?: string;
  badge_category?: string;
  badge_code?: string;
  badge_authority?: string;
  grade_badge?: string;
  icon?: 'award' | 'verified' | 'cloud' | 'palette' | 'shield' | 'code';
  [key: string]: unknown;
}

export function normalizeSupabaseCertificate(
  row: SupabaseCertificateRow,
  index: number
): Certificate {
  const title =
    row.title || row.judul || row.name || `Certificate ${index + 1}`;
  const imageUrl =
    row.image_url ||
    row.image ||
    row.gambar ||
    row.img ||
    row.photo ||
    row.file_url ||
    undefined;
  const verifyUrl =
    row.link ||
    row.verify_url ||
    row.url ||
    row.credential_url ||
    'https://www.dicoding.com';
  const credentialId =
    row.credential_id ||
    row.code ||
    (typeof row.id === 'string' ? row.id : `CERT-${String(index + 1).padStart(3, '0')}`);
  const id = String(row.id || `cert-${index + 1}`);
  const issuer = row.issuer || row.penerbit || 'Accredited Authority';
  const issuerSub = row.issuer_sub || row.issuerSub || issuer;
  const description =
    row.description ||
    row.deskripsi ||
    'Sertifikasi kredensial profesional terverifikasi dengan kompetensi teruji.';

  let tags: string[] = [];
  if (Array.isArray(row.tags)) {
    tags = row.tags.map(String);
  } else if (typeof row.tags === 'string' && row.tags.trim()) {
    tags = row.tags.split(',').map((t) => t.trim());
  } else {
    tags = ['Certified', 'Verified Active'];
  }

  const issueDate =
    row.issue_date ||
    (row.date ? `ISSUE: ${row.date}` : undefined) ||
    (row.year ? `ISSUE: ${row.year}` : 'ISSUE: 2023');

  const syllabus =
    row.syllabus ||
    row.silabus ||
    row.description ||
    'Kompetensi teruji dan standar kurikulum sertifikasi profesional industri.';

  return {
    id,
    credentialId,
    title,
    issuer,
    issuerSub: String(issuerSub),
    description,
    tags,
    verifyUrl: String(verifyUrl),
    imageUrl: imageUrl ? String(imageUrl) : undefined,
    link: String(verifyUrl),
    issueDate,
    validUntil: row.valid_until ? String(row.valid_until) : (row.date ? String(row.date) : issueDate),
    badgeCode: row.badge_code || credentialId,
    badgeCategory: row.badge_category || 'Credential Certificate',
    badgeAuthority: row.badge_authority || issuer,
    gradeBadge: row.grade_badge || row.score || '100%',
    watermark: row.watermark || 'OFFICIAL',
    score: row.score || row.grade || 'Verified Active',
    syllabus,
    icon: row.icon || 'award',
  };
}

export async function fetchCertificates(): Promise<{
  data: Certificate[];
  isLive: boolean;
  error?: string;
}> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      data: fallbackCertificates,
      isLive: false,
    };
  }

  const tableName =
    import.meta.env.VITE_SUPABASE_CERTIFICATES_TABLE || 'certificates';

  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.warn(`[Supabase] Could not fetch table "${tableName}":`, error.message);
      return {
        data: fallbackCertificates,
        isLive: false,
        error: error.message,
      };
    }

    if (!data || data.length === 0) {
      return {
        data: fallbackCertificates,
        isLive: true,
      };
    }

    const normalized = data.map((row, idx) =>
      normalizeSupabaseCertificate(row as SupabaseCertificateRow, idx)
    );

    return {
      data: normalized,
      isLive: true,
    };
  } catch (err) {
    console.warn('[Supabase] Exception fetching certificates:', err);
    return {
      data: fallbackCertificates,
      isLive: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
