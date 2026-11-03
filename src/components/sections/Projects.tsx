import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Projects() {
  return (
    <Section id="projects" bordered={false} className="py-14 md:py-20">
      <SectionHeader left="SELECTED WORK" right="(2023)" />
      <div className="space-y-20 md:space-y-24">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
