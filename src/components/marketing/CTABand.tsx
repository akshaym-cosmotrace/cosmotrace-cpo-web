import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type CTABandProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTABand({
  title,
  description,
  primaryLabel = 'Request consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="h-1 brand-strip" aria-hidden />
      <div className="bg-[#17448E] py-16 lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                {title}
              </h2>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href={primaryHref} className="cta-pill gap-2">
                {primaryLabel}
                <ArrowRight size={16} />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-white border border-white/30 bg-white/10 px-6 py-3 text-sm hover:bg-white/20 transition-colors"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-[#CC851D]" aria-hidden />
    </section>
  );
}
