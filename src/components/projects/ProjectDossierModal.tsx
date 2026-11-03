import { useEffect, useState } from 'react';
import type { Project } from '@/types';
import PortfolioMockup from './PortfolioMockup';
import AyamSehatMockup from './AyamSehatMockup';

interface Props {
  project: Project;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  allProjects: Project[];
}

const MOCKUPS: Record<Project['mockup'], () => JSX.Element> = {
  portfolio: PortfolioMockup,
  ayamsehat: AyamSehatMockup,
};

type TabId = 'overview' | 'architecture' | 'stack' | 'benchmarks';

const TABS: { id: TabId; label: string; targetId: string }[] = [
  { id: 'overview', label: '01. OVERVIEW', targetId: 'dossier-overview' },
  { id: 'architecture', label: '02. CODE ARCHITECTURE', targetId: 'dossier-architecture' },
  { id: 'stack', label: '03. TECH STACK & PATTERNS', targetId: 'dossier-stack' },
  { id: 'benchmarks', label: '04. BENCHMARKS & PERFORMANCE', targetId: 'dossier-benchmarks' },
];

export default function ProjectDossierModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const Mockup = MOCKUPS[project.mockup];
  const dossier = project.dossier;

  // Find prev & next projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Lock body scroll and register Escape key listener
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
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
        className="relative my-4 w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-300/80 bg-[#fafafc] font-sans text-[#121316] shadow-2xl transition-all duration-300 dark:border-neutral-700/80 dark:bg-[#101216] dark:text-[#f0f2f5] sm:my-8 md:rounded-3xl"
        style={{
          boxShadow:
            '0 25px 60px -15px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Dossier Document Header & Index Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-100/80 px-6 pb-4 pt-6 font-mono text-[11px] uppercase tracking-wider text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-400 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              PROJECT DOSSIER // REF. {dossier.ref}
            </span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 sm:inline">|</span>
            <span className="hidden text-neutral-500 dark:text-neutral-400 sm:inline">
              DISCIPLINE: {dossier.discipline}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {dossier.status}
            </span>
            <button
              type="button"
              onClick={onClose}
              title="Close modal (Esc)"
              className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-2.5 py-1 font-bold text-neutral-800 shadow-sm transition-all hover:border-black hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              ESC / CLOSE ✕
            </button>
          </div>
        </div>

        {/* Document Title & Headline Block */}
        <div className="border-b border-neutral-200 bg-white px-6 pb-6 pt-8 dark:border-neutral-800 dark:bg-[#14171d] sm:px-10">
          <div className="max-w-4xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              <span>{dossier.featuredTag}</span>
              <span aria-hidden>•</span>
              <span>{dossier.estYear}</span>
            </div>
            <h2
              id="dossier-title"
              className="text-2xl font-extrabold uppercase leading-[1.08] tracking-tight text-[#0d0f12] dark:text-white sm:text-4xl md:text-5xl"
            >
              {project.title}
            </h2>
            <p className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
              {dossier.summary}
            </p>
          </div>

          {/* Quick Dossier Spec Sheet Table */}
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-100 pt-6 text-left font-mono dark:border-neutral-800 md:grid-cols-4">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Client / Context
              </span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {dossier.clientContext}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Role &amp; Discipline
              </span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {dossier.roleDiscipline}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Timeline &amp; State
              </span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {dossier.timelineState}
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Primary Stack
              </span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {dossier.primaryStack}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tab Strip & Outgoing Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-100/90 px-6 py-3 text-xs dark:border-neutral-800 dark:bg-neutral-900/80 sm:px-10">
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToTab(tab)}
                  className={`rounded-full px-3 py-1.5 font-semibold transition-colors ${
                    isSelected
                      ? 'bg-black text-white shadow-sm dark:bg-white dark:text-black'
                      : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
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
                className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-3 py-1.5 font-semibold text-neutral-800 shadow-sm transition-colors hover:border-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-white"
              >
                Live Demo ↗
              </a>
            )}
            {dossier.githubUrl && (
              <a
                href={dossier.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1.5 font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                GitHub Repo ↗
              </a>
            )}
          </div>
        </div>

        {/* Main Paper Sheet Content Scrollable Area */}
        <div className="space-y-10 bg-[#fafafc] p-6 dark:bg-[#101216] sm:p-10">
          {/* Section: Overview & Embedded Mockup Screen Frame */}
          <section id="dossier-overview" className="scroll-mt-4 space-y-8">
            <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-inner dark:border-neutral-800 sm:p-8">
              <Mockup />
            </div>

            {/* Narrative & Challenge Section */}
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className="space-y-1 font-mono md:col-span-4">
                <span className="block text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Phase 01
                </span>
                <h3 className="text-base font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                  The Challenge &amp; Thesis
                </h3>
              </div>
              <div className="space-y-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-sm md:col-span-8">
                {dossier.challengeParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Architecture & System Anatomy */}
          <section
            id="dossier-architecture"
            className="scroll-mt-4 space-y-6 border-t border-neutral-200 pt-6 dark:border-neutral-800"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              <span>02 // ARCHITECTURE &amp; SYSTEM ANATOMY</span>
              <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400">
                VERIFIED BLUEPRINT
              </span>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className="space-y-2 md:col-span-4">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  SYSTEM DESIGN
                </span>
                <h4 className="text-lg font-bold uppercase leading-snug tracking-tight text-neutral-900 dark:text-white">
                  {dossier.systemDesignHeadline}
                </h4>
                <p className="text-xs font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {dossier.systemDesignDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-8">
                {dossier.layers.map((layer) => (
                  <div
                    key={layer.layer}
                    className="space-y-1.5 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="font-bold uppercase text-neutral-900 dark:text-neutral-100">
                        {layer.layer}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-500">{layer.badge}</span>
                    </div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      {layer.title}
                    </div>
                    <p className="text-[11px] leading-snug text-neutral-500 dark:text-neutral-400">
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
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
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
            <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90 sm:p-6">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Architectural Decisions &amp; Quality Attributes
              </div>
              <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
                {dossier.decisions.map((dec) => (
                  <div key={dec.title} className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold tracking-tight text-neutral-900 dark:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {dec.title}
                    </div>
                    <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
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
            className="scroll-mt-4 space-y-4 border-t border-neutral-200 pt-6 dark:border-neutral-800"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <span>Key Architecture Capabilities</span>
              <span>Specs Verified</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {dossier.capabilities.map((cap) => (
                <div
                  key={cap.code}
                  className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/90"
                >
                  <div className="font-mono text-[10px] font-semibold uppercase text-neutral-400 dark:text-neutral-500">
                    {cap.code}
                  </div>
                  <div className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white">
                    {cap.title}
                  </div>
                  <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Tech Stack Badges Strip */}
          <section
            id="dossier-stack"
            className="scroll-mt-4 space-y-3 border-t border-neutral-200 pt-6 dark:border-neutral-800"
          >
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Tech Stack &amp; Tooling Employed
            </span>
            <div className="flex flex-wrap gap-2">
              {dossier.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-neutral-200/80 px-3 py-1 font-mono text-[11px] font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Printed Editorial Quote / Takeaway Callout */}
          <div className="relative rounded-2xl border border-neutral-300/80 bg-neutral-100 p-5 font-mono text-xs leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 sm:p-6">
            <span
              aria-hidden
              className="absolute left-4 top-3 font-serif text-lg leading-none text-neutral-400 dark:text-neutral-600"
            >
              “
            </span>
            <p className="italic pl-4">{dossier.quote.text}</p>
            <span className="mt-2 block pl-4 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {dossier.quote.author}
            </span>
          </div>
        </div>

        {/* Tactile Paper Sheet Footer & Navigation Strip */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-100/90 px-6 py-5 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900/80 sm:flex-row sm:px-10">
          <div className="flex items-center gap-4 text-[11px] text-neutral-500 dark:text-neutral-400">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.id)}
              className="font-medium transition-colors hover:text-black dark:hover:text-white"
            >
              ← Prev: {prevProject.title.split('—')[0].trim()}
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.id)}
              className="font-medium transition-colors hover:text-black dark:hover:text-white"
            >
              Next: {nextProject.title.split('—')[0].trim()} →
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] text-neutral-400 dark:text-neutral-500 sm:inline">
              Press ESC or click backdrop to return
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-black px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Close Sheet
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

