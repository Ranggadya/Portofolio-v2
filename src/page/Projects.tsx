import { PROJECTS } from "../lib/constans";
import { FeaturedProjectCard, RegularProjectCard } from "../components/ProjectCard";

export default function Projects() {
  const featuredProject = PROJECTS.find((project) => project.isFeatured);
  const regularProjects = PROJECTS.filter((project) => !project.isFeatured);

  return (
    <section id="projects" className="min-h-screen w-full px-[5%] lg:px-[10%] py-24">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-jetbrains text-[11px] tracking-widest text-white/40 uppercase">
            Selected Works
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-[42px] md:text-[56px] lg:text-[64px] text-white leading-tight tracking-tight mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects.
          </span>
        </h2>
        <p className="font-geist text-[16px] md:text-[18px] text-white/40 max-w-2xl leading-relaxed">
          A curated collection of digital experiences, engineered with precision
          and designed for impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {featuredProject && <FeaturedProjectCard project={featuredProject} />}
        {regularProjects.map((project) => (
          <RegularProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
