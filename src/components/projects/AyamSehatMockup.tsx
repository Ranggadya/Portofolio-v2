export default function AyamSehatMockup() {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-xl border border-white/60 bg-white/95 p-6 text-neutral-900 shadow-xl backdrop-blur sm:p-10 md:min-h-[480px] md:rounded-2xl md:p-14 xl:min-h-[560px] xl:p-16">
      <div className="flex items-center justify-between pb-6 text-xs md:text-sm">
        <span className="font-sans text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
          Cuan<span className="text-cyan-600">Selor.</span>
        </span>
        <div className="flex items-center space-x-4 text-[11px] sm:space-x-6 md:text-xs">
          <span className="hidden text-neutral-500 sm:inline">Home</span>
          <span className="hidden text-neutral-500 sm:inline">Simulasi Aktuaria</span>
          <span className="rounded border border-neutral-300 px-3 py-1 font-medium text-neutral-600">Masuk</span>
          <span className="rounded bg-indigo-600 px-3 py-1 font-medium text-white shadow-sm">Mulai Gratis</span>
        </div>
      </div>
      <div className="my-auto grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
            AI-Powered Retirement
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-4xl">
            Financial &amp; Retirement Planning
          </h3>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm xl:max-w-lg xl:text-base">
            Platform perencanaan pensiun cerdas berbasis aktuaria dengan 10.000 iterasi Monte Carlo simulation dan asisten finansial cerdas terintegrasi Gemini AI.
          </p>
          <div>
            <a
              href="https://cuanselor.my.id"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-indigo-700 sm:text-sm"
            >
              Kunjungi Platform ↗
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="relative flex h-44 w-52 items-center justify-center rounded-2xl border border-indigo-100/50 bg-gradient-to-tr from-cyan-50 via-sky-50 to-indigo-50/50 xl:h-52 xl:w-64">
            <svg aria-hidden className="h-24 w-24 text-indigo-500/80 xl:h-28 xl:w-28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className="absolute bottom-3 right-3 rounded bg-white px-2 py-0.5 font-mono text-[10px] text-indigo-700 shadow xl:text-xs">Monte Carlo 10K</span>
            <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 font-mono text-[10px] text-cyan-700 shadow xl:text-xs">Gemini AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
