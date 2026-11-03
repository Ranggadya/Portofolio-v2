import { experiences } from '@/data/experience';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import Tag from '@/components/ui/Tag';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        left="03 // CAREER TRAJECTORY & EXPERIENCE"
        right="(2023 — PRESENT)"
      />
      <SectionTitle
        title="Work Experience & Track Record"
        description="Proven track record delivering production-grade web applications, engineering performant frontends, and translating ambitious architectural concepts into scalable digital reality."
        aside={<Pill>3+ Years Industry Experience</Pill>}
      />

      {/* Timeline Root Container */}
      <div className="relative w-full pt-6">
        {/* Continuous Structural Line */}
        <div
          className="absolute left-4 md:left-[210px] top-8 bottom-12 w-px bg-line"
          aria-hidden="true"
        />

        <div className="space-y-16">
          {experiences.map((job) => (
            <div
              key={job.id}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Left Side: Chrono & Node Marker */}
              <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-between md:justify-start pl-12 md:pl-0 pr-0 md:pr-8 space-y-1.5">
                {/* Timeline node */}
                <div
                  className={`absolute left-2.5 md:left-[205px] top-1.5 w-3 h-3 rounded-full ring-4 ring-surface z-10 ${
                    job.current ? 'bg-emerald-500 animate-pulse' : 'bg-fg'
                  }`}
                  aria-hidden="true"
                />
                <span className="font-mono text-sm md:text-base font-bold uppercase text-fg">
                  {job.period}
                </span>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold tracking-wider uppercase ${
                    job.current
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                      : 'bg-chip text-fg'
                  }`}
                >
                  {job.type}
                </span>
                {job.era && (
                  <span className="hidden md:block font-mono text-xs text-faint mt-1">
                    {job.era}
                  </span>
                )}
              </div>

              {/* Right Side: Milestone Telemetry Card */}
              <div className="md:col-span-9 rounded-2xl border border-line bg-surface p-6 md:p-8 shadow-sm space-y-6 hover:border-fg/40 transition-colors">
                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-line pb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-fg tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-soft font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  {job.env && (
                    <span className="self-start md:self-auto font-mono text-xs px-2.5 py-1 bg-chip rounded text-fg uppercase font-medium">
                      {job.env}
                    </span>
                  )}
                </div>

                {/* Impact Metrics Bento Slip */}
                {job.metrics && job.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {job.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3.5 bg-subtle rounded-xl border border-line/60 space-y-0.5"
                      >
                        <span className="font-mono text-[10px] text-faint uppercase block tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-sm md:text-base font-bold text-fg block">
                          {metric.value}
                        </span>
                        <span className="text-xs text-muted block">
                          {metric.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quantified Narrative Bullets */}
                {job.bullets && job.bullets.length > 0 ? (
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-fg font-mono font-bold text-xs mt-0.5 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {job.description}
                  </p>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {job.tags.map((tag) => (
                    <Tag key={tag} size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>

                {/* Architecture Artifact Mini-Slip */}
                {job.artifact && (
                  <div className="p-3.5 bg-subtle border border-line/70 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="h-4 w-4 text-fg shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <span className="font-mono font-bold text-fg">
                        {job.artifact.name}
                      </span>
                    </div>
                    <span className="font-mono text-faint uppercase hidden sm:inline-block">
                      {job.artifact.type}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
