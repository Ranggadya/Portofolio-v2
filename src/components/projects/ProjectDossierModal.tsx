import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/types';
import PortfolioDossierView from './views/PortfolioDossierView';
import CuanSelorDossierView from './views/CuanSelorDossierView';
import Shoes4UsDossierView from './views/Shoes4UsDossierView';

interface Props {
  project: Project;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  allProjects: Project[];
}

interface DossierTab {
  id: string;
  label: string;
  targetId: string;
}

const PROJECT_TABS: Record<string, DossierTab[]> = {
  portfolio: [
    { id: 'overview', label: '01. OVERVIEW', targetId: 'dossier-overview' },
    { id: 'tokens', label: '02. DESIGN & TOKENS', targetId: 'dossier-tokens' },
    { id: 'optimization', label: '03. OPTIMIZATION & STACK', targetId: 'dossier-optimization' },
  ],
  cuanselor: [
    { id: 'overview', label: '01. OVERVIEW & VALUE', targetId: 'dossier-overview' },
    { id: 'pipeline', label: '02. SERVICE PIPELINE', targetId: 'dossier-pipeline' },
    { id: 'simulation', label: '03. SIMULATION & AI', targetId: 'dossier-simulation' },
    { id: 'stack', label: '04. TECH STACK', targetId: 'dossier-stack' },
  ],
  shoes4us: [
    { id: 'overview', label: '01. OVERVIEW & VALUE', targetId: 'dossier-overview' },
    { id: 'architecture', label: '02. SYSTEM ARCHITECTURE', targetId: 'dossier-architecture' },
    { id: 'transactions', label: '03. TRANSACTIONAL ENGINE', targetId: 'dossier-transactions' },
    { id: 'stack', label: '04. QUALITY & STACK', targetId: 'dossier-stack' },
  ],
};

export default function ProjectDossierModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: Props) {
  const tabs = PROJECT_TABS[project.id] ?? PROJECT_TABS.portfolio;
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const dossier = project.dossier;

  // Find prev & next projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Reset active tab and scroll overlay to top when switching projects
  useEffect(() => {
    const nextTabs = PROJECT_TABS[project.id] ?? PROJECT_TABS.portfolio;
    setActiveTab(nextTabs[0].id);
    overlayRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Lock body scroll, capture previous focus, and enforce focus trap
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

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

  const scrollToTab = (tab: DossierTab) => {
    setActiveTab(tab.id);
    const element = document.getElementById(tab.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderProjectView = () => {
    switch (project.id) {
      case 'portfolio':
        return <PortfolioDossierView project={project} />;
      case 'cuanselor':
        return <CuanSelorDossierView project={project} />;
      case 'shoes4us':
      default:
        return <Shoes4UsDossierView project={project} />;
    }
  };

  return (
    <div
      ref={overlayRef}
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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
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
              <span aria-hidden="true">•</span>
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

        {/* Per-Project Navigation Tab Strip & Outgoing Links */}
        <div
          role="tablist"
          aria-label={`${project.title} dossier sections`}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-subtle/90 px-6 py-2.5 text-xs sm:px-10"
        >
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            {tabs.map((tab) => {
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

        {/* Custom Per-Project Dossier Content */}
        {renderProjectView()}

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
