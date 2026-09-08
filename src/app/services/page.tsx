import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import ServicesSection from '../components/ServicesSection';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';
import { operationImages } from '@/lib/images';

export const metadata = buildPageMetadata({
  title: 'Pharmaceutical Services',
  description:
    'End-to-end pharmaceutical packaging, warehousing, cold chain storage, and traceability services at our UAE Free Zone facility.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Our Services"
        title={
          <>
            Integrated Pharmaceutical{' '}
            <span className="gold-gradient-text">Operations</span>
          </>
        }
        description="Aggregation, warehousing, logistics, and compliance operations — integrated under one UAE Free Zone roof."
        variant="image-right"
        imageSrc={operationImages.palletHandling}
        imageAlt="Pharmaceutical pallet handling and logistics operations"
        primaryCta={{ label: 'Request consultation', href: '/contact' }}
        secondaryCta={{ label: 'View compliance', href: '/compliance' }}
      />
      <ServicesSection />
      <CTABand
        title="Need a tailored service proposal?"
        description="Our operations team will assess your volume, compliance requirements, and logistics needs."
      />
    </MarketingPageShell>
  );
}
