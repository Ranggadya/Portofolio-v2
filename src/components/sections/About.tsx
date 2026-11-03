import { profile } from '@/data/profile';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';

const specRows = [
  { label: 'Discipline', value: profile.discipline },
  { label: 'Experience', value: profile.experience },
];
const outlineBtn =
  'inline-flex items-center rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-fg hover:text-fg';

export default function About() {
  return (
    <Section id="about">
      <SectionHeader left="01 // ABOUT THE CRAFT" right="(ARCHITECT & MAKER)" />
      <h2 className="mb-12 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl xl:text-7xl">
        {profile.aboutHeadline}
      </h2>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12 xl:gap-16">
        <div className="space-y-6 md:col-span-5 xl:col-span-4">
          <div className="group relative overflow-hidden rounded-2xl border border-line bg-chip shadow-sm md:rounded-3xl">
            <img
              src={profile.photo}
              alt={`${profile.fullName} — Software Engineer`}
              loading="lazy"
              className="aspect-[4/5] h-auto w-full object-cover grayscale contrast-[1.05] transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/95 px-3 py-1 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-900">{profile.location}</span>
            </div>
          </div>

          <dl className="space-y-4 rounded-2xl border border-line bg-subtle p-6 font-mono text-[11px] xl:text-xs">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <dt className="uppercase tracking-wider text-soft">Status</dt>
              <dd><Badge tone="success">{profile.status}</Badge></dd>
            </div>
            {specRows.map((row, i) => (
              <div key={row.label} className={`flex items-center justify-between ${i === 0 ? 'border-b border-line pb-3' : ''}`}>
                <dt className="uppercase tracking-wider text-soft">{row.label}</dt>
                <dd className="font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-8 md:col-span-7 xl:col-span-8">
          <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base xl:text-lg">
            {profile.aboutParagraphs.map((text, i) => (
              <p key={i} className={i === 0 ? 'font-medium text-fg' : ''}>{text}</p>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-faint xl:text-xs">Core Engineering Principles</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:gap-4">
              {profile.principles.map((p) => (
                <div key={p.title} className="space-y-1.5 rounded-xl border border-line bg-surface p-4 shadow-sm xl:p-5">
                  <div className="text-xs font-bold tracking-tight xl:text-sm">{p.title}</div>
                  <p className="text-[11px] leading-snug text-soft xl:text-xs">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-y border-line py-6 xl:gap-8">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dd className="text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-4xl">{s.value}</dd>
                <dt className="mt-1 font-mono text-[11px] uppercase tracking-wider text-soft xl:text-xs">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-surface shadow-sm transition-opacity hover:opacity-80 md:text-sm">
              Download Resume / CV ↓
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className={outlineBtn}>GitHub ↗</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className={outlineBtn}>LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`} className={outlineBtn}>Get in Touch</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
