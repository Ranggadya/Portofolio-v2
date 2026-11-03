interface Props { children: string; size?: 'sm' | 'md'; round?: boolean }

export default function Tag({ children, size = 'md', round = false }: Props) {
  const shape = round
    ? 'rounded-full border border-line px-3 py-1 text-[11px] font-medium text-fg'
    : size === 'sm'
      ? 'rounded px-2 py-0.5 text-[10px] text-muted'
      : 'rounded px-2.5 py-1 text-[10px] text-muted';
  return <span className={`bg-chip font-mono ${shape}`}>{children}</span>;
}
