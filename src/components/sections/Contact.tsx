import { profile } from '@/data/profile';
import Section from '@/components/ui/Section';

const link = 'inline-flex min-h-[44px] items-center transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg';

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="mb-14 max-w-5xl text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:max-w-6xl xl:text-8xl">
        Let&apos;s talk about a project, collaboration or an idea you may have
      </h2>

      <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 font-mono text-xs font-medium uppercase tracking-wider text-muted sm:flex-row sm:items-center xl:text-sm">
        <ul className="flex flex-wrap items-center gap-6">
          {profile.footerLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.label} profile (opens in new tab)`}
                className={link}
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#home" className={link}>Back to top ↑</a>
          <span className="font-normal normal-case text-soft">
            Copyright © {new Date().getFullYear()} {profile.fullName}
          </span>
        </div>
      </div>

      {/* Miniature Architectural Thumbnails Strip */}
      <div aria-hidden="true" className="mt-8 flex flex-wrap items-center gap-4">
        {/* Thumbnail 1 */}
        <div className="flex h-16 w-24 flex-col justify-between overflow-hidden rounded border border-line bg-surface p-1.5 shadow-sm">
          <div className="h-2 w-3/4 rounded-sm bg-chip" />
          <div className="space-y-1">
            <div className="h-1 rounded bg-line" />
            <div className="h-1 w-2/3 rounded bg-line" />
          </div>
          <div className="h-2 w-1/3 rounded bg-fg" />
        </div>
        {/* Thumbnail 2 */}
        <div className="flex h-16 w-24 flex-col justify-between overflow-hidden rounded border border-line bg-neutral-900 p-1.5 font-mono text-[6px] text-white shadow-sm">
          <div className="flex items-center justify-between text-neutral-400">
            <span>Portfolio</span>
            <span>2026</span>
          </div>
          <div className="text-[7px] font-bold">Full-Stack Dev</div>
        </div>
        {/* Thumbnail 3 */}
        <div className="flex h-16 w-24 flex-col justify-between overflow-hidden rounded border border-line bg-sky-50 p-1.5 shadow-sm dark:bg-slate-900">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-cyan-600" />
            <div className="h-1.5 w-6 rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="h-4 rounded border border-line bg-surface" />
            <div className="h-4 rounded border border-line bg-surface" />
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6">
        <h3 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl xl:text-5xl">
          Interested to collaborate? Let&apos;s connect!
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-soft md:text-base xl:text-lg">
          <span>Reach out directly:</span>
          <a
            className="inline-flex min-h-[44px] items-center font-semibold text-fg underline underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-400"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <span aria-hidden="true">•</span>
          <a
            className="inline-flex min-h-[44px] items-center font-semibold text-fg underline underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-400"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">•</span>
          <a
            className="inline-flex min-h-[44px] items-center font-semibold text-fg underline underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-400"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
        </p>
      </div>
    </Section>
  );
}
