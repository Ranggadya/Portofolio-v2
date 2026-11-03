import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { certificates as fallbackCertificates } from '@/data/certificates';
import type { Certificate } from '@/types';

export interface SupabaseCertificateRow {
  id?: number | string;
  title?: string;
  img?: string | null;
  link?: string | null;
  created_at?: string | null;
  // Fallbacks for alternative naming
  image?: string | null;
  image_url?: string | null;
  gambar?: string | null;
  verify_url?: string | null;
  url?: string | null;
  [key: string]: unknown;
}

function inferIssuer(title: string): { issuer: string; authority: string; category: string; icon: Certificate['icon'] } {
  const t = title.toLowerCase();

  if (t.includes('oracle')) {
    return {
      issuer: 'Oracle Academy',
      authority: 'Oracle Certified',
      category: 'Database Specialization',
      icon: 'shield',
    };
  }
  if (t.includes('google')) {
    return {
      issuer: 'Google Career Certs',
      authority: 'Google Authorized',
      category: 'Professional Certificate',
      icon: 'award',
    };
  }
  if (t.includes('dicoding')) {
    return {
      issuer: 'Dicoding Indonesia',
      authority: 'Dicoding Partner',
      category: 'Specialization Certificate',
      icon: 'code',
    };
  }
  if (t.includes('aws') || t.includes('amazon') || t.includes('cloud')) {
    return {
      issuer: 'Amazon Web Services',
      authority: 'AWS Training',
      category: 'Cloud Certification',
      icon: 'cloud',
    };
  }
  if (t.includes('meta')) {
    return {
      issuer: 'Meta via Coursera',
      authority: 'Meta Authorized',
      category: 'Professional Certificate',
      icon: 'code',
    };
  }
  if (t.includes('bnsp') || t.includes('skkni') || t.includes('nasional')) {
    return {
      issuer: 'BNSP Republik Indonesia',
      authority: 'SKKNI RI',
      category: 'National Competency',
      icon: 'shield',
    };
  }
  if (t.includes('ui') || t.includes('ux') || t.includes('design') || t.includes('figma')) {
    return {
      issuer: 'Design System Academy',
      authority: 'UI/UX Standards',
      category: 'Design Specialization',
      icon: 'palette',
    };
  }
  if (t.includes('react') || t.includes('front-end') || t.includes('back-end') || t.includes('javascript')) {
    return {
      issuer: 'Dicoding Indonesia',
      authority: 'Dicoding Partner',
      category: 'Developer Specialization',
      icon: 'code',
    };
  }
  if (t.includes('database') || t.includes('sql')) {
    return {
      issuer: 'Oracle Academy',
      authority: 'Database Systems',
      category: 'Database Competency',
      icon: 'shield',
    };
  }

  return {
    issuer: 'Accredited Authority',
    authority: 'Verified Issuance',
    category: 'Credential Certificate',
    icon: 'award',
  };
}

function inferTags(title: string): string[] {
  const t = title.toLowerCase();
  const tags: string[] = [];

  if (t.includes('react')) tags.push('React.js');
  if (t.includes('javascript') || t.includes('js')) tags.push('JavaScript ES6+');
  if (t.includes('frontend') || t.includes('front-end')) tags.push('Frontend Architecture');
  if (t.includes('backend') || t.includes('back-end') || t.includes('api')) tags.push('REST API');
  if (t.includes('web')) tags.push('Web Development');
  if (t.includes('cloud') || t.includes('aws')) tags.push('Cloud Architecture');
  if (t.includes('database') || t.includes('sql') || t.includes('mysql')) tags.push('SQL & Database');
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) tags.push('UI/UX Systems');
  if (t.includes('pwa')) tags.push('PWA & Service Worker');
  if (t.includes('node')) tags.push('Node.js');

  if (tags.length === 0) {
    tags.push('Certified Stack', 'Verified Active');
  }

  return tags.slice(0, 3);
}

