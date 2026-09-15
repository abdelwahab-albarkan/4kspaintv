'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile drawer on route changes (covers back/forward too).
  // Adjusting state during render — React's recommended pattern for resetting
  // state on a prop/value change — instead of a synchronous setState in an effect.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  // While the drawer is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5">
          <Logo variant="mark" priority />

          {/* Desktop navigation */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-sm text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive ? 'text-cyan' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/precios"
              className="btn-cta inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-bold shadow-[0_0_24px_-6px_rgba(196,91,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver planes
            </Link>
          </div>

          {/* Mobile hamburger — 44px (h-11 w-11) touch target */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/*
        Mobile drawer — rendered OUTSIDE <header> on purpose. The header applies
        backdrop-blur, and a backdrop-filter ancestor becomes the containing block
        for any fixed descendant (trapping it). As a sibling, this fixed overlay is
        anchored to the viewport as intended.
      */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-background/98 px-6 pb-10 pt-6 backdrop-blur-lg lg:hidden"
        >
          <div className="mb-6 flex items-center justify-between">
            <Logo variant="mark" />
            <button
              type="button"
              onClick={closeMenu}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Cerrar menú de navegación"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-11 items-center rounded-md px-2 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive ? 'text-cyan' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/precios"
            onClick={closeMenu}
            className="btn-cta mt-8 flex h-12 w-full items-center justify-center rounded-full text-base font-bold active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver planes IPTV
          </Link>
        </div>
      )}
    </>
  );
}
