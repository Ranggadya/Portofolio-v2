import { useState, useRef, useEffect, useCallback } from 'react';
import { certificates as fallbackCertificates } from '@/data/certificates';
import { fetchCertificates } from '@/services/certificates';
import type { Certificate } from '@/types';
import CertificateDrawerModal from './CertificateDrawerModal';

function CredentialIcon({ icon }: { icon?: Certificate['icon'] }) {
  switch (icon) {
    case 'award':
      return (
        <svg
          className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    case 'cloud':
      return (
        <svg
          className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l2 2 4-4" />
        </svg>
      );
    case 'palette':
      return (
        <svg
          className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      );
    case 'shield':
      return (
        <svg
          className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case 'code':
    default:
      return (
        <svg
          className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
  }
}

export default function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Certificate[]>(fallbackCertificates);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(2);
  const [canPrev, setCanPrev] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(50);

  useEffect(() => {
    let mounted = true;
    fetchCertificates().then((res) => {
      if (mounted) {
        if (res.data && res.data.length > 0) {
          setItems(res.data);
        }
        setIsLive(res.isLive);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const updatePagination = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollLeft = el.scrollLeft;

    setCanPrev(scrollLeft > 15);
    setCanNext(scrollLeft < maxScroll - 15);

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
    const visibleCards = Math.max(1, Math.round(el.clientWidth / cardWidth));
    const pages = Math.max(1, Math.ceil(items.length / visibleCards));
    setTotalPages(pages);

    const pageIndex = Math.min(
      pages - 1,
      Math.max(0, Math.round(scrollLeft / (cardWidth * visibleCards)))
    );
    setCurrentPage(pageIndex);

    const progPercent =
      maxScroll > 0
        ? Math.min(100, Math.max(15, ((scrollLeft + el.clientWidth) / el.scrollWidth) * 100))
        : 100;
    setProgress(progPercent);
  }, [items.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updatePagination();
    const handleScroll = () => updatePagination();
    window.addEventListener('resize', updatePagination);
    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updatePagination);
      el.removeEventListener('scroll', handleScroll);
    };
  }, [updatePagination]);

  const handlePrev = () => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const scrollAmount = firstCard ? (firstCard.offsetWidth + 24) * 2 : 500;
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const scrollAmount = firstCard ? (firstCard.offsetWidth + 24) * 2 : 500;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleDotClick = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = (index / Math.max(1, totalPages - 1)) * maxScroll;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <section
      className="overflow-hidden border-t border-neutral-200 py-16 dark:border-neutral-800 md:py-24"
      data-purpose="credentials-section"
      id="credentials"
    >
      {/* Section Tag Header */}
      <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
          <span>05 // CREDENTIALS &amp; HONORS ARCHIVE</span>
        </div>
        <span>(2020 — 2026 REGISTRY)</span>
      </div>

      {/* Editorial Section Title + Tactile Slider Controls in Header */}
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
              {isLive ? 'Supabase Live Sync' : 'Accredited Stack'}
            </span>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {items.length} Certified Documents
            </span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
            LICENSES &amp; CERTIFICATIONS
          </h2>
          <p className="mt-3 max-w-xl text-xs font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-sm">
            Accredited industry certifications in frontend engineering, cloud infrastructure, and UI/UX design with verified project implementations and cryptographic IDs.
          </p>
        </div>

        {/* Tactile Carousel Controls & Page Indicator */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {/* Progress Bar & Page Indicator */}
          <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80">
            <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
              {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div
                className="h-full rounded-full bg-black transition-all duration-300 ease-out dark:bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center gap-1.5 pl-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => handleDotClick(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentPage === i
                      ? 'bg-black dark:bg-white'
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
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-bold shadow-sm transition-all hover:border-black hover:bg-black hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Certificates"
              disabled={!canNext}
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-bold shadow-sm transition-all hover:border-black hover:bg-black hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
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
          tabIndex={0}
          className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4 pt-2"
        >
          {items.map((cert, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={cert.id}
                className="w-[88%] flex-none snap-start sm:w-[50%] lg:w-[calc(33.333%-16px)]"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-300/90 bg-[#fafaf8] p-6 shadow-sm transition-all hover:border-neutral-900 hover:shadow-md dark:border-neutral-800 dark:bg-[#12141a] dark:hover:border-neutral-300 sm:p-7">
                  {/* Subtle Paper Stamp / Watermark Background Badge */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 select-none font-mono text-8xl font-black rotate-12 opacity-[0.04] transition-opacity group-hover:opacity-[0.08] dark:opacity-[0.03] dark:group-hover:opacity-[0.06]">
                    {cert.watermark || 'OFFICIAL'}
                  </div>

                  {/* Stamp / Verified Ribbon Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-dashed border-neutral-200 pb-4 dark:border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Verified Active
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {cert.issueDate || 'ISSUE: 2023'}
                      </span>
                    </div>

                    <div className="space-y-2.5 pt-5">
                      {/* Mini Credential Badge Box */}
                      <div className="relative mb-2 flex h-24 w-full items-center justify-between overflow-hidden rounded-lg border border-neutral-200/80 bg-neutral-100 p-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="z-10 space-y-1">
                          <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                            {cert.badgeCategory || 'Credential Certificate'}
                          </span>
                          <div className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                            {cert.badgeCode || cert.credentialId}
                          </div>
                          <div className="flex items-center gap-1.5 pt-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-200" />
                            <span className="font-mono text-[8px] uppercase text-neutral-500 dark:text-neutral-400">
                              {cert.badgeAuthority || 'Accredited Verification'}
                            </span>
                          </div>
                        </div>

                        <div className="z-10 flex h-16 w-16 overflow-hidden flex-col justify-between rounded border border-neutral-200 bg-white p-1 text-right shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                          {cert.imageUrl ? (
                            <img
                              src={cert.imageUrl}
                              alt={cert.title}
                              className="h-full w-full object-cover rounded"
                              loading="lazy"
                            />
                          ) : (
                            <>
                              <CredentialIcon icon={cert.icon} />
                              <div className="font-mono text-[7px] uppercase text-neutral-400 dark:text-neutral-400">
                                {cert.gradeBadge || '100%'}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="pointer-events-none absolute -bottom-4 -right-4 select-none font-mono text-6xl font-black text-neutral-200/50 dark:text-neutral-800/40">
                          {indexNumber}
                        </div>
                      </div>

                      <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                        <span className="font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                          {cert.issuer}
                        </span>
                        <span className="rounded bg-neutral-200/70 px-1.5 py-0.5 text-[10px] text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {cert.credentialId}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-black dark:text-neutral-100 dark:group-hover:text-white">
                        {cert.title}
                      </h3>

                      <p className="pt-1 text-xs font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Meta & Actions */}
                  <div className="mt-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                    <ul className="mb-4 flex flex-wrap gap-1.5">
                      {cert.tags.map((tag) => (
                        <li key={tag}>
                          <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 font-mono text-[10px] text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => setActiveCert(cert)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 transition-colors hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400 cursor-pointer"
                      >
                        Quick Preview ↗
                      </button>
                      <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                        {cert.score || 'Verified Active'}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Bar: View Full Repository & Registry Quick Info */}
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {isLive
              ? 'Real-time credentials synchronized with Supabase database & public SHA-256 tokens.'
              : 'All credentials verified against public issuance databases & SHA-256 token checksums.'}
          </span>
        </div>
        <div>
          <a
            href="https://www.dicoding.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            View Full Archive Repository ({items.length}) →
          </a>
        </div>
      </div>

      {/* Quick Drawer Modal Popover */}
      <CertificateDrawerModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
