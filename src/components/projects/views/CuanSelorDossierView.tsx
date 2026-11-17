import type { Project } from '@/types';
import AyamSehatMockup from '../AyamSehatMockup';

interface Props {
  project: Project;
}

const SERVICE_FLOW = [
  {
    step: '01',
    service: 'Next.js Web Client',
    role: 'User Input & Projection Charts',
    detail: 'Captures income, inflation, and retirement targets; renders P10/P50/P90 trajectory curves.',
  },
  {
    step: '02',
    service: 'Express.js Core API',
    role: 'Session & Business Orchestrator',
    detail: 'Validates user requests, manages persistence, and coordinates simulation & AI calls.',
  },
  {
    step: '03',
    service: 'FastAPI Actuarial Engine',
    role: '10,000-Path Monte Carlo',
    detail: 'Executes vectorized NumPy stochastic simulations isolated from web server traffic.',
  },
  {
    step: '04',
    service: 'PostgreSQL + Gemini AI',
    role: 'Persistence & Contextual Advisory',
    detail: 'Stores scenario records and translates probability bands into actionable financial insights.',
  },
];

export default function CuanSelorDossierView({ project }: Props) {
  const { dossier } = project;

  return (
    <div className="space-y-10 bg-surface p-6 sm:p-10">
      {/* Section 01: Overview & Financial Value */}
      <section
        id="dossier-overview"
        role="tabpanel"
        aria-labelledby="tab-overview"
        className="scroll-mt-4 space-y-8"
      >
        <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-inner dark:border-line sm:p-8">
          <AyamSehatMockup />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="space-y-1 font-mono md:col-span-4">
            <span className="block text-[11px] uppercase tracking-widest text-soft">
              01 // Product Value &amp; Problem Statement
            </span>
            <h3 className="text-base font-bold uppercase tracking-tight text-fg">
              Accessible Long-Term Financial Projections
            </h3>
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-muted sm:text-sm md:col-span-8">
            {dossier.challengeParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Multi-Service Pipeline Architecture */}
      <section
        id="dossier-pipeline"
        role="tabpanel"
        aria-labelledby="tab-pipeline"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>02 // DECOUPLED MULTI-SERVICE PIPELINE</span>
          <span className="rounded border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-semibold text-indigo-600 dark:text-indigo-400">
            NEXT.JS + EXPRESS + FASTAPI
          </span>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-bold uppercase leading-snug tracking-tight text-fg">
            {dossier.systemDesignHeadline}
          </h4>
          <p className="max-w-3xl text-xs leading-relaxed text-muted sm:text-sm">
            {dossier.systemDesignDesc}
          </p>
        </div>

        {/* End-to-End Request & Computation Pipeline */}
        <div className="rounded-2xl border border-line bg-subtle/60 p-5">
          <div className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-soft">
            Service-to-Service Data Flow
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_FLOW.map((node, index) => (
              <div
                key={node.step}
                className="relative flex flex-col justify-between rounded-xl border border-line bg-surface p-4 shadow-sm"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="rounded bg-chip px-2 py-0.5 font-bold text-fg">
                      STAGE {node.step}
                    </span>
                    {index < SERVICE_FLOW.length - 1 && (
                      <span aria-hidden="true" className="hidden font-bold text-soft lg:inline">
                        →
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-fg">{node.service}</div>
                  <div className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400">
                    {node.role}
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-snug text-muted">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Service Responsibilities */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dossier.layers.map((layer) => (
            <div
              key={layer.layer}
              className="space-y-1.5 rounded-xl border border-line bg-subtle/60 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="font-bold uppercase text-fg">{layer.layer}</span>
                <span className="text-soft">{layer.badge}</span>
              </div>
              <div className="text-xs font-bold text-fg">{layer.title}</div>
              <p className="text-[11px] leading-snug text-muted">{layer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Actuarial Simulation & AI Integration */}
      <section
        id="dossier-simulation"
        role="tabpanel"
        aria-labelledby="tab-simulation"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex items-center justify-between border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>03 // ACTUARIAL SIMULATION ENGINE &amp; AI INSIGHTS</span>
          <span>COMPUTATIONAL ISOLATION</span>
        </div>

        {dossier.codeSnippet && (
          <div className="space-y-3 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-5 font-mono text-xs text-white shadow-lg sm:p-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-[11px] text-neutral-400">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-medium text-neutral-300">
                  {dossier.codeSnippet.filename}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                {dossier.codeSnippet.lang}
              </span>
            </div>
            <pre className="overflow-x-auto text-[11px] leading-relaxed text-neutral-300">
              <code>{dossier.codeSnippet.code}</code>
            </pre>
          </div>
        )}

        <div className="space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 shadow-sm sm:p-6">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            Architectural Decisions &amp; Service Boundaries
          </div>
          <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
            {dossier.decisions.map((dec) => (
              <div key={dec.title} className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold tracking-tight text-fg">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                  <span>{dec.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted">{dec.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {dossier.capabilities.map((cap) => (
            <div
              key={cap.code}
              className="space-y-2 rounded-xl border border-line bg-subtle/60 p-4 shadow-sm"
            >
              <div className="font-mono text-[10px] font-semibold uppercase text-soft">
                {cap.code}
              </div>
              <div className="text-sm font-bold tracking-tight text-fg">{cap.title}</div>
              <p className="text-[11px] leading-relaxed text-muted">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: Tech Stack & Quote */}
      <section
        id="dossier-stack"
        role="tabpanel"
        aria-labelledby="tab-stack"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="space-y-3">
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            04 // Tech Stack &amp; Services Employed
          </span>
          <div className="flex flex-wrap gap-2">
            {dossier.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line/60 bg-chip px-3 py-1 font-mono text-[11px] font-medium text-fg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl border border-line bg-subtle p-5 font-mono text-xs leading-relaxed text-muted sm:p-6">
          <span
            aria-hidden="true"
            className="absolute left-4 top-3 font-serif text-lg leading-none text-soft"
          >
            “
          </span>
          <p className="pl-4 italic">{dossier.quote.text}</p>
          <span className="mt-2 block pl-4 font-mono text-[10px] font-bold uppercase tracking-wider text-soft">
            {dossier.quote.author}
          </span>
        </div>
      </section>
    </div>
  );
}
