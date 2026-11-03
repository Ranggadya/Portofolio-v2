import type { Project } from '@/types';
import PortfolioMockup from './PortfolioMockup';
import AyamSehatMockup from './AyamSehatMockup';

const MOCKUPS: Record<Project['mockup'], () => JSX.Element> = {
  portfolio: PortfolioMockup,
  ayamsehat: AyamSehatMockup,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Mockup = MOCKUPS[project.mockup];
  return (
    <article>
      <div className="project-card-bg rounded-2xl border border-sky-100 p-6 shadow-sm transition-shadow duration-500 hover:shadow-md dark:border-line sm:p-10 md:rounded-3xl md:p-14 xl:p-16">
        <Mockup />
      </div>
      <div className="mt-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="text-base font-bold tracking-tight md:text-lg xl:text-xl">{project.title}</h3>
          <p className="text-xs font-medium text-soft md:text-sm xl:text-base">{project.stack}</p>
        </div>
        <span className="font-mono text-xs text-faint md:text-sm xl:text-base">({project.year})</span>
      </div>
    </article>
  );
}
