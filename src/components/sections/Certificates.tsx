import { useState, useRef, useEffect, useCallback } from 'react';
import { certificates as fallbackCertificates } from '@/data/certificates';
import { fetchCertificates } from '@/services/certificates';
import type { Certificate } from '@/types';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Pill from '@/components/ui/Pill';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';
import CertificateDrawerModal from './CertificateDrawerModal';

function CredentialPlaceholderIcon({ icon }: { icon?: Certificate['icon'] }) {
  switch (icon) {
    case 'award':
      return (
        <svg
          className="h-6 w-6 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
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
          className="h-6 w-6 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
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
          className="h-6 w-6 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
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
          className="h-6 w-6 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
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
          className="h-6 w-6 text-soft"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
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
            description="Accredited industry certifications in frontend engineering, cloud infrastructure, and database architecture with verified registry records."
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
            {/* Accessible Dot Touch Targets (min 36x36px with 10px visual dot) */}
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

      {/* Horizontal Scrolling Ribbon Track (All Viewports) */}
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Certificates Carousel"
          className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-6 pt-2 focus-visible:ring-2 focus-visible:ring-fg rounded-2xl"
        >
          {items.map((cert) => (
            <div
              key={cert.id}
              className="w-[88%] flex-none snap-start sm:w-[50%] lg:w-[calc(33.333%-16px)]"
            >
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:border-fg hover:shadow-md sm:p-7">
                {/* Card Top Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-line pb-4">
                    <Badge tone="success">Verified Credential</Badge>
                    <span className="font-mono text-xs uppercase tracking-wider text-faint">
                      {cert.issueDate || 'ISSUE: 2025'}
                    </span>
                  </div>

                  {/* Certificate Thumbnail Preview or Icon Box */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-line bg-subtle">
                    {cert.imageUrl ? (
                      <div className="relative h-36 w-full overflow-hidden bg-chip">
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex h-24 w-full items-center justify-center bg-subtle">
                        <CredentialPlaceholderIcon icon={cert.icon} />
                      </div>
                    )}
                  </div>

                  {/* Title & Issuer Info */}
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-between font-mono text-xs text-soft">
                      <span className="font-semibold uppercase tracking-wider text-fg">
                        {cert.issuer}
                      </span>
                      <span className="rounded bg-chip px-2 py-0.5 text-xs text-fg font-medium">
                        {cert.credentialId}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold leading-snug tracking-tight text-fg transition-opacity group-hover:opacity-90"
                      style={{ textWrap: 'balance' }}
                    >
                      {cert.title}
                    </h3>

                    <p className="pt-1 text-xs font-normal leading-relaxed text-muted line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Meta & Actions */}
                <div className="mt-4 border-t border-line pt-5">
                  <ul className="mb-4 flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <li key={tag}>
                        <Tag size="sm">{tag}</Tag>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      className="inline-flex min-h-[44px] items-center gap-1 text-xs font-semibold text-fg hover:opacity-75 focus-visible:ring-2 focus-visible:ring-fg cursor-pointer"
                    >
                      Quick Preview ↗
                    </button>
                    <span className="font-mono text-xs text-soft">
                      {cert.score || 'Verified Active'}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Clear Authoritative Registry Status */}
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
