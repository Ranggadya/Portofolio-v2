import { experiences } from '@/data/experience';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader left="03 // CAREER TRAJECTORY & EXPERIENCE" right="(2021 — PRESENT)" />
      <SectionTitle
        title="Work Experience & Track Record"
        description="Proven track record delivering production-grade web applications, engineering performant frontends, and translating ambitious design concepts into scalable digital reality."
        aside={<Pill>3+ Years Industry Experience</Pill>}
      />
      <ol className="space-y-6">
        {experiences.map((job) => (
          <li key={job.id} className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-md md:p-8 xl:p-10">
            <div className="flex flex-col justify-between gap-2 border-b border-line pb-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Badge tone={job.current ? 'success' : 'neutral'}>{job.period}</Badge>
                <span className="font-mono text-[11px] font-medium uppercase text-faint xl:text-xs">{job.type}</span>
              </div>
              <span className="font-mono text-xs text-soft xl:text-sm">{job.company}</span>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold tracking-tight sm:text-xl xl:text-2xl">{job.role}</h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm xl:text-base">{job.description}</p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {job.tags.map((t) => <li key={t}><Tag>{t}</Tag></li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
