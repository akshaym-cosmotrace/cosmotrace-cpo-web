import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import AggregationContent from '../components/AggregationContent';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';
import { operationImages } from '@/lib/images';

export const metadata = buildPageMetadata({
  title: 'Pharmaceutical Aggregation',
  description:
    'Complete packaging hierarchy traceability from unit packs to pallets — scanning, verification, SSCC labelling, and EPCIS aggregation events.',
  path: '/aggregation',
});

export default function AggregationPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Aggregation Enablement"
        title={
          <>
            Unit to Pallet{' '}
            <span className="gold-gradient-text">Hierarchy Traceability</span>
          </>
        }
        description="Complete aggregation operations — unit pack, bundle, case, and pallet level traceability with scanning, verification, and relabeling at our UAE facility."
        variant="image-right"
        imageSrc={operationImages.packaging}
        imageAlt="Pharmaceutical packaging and aggregation operations"
        primaryCta={{ label: 'Discuss aggregation requirements', href: '/contact' }}
      />
      <AggregationContent />
      <CTABand
        title="Need aggregation line support?"
        description="From hierarchy management to SSCC pallet labelling — we handle the operational complexity."
      />
    </MarketingPageShell>
  );
}
