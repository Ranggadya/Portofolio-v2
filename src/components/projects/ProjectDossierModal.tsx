import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/types';
import PortfolioMockup from './PortfolioMockup';
import AyamSehatMockup from './AyamSehatMockup';
import Shoes4UsMockup from './Shoes4UsMockup';

interface Props {
  project: Project;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  allProjects: Project[];
}

const MOCKUPS: Record<Project['mockup'], () => JSX.Element> = {
  portfolio: PortfolioMockup,
  ayamsehat: AyamSehatMockup,
  shoes4us: Shoes4UsMockup,
};

type TabId = 'overview' | 'architecture' | 'benchmarks' | 'stack';

const TABS: { id: TabId; label: string; targetId: string }[] = [
  { id: 'overview', label: '01. OVERVIEW', targetId: 'dossier-overview' },
  { id: 'architecture', label: '02. CODE ARCHITECTURE', targetId: 'dossier-architecture' },
  { id: 'benchmarks', label: '03. BENCHMARKS & PERFORMANCE', targetId: 'dossier-benchmarks' },
  { id: 'stack', label: '04. TECH STACK & PATTERNS', targetId: 'dossier-stack' },
];

export default function ProjectDossierModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const modalRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const Mockup = MOCKUPS[project.mockup];
  const dossier = project.dossier;

  // Find prev & next projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Lock body scroll, capture previous focus, and enforce focus trap
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Shift initial focus to the first interactive element inside the modal
    const focusTimeout = window.setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const nodes = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)
        ).filter((el) => el.offsetParent !== null);

        if (nodes.length === 0) return;

        const first = nodes[0];
        const last = nodes[nodes.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimeout);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  const scrollToTab = (tab: (typeof TABS)[0]) => {
    setActiveTab(tab.id);
    const element = document.getElementById(tab.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6 md:p-10"
    >
      {/* Clickable backdrop dismissal layer */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Tactile Editorial Paper Modal Sheet */}
      <article
        ref={modalRef}
        className="relative my-4 w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface font-sans text-fg shadow-2xl transition-all duration-300 sm:my-8 md:rounded-3xl"
        style={{
          boxShadow:
            '0 25px 60px -15px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Dossier Document Header & Index Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-subtle/80 px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted sm:px-10">
          <div className="flex items-center gap-3">
            <span className="font-bold text-fg">
              PROJECT DOSSIER // REF. {dossier.ref}
            </span>
            <span className="hidden text-faint sm:inline">|</span>
            <span className="hidden text-soft sm:inline">
              DISCIPLINE: {dossier.discipline}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {dossier.status}
            </span>
            <button
              type="button"
              onClick={onClose}
              title="Close modal (Esc)"
              aria-label="Close case study dossier"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-line bg-surface px-3.5 py-2 font-mono text-xs font-bold text-fg shadow-sm transition-all hover:bg-fg hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              ESC / CLOSE ✕
            </button>
          </div>
        </div>

        {/* Document Title & Headline Block */}
        <div className="border-b border-line bg-surface px-6 pb-6 pt-8 sm:px-10">
          <div className="max-w-4xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-soft">
              <span>{dossier.featuredTag}</span>
              <span aria-hidden>•</span>
              <span>{dossier.estYear}</span>
            </div>
            <h2
              id="dossier-title"
              className="text-2xl font-extrabold uppercase leading-[1.08] tracking-tight text-fg sm:text-4xl md:text-5xl"
            >
              {project.title}
            </h2>
            <p className="text-sm font-normal leading-relaxed text-muted sm:text-base">
              {dossier.summary}
            </p>
          </div>

          {/* Quick Dossier Spec Sheet Table */}
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-left font-mono md:grid-cols-4">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-soft">
                Client / Context
              </span>
              <p className="text-xs font-bold text-fg">
                {dossier.clientContext}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-soft">
                Role &amp; Discipline
              </span>
              <p className="text-xs font-bold text-fg">
                {dossier.roleDiscipline}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-soft">
                Timeline &amp; State
              </span>
              <p className="text-xs font-bold text-fg">
                {dossier.timelineState}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-soft">
                Primary Stack
              </span>
              <p className="text-xs font-bold text-fg">
                {dossier.primaryStack}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tab Strip & Outgoing Links */}
        <div
          role="tablist"
          aria-label="Dossier section navigation"
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-subtle/90 px-6 py-2.5 text-xs sm:px-10"
        >
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={tab.targetId}
                  tabIndex={isSelected ? 0 : -1}
                  type="button"
                  onClick={() => scrollToTab(tab)}
                  className={`inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-2 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg ${
                    isSelected
                      ? 'bg-fg text-surface shadow-sm'
                      : 'text-muted hover:text-fg'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            {dossier.liveUrl && (
              <a
                href={dossier.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-line bg-surface px-4 py-2 font-semibold text-fg shadow-sm transition-colors hover:bg-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                Live Demo ↗
              </a>
            )}
            {dossier.githubUrl && (
              <a
                href={dossier.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1 rounded-full bg-fg px-4 py-2 font-semibold text-surface shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                GitHub Repo ↗
              </a>
            )}
          </div>
        </div>

        {/* Main Paper Sheet Content Scrollable Area */}
        <div className="space-y-10 bg-surface p-6 sm:p-10">
          {/* Section: Overview & Embedded Mockup Screen Frame */}
          <section
            id="dossier-overview"
            role="tabpanel"
            aria-labelledby="tab-overview"
            className="scroll-mt-4 space-y-8"
          >
            <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-inner dark:border-line sm:p-8">
              <Mockup />
            </div>

            {/* Narrative & Challenge Section */}
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className="space-y-1 font-mono md:col-span-4">
                <span className="block text-[11px] uppercase tracking-widest text-soft">
                  Phase 01
                </span>
                <h3 className="text-base font-bold uppercase tracking-tight text-fg">
                  The Challenge &amp; Thesis
                </h3>
              </div>
              <div className="space-y-3 text-xs leading-relaxed text-muted sm:text-sm md:col-span-8">
                {dossier.challengeParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Architecture & System Anatomy */}
          <section
            id="dossier-architecture"
            role="tabpanel"
            aria-labelledby="tab-architecture"
            className="scroll-mt-4 space-y-6 border-t border-line pt-6"
          >
            <div className="flex items-center justify-between border-b border-line pb-2 font-mono text-[11px] uppercase tracking-wider text-soft">
              <span>02 // ARCHITECTURE &amp; SYSTEM ANATOMY</span>
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
                VERIFIED BLUEPRINT
              </span>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className="space-y-2 md:col-span-4">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-soft">
                  SYSTEM DESIGN
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
                      <span className="font-bold uppercase text-fg">
                        {layer.layer}
                      </span>
                      <span className="text-soft">{layer.badge}</span>
                    </div>
                    <div className="text-xs font-bold text-fg">
                      {layer.title}
                    </div>
                    <p className="text-[11px] leading-snug text-muted">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
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

            {/* Architectural Decisions & Quality Attributes */}
            <div className="space-y-3 rounded-2xl border border-line bg-subtle/60 p-5 shadow-sm sm:p-6">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
                Architectural Decisions &amp; Quality Attributes
              </div>
              <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
                {dossier.decisions.map((dec) => (
                  <div key={dec.title} className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold tracking-tight text-fg">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {dec.title}
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted">
                      {dec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Benchmarks & Capabilities */}
          <section
            id="dossier-benchmarks"
            role="tabpanel"
            aria-labelledby="tab-benchmarks"
            className="scroll-mt-4 space-y-4 border-t border-line pt-6"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-soft">
              <span>03 // Key Architecture Capabilities</span>
              <span>Specs Verified</span>
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
                  <div className="text-sm font-bold tracking-tight text-fg">
                    {cap.title}
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Tech Stack Badges Strip */}
          <section
            id="dossier-stack"
            role="tabpanel"
            aria-labelledby="tab-stack"
            className="scroll-mt-4 space-y-3 border-t border-line pt-6"
          >
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-soft">
              04 // Tech Stack &amp; Tooling Employed
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
          </section>

          {/* Printed Editorial Quote / Takeaway Callout */}
          <div className="relative rounded-2xl border border-line bg-subtle p-5 font-mono text-xs leading-relaxed text-muted sm:p-6">
            <span
              aria-hidden="true"
              className="absolute left-4 top-3 font-serif text-lg leading-none text-soft"
            >
              “
            </span>
            <p className="italic pl-4">{dossier.quote.text}</p>
            <span className="mt-2 block pl-4 font-mono text-[10px] font-bold uppercase tracking-wider text-soft">
              {dossier.quote.author}
            </span>
          </div>
        </div>

        {/* Tactile Paper Sheet Footer & Navigation Strip */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line bg-subtle/90 px-6 py-4 font-mono text-xs sm:flex-row sm:px-10">
          <div className="flex items-center gap-4 text-[11px] text-muted">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.id)}
              className="inline-flex min-h-[44px] items-center font-medium transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              ← Prev: {prevProject.title.split('—')[0].trim()}
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.id)}
              className="inline-flex min-h-[44px] items-center font-medium transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              Next: {nextProject.title.split('—')[0].trim()} →
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] text-soft sm:inline">
              Press ESC or click backdrop to return
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-fg px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-surface shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              Close Sheet
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
