import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import SerializationContent from '../components/SerializationContent';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';
import { operationImages } from '@/lib/images';

export const metadata = buildPageMetadata({
  title: 'Pharmaceutical Serialization',
  description:
    'GS1-compliant serialization, EPCIS reporting, and Tatmeen readiness at our UAE Free Zone pharmaceutical operations facility.',
  path: '/serialization',
});

export default function SerializationPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Serialization Enablement"
        title={
          <>
            GS1-Compliant{' '}
            <span className="text-primary">Serialization Operations</span>
          </>
        }
        description="Serial number generation, line commissioning, verification, and EPCIS event capture — operational serialization infrastructure for UAE & GCC pharmaceutical markets."
        variant="image-right"
        imageSrc={operationImages.barcodeScan}
        imageAlt="Barcode scanning on pharmaceutical packaging line"
        primaryCta={{ label: 'Discuss serialization requirements', href: '/contact' }}
      />
      <SerializationContent />
      <CTABand
        title="Ready for Tatmeen-compliant serialization?"
        description="Our operations team supports GS1, EPCIS, and UAE Tatmeen reporting workflows from our UAE facility."
      />
    </MarketingPageShell>
  );
}
