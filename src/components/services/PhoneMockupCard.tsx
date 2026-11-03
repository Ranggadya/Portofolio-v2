export default function PhoneMockupCard() {
  return (
    <div className="group relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-tr from-neutral-100 to-sky-50/60 p-6 transition-shadow hover:shadow-sm dark:from-neutral-900 dark:to-slate-900 xl:min-h-[380px] xl:p-8">
      <div aria-hidden className="relative w-48 rounded-[2rem] border-4 border-neutral-900/90 bg-white p-2.5 shadow-xl transition-transform duration-500 group-hover:scale-105">
        <div className="mx-auto mb-2 h-3 w-14 rounded-full bg-neutral-900" />
        <div className="space-y-2 rounded-2xl border border-neutral-100 bg-neutral-50 p-3 text-left">
          <div className="flex items-center justify-between font-mono text-[8px] text-neutral-400">
            <span>9:41</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-[9px] font-bold uppercase leading-tight tracking-tight text-neutral-900">FIND THE PERFECT FIT</div>
            <div className="h-1 w-3/4 rounded bg-neutral-200" />
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {[['👟', '$150'], ['⚡', '$220']].map(([icon, price]) => (
              <div key={price} className="rounded-lg border border-neutral-200 bg-white p-1.5 text-center shadow-sm">
                <div className="flex h-7 items-center justify-center rounded bg-neutral-100 text-[10px]">{icon}</div>
                <div className="mt-1 text-[7px] font-bold text-neutral-800">{price}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-around border-t border-neutral-100 pt-1 text-[9px] text-neutral-400">
            <span className="font-bold text-neutral-900">•</span><span>◻</span><span>○</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-widest text-faint">Mobile UX Mockup</div>
    </div>
  );
}
