'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

type PageHeroProps = {
  badge?: string;
  title: React.ReactNode;
  description: string;
  variant?: 'light' | 'image-right' | 'minimal';
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
};

export default function PageHero({
  badge,
  title,
  description,
  variant = 'light',
  imageSrc,
  imageAlt = '',
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  const isImageRight = variant === 'image-right' && imageSrc;

  return (
    <section className="hero-gradient relative overflow-hidden pt-marketing-header industrial-grid">
      <div className="brand-strip absolute top-[var(--marketing-header-height)] left-0 right-0 z-10" aria-hidden />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16 py-16 lg:py-24">
        <div
          className={`grid gap-10 lg:gap-16 items-center ${
            isImageRight ? 'lg:grid-cols-2' : 'max-w-4xl'
          }`}
        >
          <div>
            {badge && (
              <span className="inline-flex items-center gap-2 compliance-badge text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC851D]" aria-hidden />
                {badge}
              </span>
            )}
            <h1
              className="text-hero-xl font-extrabold text-foreground leading-tight mb-6 text-balance heading-accent-line"
              style={{ fontWeight: 800 }}
            >
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8 mt-4">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 mb-8">
                {primaryCta && (
                  <Link href={primaryCta.href} className="cta-pill gap-2">
                    {primaryCta.label}
                    <ArrowRight size={18} className="shrink-0" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="cta-pill-outline gap-2">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
            {children}
          </div>

          {isImageRight && (
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#17448E]/15 shadow-card">
              <AppImage
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#17448E]/40 via-transparent to-[#CC851D]/10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
