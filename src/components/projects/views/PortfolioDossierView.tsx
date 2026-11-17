import type { Project } from '@/types';
import PortfolioMockup from '../PortfolioMockup';

interface Props {
  project: Project;
}

const TOKEN_SWATCHES = [
  { name: '--surface', label: 'Surface Sheet', swatchClass: 'bg-surface border-line' },
  { name: '--subtle', label: 'Subtle Panel', swatchClass: 'bg-subtle border-line' },
  { name: '--chip', label: 'Interactive Chip', swatchClass: 'bg-chip border-line' },
  { name: '--fg', label: 'Primary Ink', swatchClass: 'bg-fg border-fg' },
];

export default function PortfolioDossierView({ project }: Props) {
  const { dossier } = project;

  return (
    <div className="space-y-10 bg-surface p-6 sm:p-10">
      {/* Section 01: Overview & Editorial Value */}
      <section
        id="dossier-overview"
        role="tabpanel"
        aria-labelledby="tab-overview"
        className="scroll-mt-4 space-y-8"
      >
        <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-inner dark:border-line sm:p-8">
          <PortfolioMockup />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="space-y-1 font-mono md:col-span-4">
            <span className="block text-[11px] uppercase tracking-widest text-soft">
              01 // Design &amp; Engineering Purpose
            </span>
            <h3 className="text-base font-bold uppercase tracking-tight text-fg">
              Clarity at First Glance, Proof on Inspection
            </h3>
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-muted sm:text-sm md:col-span-8">
            {dossier.challengeParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Design System & Token Contract (No Artificial Code Block) */}
      <section
        id="dossier-tokens"
        role="tabpanel"
        aria-labelledby="tab-tokens"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>02 // DESIGN SYSTEM &amp; SEMANTIC TOKEN CONTRACT</span>
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
            ZERO-FLICKER DUAL THEME
          </span>
        </div>

        {/* Live Semantic Token & Typography Showcase */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 lg:col-span-7">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-soft">
              <span>Live CSS Variable Palette</span>
              <span>Adapts to Light / Dark Toggle</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TOKEN_SWATCHES.map((token) => (
                <div
                  key={token.name}
                  className="space-y-2 rounded-xl border border-line bg-surface p-3 shadow-sm"
                >
                  <div
                    aria-hidden="true"
                    className={`h-10 w-full rounded-lg border ${token.swatchClass}`}
                  />
                  <div className="font-mono text-[11px] font-bold text-fg">{token.name}</div>
                  <div className="text-[10px] text-soft">{token.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-soft">
              Self-Hosted Font Pairing (@fontsource)
            </div>
            <div className="space-y-2">
              <div className="rounded-xl border border-line bg-surface p-3">
                <span className="font-mono text-[10px] uppercase text-soft">
                  Display &amp; Narrative
                </span>
                <p className="font-sans text-base font-extrabold tracking-tight text-fg">
                  Plus Jakarta Sans Variable
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-3">
                <span className="font-mono text-[10px] uppercase text-soft">
                  Technical Indices &amp; Telemetry
                </span>
                <p className="font-mono text-sm font-bold tracking-wider text-fg">
                  Space Grotesk (Latin 500/700)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Frontend Architecture Layers */}
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

      {/* Section 03: Optimization Benchmarks & Stack */}
      <section
        id="dossier-optimization"
        role="tabpanel"
        aria-labelledby="tab-optimization"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex items-center justify-between border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>03 // VERIFIED PERFORMANCE &amp; ACCESSIBILITY OPTIMIZATIONS</span>
          <span>PRODUCTION MEASURED</span>
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

        <div className="space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 shadow-sm sm:p-6">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            Key Engineering Optimizations Applied
          </div>
          <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
            {dossier.decisions.map((dec) => (
              <div key={dec.title} className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold tracking-tight text-fg">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{dec.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted">{dec.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            Frontend Stack &amp; Tooling
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
