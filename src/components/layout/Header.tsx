import { useState } from 'react';
import { NAV_ITEMS, profile } from '@/data/profile';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const linkCls = 'transition-colors hover:text-soft';

  return (
    <header className="mx-auto w-full max-w-[1920px] px-6 pb-10 pt-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex items-center justify-between tracking-tight">
        <a href="#home" className="text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-75 md:text-base">
          {profile.brand}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-xs font-semibold tracking-wider lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={linkCls}>{item.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="rounded border border-fg px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-fg hover:text-surface"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded border border-line px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest lg:hidden"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mt-6 flex flex-col gap-4 border-t border-line pt-6 text-sm font-semibold tracking-wider lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={linkCls}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
