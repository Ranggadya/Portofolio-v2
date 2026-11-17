import type { Project } from '@/types';
import Shoes4UsMockup from '../Shoes4UsMockup';

interface Props {
  project: Project;
}

const TRANSACTION_STEPS = [
  {
    step: '01',
    title: 'Deterministic Item Sorting',
    desc: 'Sorts checkout items by (productId, size) before acquiring row locks to prevent concurrent database deadlocks.',
  },
  {
    step: '02',
    title: 'Conditional Stock Deduction',
    desc: 'Executes atomic UPDATE with WHERE stock >= quantity and verifies RowsAffected() > 0 to prevent negative stock.',
  },
  {
    step: '03',
    title: 'Order & Line-Item Persistence',
    desc: 'Inserts order header, size-specific order items, and clears the customer cart inside the same transaction.',
  },
  {
    step: '04',
    title: 'Atomic Commit or Rollback',
    desc: 'Commits only when every step succeeds; any failure triggers immediate tx.Rollback(ctx) with zero partial state.',
  },
];

export default function Shoes4UsDossierView({ project }: Props) {
  const { dossier } = project;

  return (
    <div className="space-y-10 bg-surface p-6 sm:p-10">
      {/* Section 01: Overview & Retail Value */}
      <section
        id="dossier-overview"
        role="tabpanel"
        aria-labelledby="tab-overview"
        className="scroll-mt-4 space-y-8"
      >
        <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-inner dark:border-line sm:p-8">
          <Shoes4UsMockup />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="space-y-1 font-mono md:col-span-4">
            <span className="block text-[11px] uppercase tracking-widest text-soft">
              01 // E-Commerce Value &amp; Concurrency Challenge
            </span>
            <h3 className="text-base font-bold uppercase tracking-tight text-fg">
              Size-Specific Inventory &amp; Checkout Integrity
            </h3>
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-muted sm:text-sm md:col-span-8">
            {dossier.challengeParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Layered Full-Stack Architecture */}
      <section
        id="dossier-architecture"
        role="tabpanel"
        aria-labelledby="tab-architecture"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>02 // LAYERED FULL-STACK ARCHITECTURE</span>
          <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-semibold text-cyan-700 dark:text-cyan-400">
            REACT 19 + GO 1.24 + POSTGRESQL
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="space-y-2 md:col-span-4">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-soft">
              SYSTEM BOUNDARIES
            </span>
            <h4 className="text-lg font-bold uppercase leading-snug tracking-tight text-fg">
              {dossier.systemDesignHeadline}
            </h4>
            <p className="text-xs font-normal leading-relaxed text-muted">
              {dossier.systemDesignDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-8">
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
        </div>
      </section>

      {/* Section 03: Transactional Checkout Engine */}
      <section
        id="dossier-transactions"
        role="tabpanel"
        aria-labelledby="tab-transactions"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>03 // TRANSACTIONAL CHECKOUT &amp; ATOMIC INVENTORY ENGINE</span>
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
            ACID TRANSACTIONAL SAFETY
          </span>
        </div>

        {/* 4-Step Transaction Execution Flow */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRANSACTION_STEPS.map((item) => (
            <div
              key={item.step}
              className="space-y-1.5 rounded-xl border border-line bg-subtle/60 p-4 shadow-sm"
            >
              <span className="inline-block rounded bg-chip px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-700 dark:text-cyan-400">
                STEP {item.step}
              </span>
              <div className="text-xs font-bold text-fg">{item.title}</div>
              <p className="text-[11px] leading-snug text-muted">{item.desc}</p>
            </div>
          ))}
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

        {/* 4 Engineering Decisions */}
        <div className="space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 shadow-sm sm:p-6">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            Backend &amp; Concurrency Engineering Decisions
          </div>
          <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
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
      </section>

      {/* Section 04: Quality Engineering, CI Pipeline & Stack */}
      <section
        id="dossier-stack"
        role="tabpanel"
        aria-labelledby="tab-stack"
        className="scroll-mt-4 space-y-6 border-t border-line pt-6"
      >
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-soft">
          <span>04 // QUALITY ASSURANCE, SECURITY &amp; TECH STACK</span>
          <span>CI VERIFIED</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        <div className="space-y-3">
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
            Production Stack &amp; Infrastructure
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
