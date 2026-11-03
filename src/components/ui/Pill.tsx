import type { ReactNode } from 'react';

interface Props { children: ReactNode; solid?: boolean }

export default function Pill({ children, solid = false }: Props) {
  const tone = solid
    ? 'border-fg bg-fg text-surface font-semibold uppercase tracking-wider'
    : 'border-line bg-subtle text-muted';
  return (
    <span className={`inline-flex items-center rounded-full border px-3.5 py-1.5 font-mono text-[11px] ${tone}`}>
      {children}
    </span>
  );
}
