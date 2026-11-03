import { useState, useRef, useEffect, useCallback } from 'react';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/types';
import Section from '@/components/ui/Section';
import CertificateDrawerModal from './CertificateDrawerModal';

function CertificateIcon({ icon }: { icon?: Certificate['icon'] }) {
  switch (icon) {
    case 'premium':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case 'verified':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 3.14 4.39.63.85 4.36 2.76 3.44-2.76 3.44-.85 4.36-4.39.63L12 22l-3.09-3.14-4.39-.63-.85-4.36-2.76-3.44 2.76-3.44.85-4.36 4.39-.63L12 2z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'cloud':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <polyline points="9 13 11 15 15 11" />
        </svg>
      );
    case 'design':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'shield':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'edu':
    default:
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
  }
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateCarouselState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    let pct = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    pct = Math.max(0, Math.min(1, pct));

    let page = Math.min(totalPages, Math.floor(pct * totalPages) + 1);
    if (pct >= 0.92) page = totalPages;

    setCurrentPage(page);
    setProgress(Math.max(15, (page / totalPages) * 100));
    setCanPrev(scrollLeft > 10);
    setCanNext(maxScroll > 10 && scrollLeft < maxScroll - 10);
  }, [totalPages]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateCarouselState();
    el.addEventListener('scroll', updateCarouselState, { passive: true });
    window.addEventListener('resize', updateCarouselState);

    return () => {
      el.removeEventListener('scroll', updateCarouselState);
      window.removeEventListener('resize', updateCarouselState);
    };
  }, [updateCarouselState]);

  const handleScrollNext = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).getBoundingClientRect().width : 340;
    el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  const handleScrollPrev = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).getBoundingClientRect().width : 340;
    el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const handleDotClick = (pageIndex: number) => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const targetScroll = (maxScroll / (totalPages - 1)) * pageIndex;
    el.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleScrollNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScrollPrev();
    }
  };

  return (
    <Section id="credentials" data-purpose="credentials-section">
      {/* Section Tag Header */}
      <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
          <span>05 // CREDENTIALS &amp; HONORS ARCHIVE</span>
        </div>
        <span>(2020 — 2024 REGISTRY)</span>
      </div>

      {/* Editorial Section Title + Tactile Slider Controls in Header */}
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
              Accredited Stack
            </span>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {certificates.length} Certified Documents
            </span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
            LICENSES &amp; CERTIFICATIONS
          </h2>
          <p className="mt-3 max-w-xl text-xs font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
            Accredited industry certifications in frontend engineering, cloud infrastructure, and UI/UX design with
            verified project implementations and cryptographic IDs.
          </p>
        </div>

        {/* Tactile Carousel Controls & Page Indicator */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {/* Progress Bar & Page Indicator */}
          <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100" id="carousel-page-indicator">
              0{currentPage} / 0{totalPages}
            </span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-full rounded-full bg-black transition-all duration-300 ease-out dark:bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center gap-1.5 pl-1" id="carousel-dots-container">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    idx === currentPage - 1
                      ? 'bg-black dark:bg-white scale-110'
                      : 'bg-neutral-300 hover:bg-neutral-500 dark:bg-neutral-700 dark:hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Certificates"
              disabled={!canPrev}
              onClick={handleScrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-bold shadow-sm transition-all hover:border-black hover:bg-black hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-700 dark:bg-[#111317] dark:text-neutral-100 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Certificates"
              disabled={!canNext}
              onClick={handleScrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-bold shadow-sm transition-all hover:border-black hover:bg-black hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-700 dark:bg-[#111317] dark:text-neutral-100 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Ribbon Track (3 wide cards per view on desktop) */}
      <div className="relative">
        <div
          ref={trackRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Horizontal list of licenses and certifications"
          className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-4 pt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
        >
          {certificates.map((c, idx) => (
            <div key={c.id} className="w-[88%] flex-none snap-start sm:w-[50%] lg:w-[calc(33.333%-16px)]">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-300/90 bg-[#fafaf8] p-6 shadow-sm transition-all hover:border-neutral-900 hover:shadow-md dark:border-neutral-800 dark:bg-[#111317] dark:hover:border-neutral-300 sm:p-7">
                {/* Subtle Paper Stamp / Watermark Background Badge */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 select-none font-mono text-8xl font-black rotate-12 opacity-[0.04] transition-opacity group-hover:opacity-[0.08] dark:text-neutral-100 dark:opacity-[0.05] dark:group-hover:opacity-[0.10]">
                  {c.watermarkText || 'OFFICIAL'}
                </div>

                {/* Top Section */}
                <div>
                  {/* Stamp / Verified Ribbon Tag */}
                  <div className="flex items-center justify-between gap-2 border-b border-dashed border-neutral-200 pb-4 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Verified Active
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {c.statusYear || 'ISSUE: 2023'}
                    </span>
                  </div>

                  {/* Mini-Certificate Banner Box */}
                  <div className="space-y-2.5 pt-5">
                    <div className="relative mb-2 flex h-24 w-full items-center justify-between overflow-hidden rounded-lg border border-neutral-200/80 bg-neutral-100 p-3 dark:border-neutral-800 dark:bg-neutral-900/80">
                      <div className="z-10 space-y-1">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                          {c.credentialType || 'Credential Certificate'}
                        </span>
                        <div className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                          {c.credentialId}
                        </div>
                        <div className="flex items-center gap-1.5 pt-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                          <span className="font-mono text-[8px] uppercase text-neutral-500 dark:text-neutral-400">
                            {c.partnerBadge || 'Verified Partner'}
                          </span>
                        </div>
                      </div>

                      {/* Mini square badge */}
                      <div className="z-10 flex h-16 w-16 flex-col justify-between rounded border border-neutral-200 bg-white p-1.5 text-right shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="text-left text-neutral-700 dark:text-neutral-300">
                          <CertificateIcon icon={c.icon} />
                        </div>
                        <div className="font-mono text-[7px] uppercase text-neutral-500 dark:text-neutral-400">
                          {c.scoreLabel || 'Verified'}
                        </div>
                      </div>

                      {/* Large watermark number */}
                      <div className="pointer-events-none absolute -bottom-4 -right-4 select-none font-mono text-6xl font-black text-neutral-200/50 dark:text-neutral-800/60">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                      <span className="font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                        {c.issuer}
                      </span>
                      <span className="rounded bg-neutral-200/70 px-1.5 py-0.5 text-[10px] text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {c.credentialId}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-black dark:text-neutral-100 dark:group-hover:text-white">
                      {c.title}
                    </h3>
                    <p className="pt-1 text-xs font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {c.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta & Actions */}
                <div className="mt-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-neutral-200 bg-white px-2 py-0.5 font-mono text-[10px] text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(c)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 transition-colors hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
                    >
                      Quick Preview ↗
                    </button>
                    <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                      {c.scoreDetail || 'Verified'}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: View Full Repository & Registry Quick Info */}
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            All credentials verified against public issuance databases &amp; SHA-256 token checksums.
          </span>
        </div>
        <div>
          <a
            href="https://github.com/Ranggadya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View Full Archive Repository ({certificates.length}) →
          </a>
        </div>
      </div>

      {/* Interactive Quick Drawer Modal */}
      <CertificateDrawerModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </Section>
  );
}
