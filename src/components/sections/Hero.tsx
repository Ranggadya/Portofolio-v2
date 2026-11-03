import { Fragment } from 'react';
import { profile } from '@/data/profile';
import Section from '@/components/ui/Section';

export default function Hero() {
  return (
    <Section id="home" bordered={false} className="border-b border-line pb-16 pt-2 md:pb-24">
      <h1 className="hero-heading text-4xl font-extrabold uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.75rem] 2xl:text-[7.75rem]">
        <span aria-hidden className="mr-2 inline-block align-baseline text-3xl font-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7.25rem]">✱</span>
        {profile.headline.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </h1>
      <div className="mt-8 flex flex-col justify-between gap-6 md:mt-12 md:flex-row md:items-end">
        <p className="max-w-xl font-mono text-[11px] font-medium uppercase leading-relaxed tracking-wider text-muted sm:text-xs md:text-sm xl:max-w-2xl">
          “{profile.tagline}”
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center self-start rounded-full border border-fg px-5 py-2 font-mono text-[11px] tracking-tight shadow-sm transition-all hover:bg-fg hover:text-surface sm:text-xs md:text-sm"
        >
          {profile.email}
        </a>
      </div>
    </Section>
  );
}
