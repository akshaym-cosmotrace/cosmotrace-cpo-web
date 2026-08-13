import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import AboutSection from '../components/AboutSection';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';
import { operationImages } from '@/lib/images';

export const metadata = buildPageMetadata({
  title: 'About CosmoTrace CPO',
  description:
    'CosmoTrace CPO is a UAE-based pharmaceutical operations and compliance provider specializing in serialization, aggregation, warehousing, and track-and-trace operations.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="About CosmoTrace CPO"
        title={
          <>
            Pharmaceutical Operations &{' '}
            <span className="text-primary">Compliance Infrastructure</span>
          </>
        }
        description="A UAE Free Zone-based operations partner delivering serialization, aggregation, compliant warehousing, and track-and-trace operations for pharmaceutical companies across the UAE & GCC."
        variant="image-right"
        imageSrc={operationImages.facility}
        imageAlt="CosmoTrace pharmaceutical operations facility"
        primaryCta={{ label: 'Request consultation', href: '/contact' }}
      />
      <AboutSection />
      <CTABand
        title="Visit our UAE Free Zone facility"
        description="Schedule a facility walkthrough to see our warehousing, serialization, and compliance operations firsthand."
        primaryLabel="Schedule walkthrough"
        primaryHref="/contact"
      />
    </MarketingPageShell>
  );
}
