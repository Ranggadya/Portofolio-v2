export default function PortfolioMockup() {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-xl border border-white/60 bg-white/95 p-6 text-neutral-900 shadow-xl backdrop-blur sm:p-10 md:min-h-[480px] md:rounded-2xl md:p-14 xl:min-h-[560px] xl:p-16">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-6 text-xs md:text-sm">
        <span className="font-bold tracking-tight">Ranggadya.</span>
        <div className="hidden space-x-6 text-[11px] font-medium text-neutral-400 sm:flex md:text-xs">
          <span className="font-semibold text-neutral-900">About</span>
          <span>Skill</span>
          <span>Portfolio</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="mx-auto my-auto max-w-3xl py-12 text-center md:py-16 xl:max-w-4xl xl:py-24">
        <h3 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl md:text-5xl xl:text-6xl">
          I'm Rangga passionate<br />
          <span className="font-semibold text-slate-400">software engineer &amp; full-stack developer</span>
          <br />specializing in digital solutions
        </h3>
      </div>
    </div>
  );
}
