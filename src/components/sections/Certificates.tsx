import { certificates } from '@/data/certificates';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';

export default function Certificates() {
  return (
    <Section id="credentials">
      <SectionHeader left="05 // CREDENTIALS & HONORS" right="(2020 — 2024)" />
      <SectionTitle
        title="Licenses & Certifications"
        description="Accredited industry certifications in frontend engineering, cloud infrastructure, and UI/UX design with verified project implementations."
        aside={<Pill>{String(certificates.length).padStart(2, '0')} Verified Credentials</Pill>}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
        {certificates.map((c) => (
          <article key={c.id} className="flex flex-col justify-between space-y-6 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-md md:p-8 xl:p-10">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge tone="success">Verified Active</Badge>
                <span className="font-mono text-[11px] text-faint xl:text-xs">ID: {c.credentialId}</span>
              </div>
              <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl xl:text-2xl">{c.title}</h3>
              <p className="font-mono text-xs font-medium text-soft xl:text-sm">{c.issuer}</p>
              <p className="text-xs leading-relaxed text-muted sm:text-sm xl:text-base">{c.description}</p>
            </div>
            <div>
              <ul className="mb-4 flex flex-wrap gap-1.5">
                {c.tags.map((t) => <li key={t}><Tag size="sm">{t}</Tag></li>)}
              </ul>
              <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:text-indigo-500 xl:text-sm">
                Credential Verification ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
