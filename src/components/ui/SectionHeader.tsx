interface Props { left: string; right: string }

export default function SectionHeader({ left, right }: Props) {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-line pb-3 font-mono text-[11px] uppercase tracking-widest text-soft">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
