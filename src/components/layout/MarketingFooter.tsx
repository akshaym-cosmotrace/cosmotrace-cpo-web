import React from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/layout/BrandLogo';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { footerQuickLinks, footerServiceLinks } from '@/lib/navigation';

export default function MarketingFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrandLogo theme="dark" showTagline={false} className="pointer-events-auto" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your trusted pharmaceutical CPO partner. Serialization, aggregation, warehousing,
              and compliance operations for UAE & GCC markets.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>UAE Free Zone Facility, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@cosmotrace.ae" className="hover:text-white transition-colors">
                  info@cosmotrace.ae
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+97141234567" className="hover:text-white transition-colors">
                  +971 4 123 4567
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="CosmoTrace on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="/"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="CosmoTrace website"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services & Compliance
            </h3>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Ready to simplify pharmaceutical serialization for your UAE or GCC operations?
            </p>
            <Link href="/contact" className="cta-pill">
              Request consultation
            </Link>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-500 leading-relaxed">
                24–48 hour response time. Dedicated operational support for all inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 CosmoTrace CPO. All rights reserved. UAE Free Zone Registered Entity.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
