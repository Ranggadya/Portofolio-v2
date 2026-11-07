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
      <div className="relative w-full pt-4 md:pt-6">
        {/* Continuous Structural Timeline Line */}
        <div
          className="absolute left-4 md:left-60 top-3 bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-line via-line to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((job) => (
            <div
              key={job.id}
              className="group relative flex flex-col md:flex-row items-start"
            >
              {/* Timeline Node Marker */}
              <div
                className="absolute left-4 md:left-60 top-1.5 -translate-x-1/2 z-10 flex items-center justify-center"
                aria-hidden="true"
              >
                {job.current ? (
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-surface" />
                  </span>
                ) : (
                  <span className="h-3 w-3 rounded-full bg-fg ring-4 ring-surface transition-transform duration-200 group-hover:scale-125" />
                )}
              </div>

              {/* Left Side: Chrono & Era Meta */}
              <div className="w-full md:w-60 md:shrink-0 pl-10 md:pl-0 md:pr-8 flex flex-row flex-wrap md:flex-col items-center md:items-end justify-between md:justify-start gap-2 md:gap-1.5 text-left md:text-right mb-3 md:mb-0">
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-fg whitespace-nowrap">
                  {job.period}
                </span>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${
                    job.current
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                      : 'bg-chip text-muted border border-line/60'
                  }`}
                >
                  {job.type}
                </span>
                {job.era && (
                  <span className="hidden md:block font-mono text-[11px] text-faint tracking-wider uppercase mt-0.5">
                    {job.era}
                  </span>
                )}
              </div>

              {/* Right Side: Milestone Telemetry Card */}
              <div className="w-full pl-10 md:pl-8 flex-1 min-w-0">
                <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 shadow-sm space-y-6 hover:border-fg/40 transition-colors">
                  {/* Role & Company Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-line pb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-fg tracking-tight">
                        {job.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-soft font-medium mt-1">
                        {job.company}
                      </p>
                    </div>
                    {job.env && (
                      <span className="self-start md:self-auto font-mono text-[11px] px-2.5 py-1 bg-chip rounded text-fg uppercase font-medium border border-line/50">
                        {job.env}
                      </span>
                    )}
                  </div>

                  {/* Impact Metrics Bento Slip */}
                  {job.metrics && job.metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
