'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import BrandLogo from '@/components/layout/BrandLogo';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { transition } from '@/lib/motion';
import { primaryNav, isNavActive, isServicesActive } from '@/lib/navigation';

export default function MarketingNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function linkClass(href: string, isChild = false) {
    const active = isChild
      ? isNavActive(pathname, href)
      : href === '/services'
        ? isServicesActive(pathname)
        : isNavActive(pathname, href);
    return `nav-link-underline px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ease-out rounded-md hover:bg-muted/50 ${
      active ? 'active text-primary' : 'text-foreground hover:text-primary'
    }`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="h-[3px] bg-gradient-to-r from-[#17448E] from-0% via-[#17448E] via-50% to-[#CC851D] to-100% shadow-[0_1px_0_rgba(23,68,142,0.08)]"
        aria-hidden
      />

      <div
        className={`transition-[box-shadow,background-color,border-color] duration-300 border-b bg-white ${
          scrolled
            ? 'border-border/90 shadow-[0_8px_28px_-10px_rgba(26,43,72,0.14)]'
            : 'border-border/70 shadow-[0_1px_0_rgba(26,43,72,0.06),0_8px_24px_-12px_rgba(26,43,72,0.08)]'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16">
          <div className="flex items-center justify-between gap-4 min-h-[4rem] lg:min-h-[4.25rem] py-1">
            <BrandLogo theme="light" />

            <nav className="hidden lg:flex items-center gap-1">
              {primaryNav.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`${linkClass('/services')} inline-flex items-center gap-1`}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={transition.smoothFast}
                          className="absolute top-full left-0 mt-1 w-52 bg-white border border-border rounded-xl shadow-card py-2 z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted/60 ${
                                isNavActive(pathname, child.href)
                                  ? 'text-primary bg-muted/40'
                                  : 'text-foreground hover:text-primary'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className={linkClass(link.href)}>
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <div className="hidden xl:flex items-center gap-4 pr-5 mr-1 border-r border-border/70 text-[11px] text-muted-foreground">
                <a
                  href="tel:+442034884542"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Phone size={12} className="text-accent shrink-0 opacity-80" aria-hidden />
                  <span className="tabular-nums tracking-tight">+44 203 488 4542</span>
                </a>
                <a
                  href="mailto:info@cosmotrace.com"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors max-w-[200px] truncate"
                >
                  <Mail size={12} className="text-accent shrink-0 opacity-80" aria-hidden />
                  <span className="truncate">info@cosmotrace.com</span>
                </a>
              </div>
              <Link href="/contact" className="cta-pill !normal-case !tracking-wide text-xs px-5 py-2.5 shadow-md shadow-accent/10">
                Request consultation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl text-foreground border border-transparent hover:bg-muted hover:border-border/60 transition-colors"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={transition.smoothFast}
              className="lg:hidden border-t border-border/80 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto shadow-inner"
            >
              <div className="px-4 py-4 space-y-0.5">
                {primaryNav.map((link) =>
                  link.children ? (
                    <div key={`mobile-${link.label}`}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex w-full items-center justify-between px-3 py-3 text-[15px] font-medium text-foreground hover:text-primary hover:bg-muted/60 rounded-xl transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-4 space-y-0.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                isNavActive(pathname, child.href)
                                  ? 'text-primary bg-muted/60'
                                  : 'text-muted-foreground hover:text-primary hover:bg-muted/40'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block px-3 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                        isNavActive(pathname, link.href)
                          ? 'text-primary bg-muted/60'
                          : 'text-foreground hover:text-primary hover:bg-muted/60'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <div className="mt-4 pt-4 border-t border-border/80 space-y-3">
                  <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Contact
                  </p>
                  <a
                    href="tel:+442034884542"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:text-primary"
                  >
                    <Phone size={16} className="text-accent shrink-0" />
                    +44 203 488 4542
                  </a>
                  <a
                    href="mailto:info@cosmotrace.com"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:text-primary break-all"
                  >
                    <Mail size={16} className="text-accent shrink-0" />
                    info@cosmotrace.com
                  </a>
                  <Link href="/contact" className="block w-full text-center cta-pill !py-3.5 mt-2">
                    Request consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
