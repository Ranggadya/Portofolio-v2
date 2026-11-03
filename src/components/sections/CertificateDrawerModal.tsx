import { useEffect, useRef, useState } from 'react';
import type { Certificate } from '@/types';

interface CertificateDrawerModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateDrawerModal({
  certificate,
  onClose,
}: CertificateDrawerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  useEffect(() => {
    if (!certificate) return;
    setImageFailed(false);

    // Save triggering element to return focus on dismiss
    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;

    const modalNode = modalRef.current;
    if (modalNode) {
      const focusable = modalNode.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalNode) {
        const focusable = modalNode.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href]:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const targetLink = certificate.verifyUrl || certificate.link || '#';

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="cert-drawer-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 transition-opacity duration-300 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="max-h-[92vh] w-full max-w-xl overflow-y-auto space-y-5 rounded-t-3xl border border-line bg-surface p-6 shadow-2xl transition-all duration-300 sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-start justify-between border-b border-line pb-4">
          <div className="space-y-1 pr-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified Credential
            </span>
            <h4
              id="cert-drawer-title"
              className="pt-1.5 text-lg font-bold tracking-tight text-fg sm:text-xl"
            >
              {certificate.title}
            </h4>
            <p className="font-mono text-xs text-soft">
              {certificate.issuerSub || certificate.issuer}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close Preview"
            onClick={onClose}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-line text-sm font-bold text-soft transition-colors hover:bg-subtle hover:text-fg focus-visible:ring-2 focus-visible:ring-fg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Certificate Image Preview (if provided from Supabase) */}
        {certificate.imageUrl && !imageFailed && (
          <div className="overflow-hidden rounded-xl border border-line bg-subtle">
            <div className="relative group">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                onError={() => setImageFailed(true)}
                className="max-h-64 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-2 right-2 rounded-lg bg-black/80 px-3 py-1.5 font-mono text-xs font-medium text-white backdrop-blur-sm transition-opacity hover:bg-black focus-visible:ring-2 focus-visible:ring-white"
              >
                Open Full Image ↗
              </a>
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-line bg-subtle p-3.5 font-mono text-xs">
            <div>
              <span className="block uppercase text-faint">Registry ID</span>
              <span className="font-bold text-fg">
                {certificate.credentialId}
              </span>
            </div>
            <div>
              <span className="block uppercase text-faint">Issued / Validated</span>
              <span className="font-bold text-fg">
                {certificate.validUntil || certificate.issueDate || 'Verified'}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <h5 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              Evaluated Competency &amp; Syllabus:
            </h5>
            <p className="rounded-xl border border-line bg-surface p-4 text-xs font-normal leading-relaxed text-muted sm:text-sm">
              {certificate.syllabus || certificate.description}
            </p>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-[44px] items-center rounded-full border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-soft transition-colors hover:bg-subtle hover:text-fg focus-visible:ring-2 focus-visible:ring-fg cursor-pointer"
          >
            Dismiss
          </button>
          {targetLink && targetLink !== '#' ? (
            <a
              href={targetLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-fg bg-fg px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-surface shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fg"
            >
              Public Verify Link ↗
            </a>
          ) : (
            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line bg-chip px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              Verified Credential
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
