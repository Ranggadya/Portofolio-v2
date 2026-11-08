import { useEffect, useState } from 'react';
import { NAV_ITEMS, profile } from '@/data/profile';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll-spy: Determine active section
      const sections = NAV_ITEMS.map((item) => {
        const id = item.href.replace('#', '');
        return {
          id: item.href,
          el: document.getElementById(id),
        };
      });

      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-line/80 bg-surface/85 shadow-sm backdrop-blur-md py-3.5'
          : 'border-b border-transparent bg-surface/0 py-6 sm:py-8'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <a
          href="#home"
          className="text-sm font-bold uppercase tracking-wider text-fg transition-opacity hover:opacity-75 md:text-base"
        >
          {profile.brand}
        </a>

        {/* Desktop Primary Nav with Scroll-Spy Indicator */}
        <nav aria-label="Primary" className="hidden items-center gap-6 text-xs font-semibold tracking-wider lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 font-mono text-[11px] transition-colors xl:text-xs ${
                  isActive ? 'text-fg font-bold' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-fg transition-all"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Cluster: Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="inline-flex min-h-[36px] items-center justify-center rounded-lg border border-line bg-surface px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-fg shadow-sm transition-all hover:bg-fg hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-[36px] items-center justify-center rounded-lg border border-line bg-surface px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-fg shadow-sm transition-all hover:bg-fg hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg lg:hidden"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with 44px Minimum Touch Targets */}
      {open && (
        <div className="mx-auto w-full max-w-[1920px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="mt-3 flex flex-col gap-1 border-t border-line/80 pt-3 text-sm font-semibold tracking-wider lg:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-chip font-bold text-fg'
                      : 'text-muted hover:bg-chip/50 hover:text-fg'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-fg">●</span>}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
