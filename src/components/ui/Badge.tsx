import type { ReactNode } from 'react';

interface Props { children: ReactNode; tone?: 'success' | 'neutral' }

export default function Badge({ children, tone = 'neutral' }: Props) {
  const styles =
    tone === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
      : 'border-line bg-chip text-muted';
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${styles}`}>
      {children}
    </span>
  );
}
