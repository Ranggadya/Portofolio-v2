import { services } from '@/data/services';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader left="02 // SERVICES & CAPABILITIES" right="(SOLUTIONS & ARCHITECTURE)" />
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-start">
        <div className="max-w-3xl xl:max-w-4xl">
          <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-soft xl:text-sm">
            Core Capabilities
          </span>
          <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
            Engineering Software Solutions From Concept to Implementation
          </h2>
        </div>
        <p className="pt-2 text-sm leading-relaxed text-muted md:max-w-md md:pt-6 xl:max-w-lg xl:text-base">
          Delivering practical software solutions through full-stack development, backend engineering, system integration, and business process digitalization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 xl:gap-8">
        {services.map((s, index) => {
          const colSpan =
            index < 3
              ? 'md:col-span-1 lg:col-span-2'
              : index === 3
              ? 'md:col-span-1 lg:col-span-3'
              : 'md:col-span-2 lg:col-span-3';

          return (
            <article
              key={s.id}
              className={`group flex min-h-[340px] flex-col justify-between rounded-3xl border border-line bg-subtle p-8 transition-all hover:border-fg/40 hover:shadow-sm sm:p-10 xl:min-h-[380px] xl:p-12 ${colSpan}`}
            >
              <span
                aria-hidden="true"
                className="select-none font-mono text-5xl font-extrabold tracking-tight text-faint/60 transition-colors group-hover:text-faint sm:text-6xl xl:text-7xl"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="space-y-3 pt-8">
                <h3 className="border-b border-line pb-3 text-xl font-bold tracking-tight text-fg sm:text-2xl xl:text-3xl">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-soft sm:text-sm xl:text-base">
                  {s.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
