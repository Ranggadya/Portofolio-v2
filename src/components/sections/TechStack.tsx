import { techPillars } from '@/data/techStack';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import Tag from '@/components/ui/Tag';

const totalTools = techPillars.reduce((n, p) => n + p.items.length, 0);

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionHeader left="04 // TECHNICAL STACK & CAPABILITIES" right="(ENGINEERING & DESIGN)" />
      <SectionTitle
        title="Tech Stack & Core Technologies"
        description="Specialized tooling, frontend runtimes, and engineering frameworks utilized across production web applications."
        aside={<><Pill>{totalTools}+ Production Tools</Pill><Pill solid>Modern Ecosystem</Pill></>}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
        {techPillars.map((p) => (
          <article key={p.id} className="flex flex-col justify-between space-y-6 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-md md:p-8 xl:p-10">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="rounded border border-line bg-chip px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest xl:text-xs">{p.label}</span>
                <span className="font-mono text-[11px] text-faint xl:text-xs">{p.tagline}</span>
              </div>
              <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl xl:text-2xl">{p.title}</h3>
              <p className="text-xs leading-relaxed text-muted sm:text-sm xl:text-base">{p.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {p.items.map((item) => <li key={item}><Tag round>{item}</Tag></li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
