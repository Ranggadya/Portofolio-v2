import { useState } from 'react';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectDossierModal from '@/components/projects/ProjectDossierModal';
import type { Project } from '@/types';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleSelectProject = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) setActiveProject(found);
  };

  return (
    <Section id="projects" bordered={false} className="py-14 md:py-20">
      <SectionHeader left="SELECTED WORK" right="(2026)" />
      <div className="space-y-20 md:space-y-24">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpenModal={() => setActiveProject(p)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectDossierModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProject={handleSelectProject}
          allProjects={projects}
        />
      )}
    </Section>
  );
}
