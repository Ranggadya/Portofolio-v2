import type { Project } from '@/types';
import PortfolioMockup from './PortfolioMockup';
import AyamSehatMockup from './AyamSehatMockup';
import Shoes4UsMockup from './Shoes4UsMockup';

interface Props {
  project: Project;
  onOpenModal?: (project: Project) => void;
}

const MOCKUPS: Record<Project['mockup'], () => JSX.Element> = {
  portfolio: PortfolioMockup,
  ayamsehat: AyamSehatMockup,
  shoes4us: Shoes4UsMockup,
};

export default function ProjectCard({ project, onOpenModal }: Props) {
  const Mockup = MOCKUPS[project.mockup];
  return (
    <article className="group">
      <div
        onClick={() => onOpenModal?.(project)}
        className="project-card-bg cursor-pointer rounded-2xl border border-sky-100 p-6 shadow-sm transition-all duration-500 hover:shadow-xl dark:border-line sm:p-10 md:rounded-3xl md:p-14 xl:p-16"
      >
        <Mockup />
      </div>
      <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
        <div
          onClick={() => onOpenModal?.(project)}
          className="cursor-pointer space-y-1"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold tracking-tight transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300 md:text-lg xl:text-xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100 text-neutral-500">
              ↗
            </span>
          </div>
          <p className="text-xs font-medium text-soft md:text-sm xl:text-base">{project.stack}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal?.(project);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-neutral-700 transition-all hover:border-black hover:bg-black hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <span>Case Study Dossier</span>
            <span aria-hidden>↗</span>
          </button>
          <span className="font-mono text-xs text-faint md:text-sm xl:text-base">({project.year})</span>
        </div>
      </div>
    </article>
  );
}
