import { services } from '@/data/services';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockupCard from '@/components/services/PhoneMockupCard';
import BrandGraphicCard from '@/components/services/BrandGraphicCard';

export default function Services() {
  let counter = 0; // penomoran hanya untuk kartu teks

  return (
    <Section id="services">
      <SectionHeader left="02 // SERVICES & CAPABILITIES" right="(SOLUTIONS & CRAFT)" />
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-start">
        <div className="max-w-3xl xl:max-w-4xl">
          <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-faint xl:text-sm">Service</span>
          <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
            Designing digital solutions that empower your visions
          </h2>
        </div>
        <p className="pt-2 text-sm leading-relaxed text-muted md:max-w-md md:pt-6 xl:max-w-lg xl:text-base">
          I create user-focused designs and products that blend creativity, function, and innovation to deliver real value.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {services.map((s) => {
          if (s.kind === 'phone') return <PhoneMockupCard key={s.id} />;
          if (s.kind === 'brand') return <BrandGraphicCard key={s.id} />;
          counter += 1;
          return (
            <article key={s.id} className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-line bg-subtle p-8 transition-shadow hover:shadow-sm sm:p-10 xl:min-h-[380px] xl:p-12">
              <span aria-hidden className="select-none text-5xl font-extrabold tracking-tight text-faint/60 transition-colors group-hover:text-faint sm:text-6xl xl:text-7xl">
                {String(counter).padStart(2, '0')}
              </span>
              <div className="space-y-3 pt-8">
                <h3 className="border-b border-line pb-3 text-xl font-bold tracking-tight sm:text-2xl xl:text-3xl">{s.title}</h3>
                <p className="text-xs leading-relaxed text-soft sm:text-sm xl:text-base">{s.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
