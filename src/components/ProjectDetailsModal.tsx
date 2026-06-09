import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types/project-type";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, project]);

  if (!project) return null;

  const hasLiveDemo = project.liveUrl !== "#";
  const role =
    project.stats?.find((stat) => stat.label.toLowerCase() === "role")?.value ??
    "Project Contributor";
  const details = project.details ?? {
    overview: project.description,
    problem:
      "This project was created to make an important activity simpler and easier to manage.",
    solution:
      "It provides a clear digital experience that helps users complete their goals with less friction.",
    benefits: [
      "Keeps important information easier to access.",
      "Creates a clearer and more convenient user experience.",
    ],
    highlights: [
      "Explore the project through a simple interface.",
      "Complete key activities in one organized place.",
    ],
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050914]/85 p-4 backdrop-blur-md md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <article
        className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1424] shadow-[0_32px_120px_rgba(0,0,0,0.65)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#0b1120]/95 px-5 py-3">
          <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/30">
            Project Details
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            aria-label="Close project details"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div className="scrollbar-hide overflow-y-auto">
          <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#090f1d] px-6 py-8 md:min-h-[360px] md:px-12">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.title} preview`}
                className="relative z-10 mx-auto max-h-[320px] w-full max-w-4xl object-contain"
                decoding="async"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-950/70 via-[#0b1120] to-cyan-950/60">
                <span className="material-symbols-outlined text-[92px] text-white/10">
                  {project.placeholderIcon ?? "web"}
                </span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-cyan-400">
                  {project.category}
                </span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 font-jetbrains text-[10px] uppercase tracking-widest text-purple-300">
                  Role: {role}
                </span>
              </div>
            <h2
              id="project-dialog-title"
              className="mt-3 font-grotesk text-[34px] font-bold leading-tight text-white md:text-[48px]"
            >
              {project.title}
            </h2>
            <p className="mt-4 font-geist text-[16px] leading-relaxed text-white/60 md:text-[18px]">
              {details.overview}
            </p>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <DetailBlock
                icon="help"
                title="The challenge"
                copy={details.problem}
              />
              <DetailBlock
                icon="lightbulb"
                title="The solution"
                copy={details.solution}
              />
            </div>

            <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <DetailList
                title="Why it is useful"
                icon="favorite"
                items={details.benefits}
              />
              <DetailList
                title="What users can do"
                icon="task_alt"
                items={details.highlights}
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              {hasLiveDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-jetbrains text-[11px] font-semibold tracking-widest text-[#0b1120] transition hover:bg-cyan-200"
                >
                  VISIT LIVE PROJECT
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-jetbrains text-[11px] tracking-widest text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                BACK TO PROJECTS
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

function DetailBlock({
  icon,
  title,
  copy,
}: {
  icon: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
      <span className="material-symbols-outlined text-[24px] text-cyan-400">
        {icon}
      </span>
      <h3 className="mt-4 font-grotesk text-[19px] font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 font-geist text-[14px] leading-relaxed text-white/50">
        {copy}
      </p>
    </div>
  );
}

function DetailList({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-[22px] text-purple-300">
          {icon}
        </span>
        <h3 className="font-grotesk text-[20px] font-semibold text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 font-geist text-[14px] leading-relaxed text-white/55"
          >
            <span className="material-symbols-outlined mt-0.5 text-[16px] text-cyan-400">
              check_circle
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
