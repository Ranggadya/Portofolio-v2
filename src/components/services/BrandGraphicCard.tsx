export default function BrandGraphicCard() {
  return (
    <div className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-white transition-shadow hover:shadow-md xl:min-h-[380px] xl:p-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center text-center font-mono text-xs uppercase leading-loose tracking-widest opacity-10">
        <span>RANGGADYA SYSTEM LABS</span>
        <span>SOFTWARE ENGINEERING • ARCHITECTURE</span>
        <span>FULL-STACK DEVELOPMENT</span>
        <span>MODULAR IDENTITY 2026</span>
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded border border-neutral-700 bg-neutral-800 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-300">Engineering Labs</span>
        <span className="font-mono text-[11px] text-neutral-400">VERSION 2.0</span>
      </div>
      <div className="relative z-10 my-auto space-y-2 py-6 text-center">
        <div className="font-mono text-2xl font-extrabold uppercase tracking-widest sm:text-3xl text-cyan-400">
          {'RA.'}
        </div>
        <div className="font-mono text-xs tracking-widest text-neutral-400">ランガ・アディタマ</div>
        <div className="font-mono text-xl font-bold tracking-wider text-neutral-300">RANGGADYA</div>
        <div className="pt-2 font-mono text-[11px] tracking-tight text-neutral-400">Software Architecture &amp; Web Systems</div>
      </div>
      <div className="relative z-10 flex items-center justify-between border-t border-neutral-800 pt-3 font-mono text-[11px] text-neutral-400">
        <span>Semarang • ID</span>
        <span>2024 // 2026</span>
      </div>
    </div>
  );
}
