import { useState } from 'react';

export default function Shoes4UsMockup() {
  const [imgFailed, setImgFailed] = useState(false);

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
          <span className="hidden text-neutral-600 hover:text-black sm:inline">Catalog</span>
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 font-mono font-medium text-neutral-800 shadow-sm">
            Cart (0)
          </span>
          <span className="rounded bg-black px-3 py-1 font-medium text-white shadow-sm">
            Sign In
          </span>
        </div>
      </div>

      {/* Main Content Showcase Grid */}
      <div className="my-auto grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-900">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
            FULL-STACK • GO &amp; REACT
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl xl:text-4xl">
            Find Your Perfect Stride
          </h3>
          <p className="max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm xl:max-w-lg xl:text-base">
            Platform e-commerce sepatu full-stack dengan katalog produk responsif, pemilihan varian ukuran, alur keranjang belanja, serta pembaruan inventaris transaksional berbasis Go dan PostgreSQL.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://shoes4us.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-black px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:text-sm"
            >
              Kunjungi Toko ↗
            </a>
            <span className="font-mono text-xs font-medium text-neutral-500">
              Go REST API • Transactional Inventory
            </span>
          </div>
        </div>

        {/* Product Card Preview */}
        <div className="flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 via-neutral-200/60 to-neutral-100">
              {!imgFailed ? (
                <img
                  src="/shoes4us.jpg"
                  alt="Shoes4Us Showcase"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-neutral-400">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 text-neutral-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    Product Preview
                  </span>
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-900 shadow-sm backdrop-blur">
                PRODUCT PREVIEW
              </span>
              <span className="absolute right-3 top-3 rounded-md border border-cyan-200 bg-cyan-50/95 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-800 shadow-sm backdrop-blur">
                SIZE VARIANTS
              </span>
            </div>

            <div className="mt-3.5 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-neutral-900 sm:text-sm">
                      Nike Air Max Pulse
                    </h4>
                    <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[8px] font-medium uppercase tracking-wider text-neutral-400">
                      Demo Product
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-neutral-500">
                    Men&apos;s Lifestyle / Streetwear
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-extrabold text-neutral-950 sm:text-sm">
                    Rp 1.499.000
                  </span>
                </div>
              </div>

              {/* Size selector simulation */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Size (EU):</span>
                  <span className="font-medium text-neutral-600">Selected: 42</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {[40, 41, 42, 43, 44].map((size) => (
                    <span
                      key={size}
                      className={`inline-flex flex-1 items-center justify-center rounded border py-1 font-mono text-[10px] font-medium transition-colors ${
                        size === 42
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
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
    </div>
  );
}
