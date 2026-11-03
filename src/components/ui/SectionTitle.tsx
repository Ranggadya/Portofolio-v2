import type { ReactNode } from 'react';

interface Props { title: string; description?: string; aside?: ReactNode }

export default function SectionTitle({ title, description, aside }: Props) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-xs font-medium leading-relaxed text-soft sm:text-sm xl:max-w-3xl xl:text-base">{description}</p>
        )}
      </div>
      {aside && <div className="flex flex-wrap items-center gap-3">{aside}</div>}
    </div>
  );
}
