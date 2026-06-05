import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import WarehousingSection from '../components/WarehousingSection';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';
import { operationImages } from '@/lib/images';

export const metadata = buildPageMetadata({
  title: 'Pharmaceutical Warehousing',
  description:
    'Pharmaceutical-grade warehousing with ambient and cold chain storage, batch traceability, and GMP-aligned handling at our UAE Free Zone facility.',
  path: '/warehousing',
});

export default function WarehousingPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Warehousing & Infrastructure"
        title={
          <>
            Pharma-Grade{' '}
            <span className="text-primary">Storage & Logistics</span>
          </>
        }
        description="Temperature-controlled warehousing, batch traceability, inbound/outbound handling, and compliance-ready storage at our UAE Free Zone facility."
        variant="image-right"
        imageSrc={operationImages.warehouseRacks}
        imageAlt="Pharmaceutical warehouse storage racks"
        primaryCta={{ label: 'Schedule facility tour', href: '/contact' }}
        secondaryCta={{ label: 'View services', href: '/services' }}
      />
      <WarehousingSection />
      <CTABand
        title="Need compliant warehousing capacity?"
        description="Ambient and cold chain storage with real-time monitoring and complete batch traceability."
        primaryLabel="Request warehousing assessment"
      />
    </MarketingPageShell>
  );
}
