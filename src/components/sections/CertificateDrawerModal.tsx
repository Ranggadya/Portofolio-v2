import { useEffect } from 'react';
import type { Certificate } from '@/types';

interface CertificateDrawerModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateDrawerModal({
  certificate,
  onClose,
}: CertificateDrawerModalProps) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 transition-opacity duration-300 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl space-y-5 rounded-t-3xl border border-neutral-200 bg-white p-6 shadow-2xl transition-all duration-300 dark:border-neutral-800 dark:bg-[#12141a] sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-start justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Verified Active
            </span>
            <h4 className="pt-1 text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-xl">
              {certificate.title}
            </h4>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {certificate.issuerSub || certificate.issuer}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close Preview"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-sm font-bold text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-[11px] dark:border-neutral-800 dark:bg-neutral-900">
            <div>
              <span className="block uppercase text-neutral-400 dark:text-neutral-500">Registry ID</span>
              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                {certificate.credentialId}
              </span>
            </div>
            <div>
              <span className="block uppercase text-neutral-400 dark:text-neutral-500">Issued / Validated</span>
              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                {certificate.validUntil || certificate.issueDate || 'Verified'}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <h5 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Evaluated Competency &amp; Syllabus:
            </h5>
            <p className="rounded-xl border border-neutral-200 bg-white p-3.5 text-xs font-normal leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 sm:text-sm">
              {certificate.syllabus || certificate.description}
            </p>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-neutral-300 px-4 py-2 font-mono text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Dismiss
          </button>
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black bg-black px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Public Verify Link ↗
          </a>
        </div>
      </div>
    </div>
  );
}
