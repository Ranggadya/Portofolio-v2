export default function Shoes4UsMockup() {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-xl border border-white/60 bg-white/95 p-6 text-neutral-900 shadow-xl backdrop-blur sm:p-10 md:min-h-[480px] md:rounded-2xl md:p-14 xl:min-h-[560px] xl:p-16">
      {/* Mini Browser Top Header */}
      <div className="flex items-center justify-between pb-6 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-sans text-lg font-black tracking-tight text-neutral-950 sm:text-xl">
            Shoes<span className="text-cyan-600">4Us.</span>
          </span>
          <span className="hidden rounded bg-neutral-100 px-2 py-0.5 font-mono text-[9px] font-bold text-neutral-500 sm:inline">
            STOREFRONT
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] sm:space-x-5 md:text-xs">
          <span className="hidden text-neutral-600 hover:text-black sm:inline">Sneakers</span>
          <span className="hidden text-neutral-600 hover:text-black sm:inline">Running</span>
          <span className="hidden text-neutral-600 hover:text-black sm:inline">Brands</span>
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 font-mono font-medium text-neutral-800 shadow-sm">
            Cart (3)
          </span>
          <span className="rounded bg-black px-3 py-1 font-medium text-white shadow-sm">
            Sign In
          </span>
        </div>
      </div>

      {/* Main Content Showcase Grid */}
      <div className="my-auto grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-800">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 animate-pulse" />
            Monorepo • Go &amp; React
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-4xl">
            Find Your Perfect Stride
          </h3>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm xl:max-w-lg xl:text-base">
            Platform e-commerce sepatu modern dengan sinkronisasi stok riil per ukuran, filter multi-merek, serta integrasi kurir pengiriman (JNE, J&amp;T, SiCepat).
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://shoes4us.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-black px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-neutral-800 sm:text-sm"
            >
              Kunjungi Toko ↗
            </a>
            <span className="font-mono text-xs text-neutral-400">
              Sub-15ms Go API Response
            </span>
          </div>
        </div>

        {/* Product Card Preview */}
        <div className="flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
              <img
                src="/shoes4us.jpg"
                alt="Shoes4Us Showcase"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  // Fallback if image path has issues
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 font-mono text-[9px] font-bold text-neutral-900 shadow backdrop-blur">
                NEW ARRIVAL
              </span>
              <span className="absolute right-3 top-3 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-700 border border-emerald-200 shadow">
                In Stock: 8
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 sm:text-sm">
                    Nike Air Max Pulse 2026
                  </h4>
                  <p className="font-mono text-[10px] text-neutral-500">
                    Men&apos;s Lifestyle / Streetwear
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-neutral-950 sm:text-sm">
                    Rp 1.499.000
                  </span>
                </div>
              </div>

              {/* Size selector simulation */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[10px] font-mono text-neutral-400 mr-1">Size:</span>
                {[40, 41, 42, 43, 44].map((size) => (
                  <span
                    key={size}
                    className={`rounded border px-2 py-0.5 font-mono text-[10px] font-medium transition-colors ${
                      size === 42
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