export function normalizeSupabaseCertificate(
  row: SupabaseCertificateRow,
  index: number
): Certificate {
  const title = (row.title || `Certificate ${index + 1}`).trim();
  const imageUrl = row.img || row.image_url || row.image || row.gambar || undefined;
  const verifyUrl = row.link || row.verify_url || row.url || '#';
  const idStr = String(row.id ?? index + 1);

  let credentialId = `CERT-${idStr.padStart(3, '0')}`;
  if (row.link && row.link.includes('dicoding.com/certificates/')) {
    const parts = row.link.split('/certificates/');
    if (parts[1]) {
      credentialId = `DC-${parts[1].trim().split('/')[0]}`;
    }
  } else if (title.toLowerCase().includes('oracle')) {
    credentialId = `ORA-${idStr.padStart(3, '0')}`;
  }

  const { issuer, authority, category, icon } = inferIssuer(title);
  const tags = inferTags(title);

  let yearStr = '2025';
  if (row.created_at) {
    const d = new Date(row.created_at);
    if (!isNaN(d.getTime())) {
      yearStr = String(d.getFullYear());
    }
  }

  const issueDate = `ISSUE: ${yearStr}`;

  return {
    id: idStr,
    credentialId,
    title,
    issuer,
    issuerSub: `${issuer} // Official Record`,
    description: `Sertifikasi kredensial profesional "${title}" dengan verifikasi kurikulum dan kompetensi teruji.`,
    tags,
    verifyUrl: String(verifyUrl),
    imageUrl: imageUrl ? String(imageUrl) : undefined,
    link: String(verifyUrl),
    issueDate,
    validUntil: yearStr,
    badgeCode: credentialId,
    badgeCategory: category,
    badgeAuthority: authority,
    gradeBadge: 'A+ Grade',
    watermark: 'OFFICIAL',
    score: 'Score: Verified Active',
    syllabus: `Standar kurikulum dan evaluasi kompetensi pada program "${title}". Memenuhi kriteria verifikasi profesional resmi.`,
    icon,
  };
}

export async function fetchCertificates(): Promise<{
  data: Certificate[];
  isLive: boolean;
  error?: string;
}> {
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
  if (anonKey.startsWith('http')) {
    console.error(
      '[Supabase Error] VITE_SUPABASE_ANON_KEY di file .env Anda masih berisi URL, bukan API Key! API Key Supabase adalah kode panjang berawalan "eyJhbGci..." yang ada di menu Project Settings > Data API > Project API Keys (anon public).'
    );
    return {
      data: fallbackCertificates,
      isLive: false,
      error: 'VITE_SUPABASE_ANON_KEY must be a JWT token, not a URL.',
    };
  }

  if (!isSupabaseConfigured || !supabase) {
    return {
      data: fallbackCertificates,
      isLive: false,
    };
  }

  const configuredTable =
    import.meta.env.VITE_SUPABASE_CERTIFICATES_TABLE || 'certifikat';
  const candidateTables = Array.from(
    new Set([configuredTable, 'certifikat', 'certificates', 'certificate', 'sertifikat'])
  );

  for (const tableName of candidateTables) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.warn(`[Supabase] Gagal mengambil tabel "${tableName}":`, error.message);
        continue;
      }

      if (data && data.length > 0) {
        console.log(`[Supabase] Berhasil sinkronisasi ${data.length} sertifikat dari tabel "${tableName}"!`, data);
        const normalized = data.map((row, idx) =>
          normalizeSupabaseCertificate(row as SupabaseCertificateRow, idx)
        );

        return {
          data: normalized,
          isLive: true,
        };
      }
    } catch (err) {
      console.warn(`[Supabase] Exception pada tabel "${tableName}":`, err);
    }
  }

  return {
    data: fallbackCertificates,
    isLive: false,
    error: 'Table not found or empty',
  };
}
