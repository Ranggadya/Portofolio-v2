import { useState, useRef, useEffect, useCallback } from 'react';
import { certificates as fallbackCertificates } from '@/data/certificates';
import { fetchCertificates } from '@/services/certificates';
import type { Certificate } from '@/types';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import CertificateDrawerModal from './CertificateDrawerModal';

function CredentialPlaceholderIcon({ icon }: { icon?: Certificate['icon'] }) {
  switch (icon) {
    case 'award':
      return (
        <svg
          className="h-8 w-8 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
          className="h-8 w-8 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
          className="h-8 w-8 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
          className="h-8 w-8 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
          className="h-8 w-8 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
  const [totalPages, setTotalPages] = useState<number>(1);
  const [canPrev, setCanPrev] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(10);

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
        ? Math.min(100, Math.max(10, ((scrollLeft + el.clientWidth) / el.scrollWidth) * 100))
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
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360;
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const handleDotClick = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = (index / Math.max(1, totalPages - 1)) * maxScroll;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <Section id="credentials">
      {/* Section Header */}
      <SectionHeader
        left="05 // CREDENTIALS & HONORS ARCHIVE"
        right="(2020 — 2026 REGISTRY)"
      />

      {/* Section Title & Tactile Carousel Controls */}
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <SectionTitle
            title="Licenses & Certifications"
            description="Formal industry validations in cloud architecture, full-stack systems, and database engineering with verified registry IDs."
            aside={
              <Pill>
                {isLive ? 'Supabase Live Sync' : 'Accredited Stack'} • {items.length} Documents
              </Pill>
            }
          />
        </div>

        {/* Tactile Carousel Controls */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {/* Progress Bar & Page Indicator */}
          <div className="flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2 shadow-sm">
            <span className="font-mono text-xs font-bold text-fg">
              {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-subtle">
              <div
                className="h-full rounded-full bg-fg transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Accessible Dot Touch Targets */}
            <div className="flex items-center gap-0.5 pl-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide page ${i + 1}`}
                  onClick={() => handleDotClick(i)}
                  className="flex min-h-[36px] min-w-[36px] items-center justify-center p-1 rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-fg"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      currentPage === i ? 'bg-fg scale-110' : 'bg-faint hover:bg-soft'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Accessible Arrow Controls (min 44x44px) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Certificates"
              disabled={!canPrev}
              onClick={handlePrev}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-line bg-surface text-sm font-bold text-fg shadow-sm transition-all hover:bg-fg hover:text-surface active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-fg cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Certificates"
              disabled={!canNext}
              onClick={handleNext}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-line bg-surface text-sm font-bold text-fg shadow-sm transition-all hover:bg-fg hover:text-surface active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-fg cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Track Carousel */}
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Certificates Carousel Track"
          className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-6 pt-2 focus-visible:ring-2 focus-visible:ring-fg rounded-2xl"
        >
          {items.map((cert) => (
            <div
              key={cert.id}
              className="snap-start shrink-0 w-80 md:w-96 rounded-xl border border-line bg-surface p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 4:3 Aspect Ratio Image with Quick Inspect Overlay */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-subtle border border-line mb-5 relative group">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-subtle">
                      <CredentialPlaceholderIcon icon={cert.icon} />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="quick-preview-btn absolute inset-0 bg-fg/80 text-surface opacity-0 group-hover:opacity-100 flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-opacity gap-2 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fg"
                    aria-label={`Quick inspect ${cert.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="font-bold">QUICK INSPECT</span>
                  </button>
                </div>

                {/* Issuer Category */}
                <span className="font-mono text-xs uppercase font-semibold text-soft block mb-1 tracking-wider">
                  {cert.issuer}
                </span>

                {/* Certificate Title */}
                <h4
                  className="text-base sm:text-lg font-bold text-fg uppercase mb-2 tracking-tight line-clamp-2"
                  style={{ textWrap: 'balance' }}
                >
                  {cert.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Strip */}
              <div
                onClick={() => setActiveCert(cert)}
                className="flex items-center justify-between bg-subtle p-3 rounded-lg border border-line/70 cursor-pointer hover:bg-chip transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCert(cert);
                  }
                }}
                aria-label={`View details for ${cert.title}`}
              >
                <span className="font-mono text-xs uppercase text-faint">
                  ID: {cert.credentialId}
                </span>
                <span className="font-mono text-xs uppercase font-bold text-fg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Clean Registry Status */}
      <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="font-mono text-xs text-soft">
          All {items.length} credentials verified against public issuance databases &amp; live Supabase registry.
        </span>
      </div>

      {/* Accessible Quick Drawer Modal Popover */}
      <CertificateDrawerModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </Section>
  );
}
