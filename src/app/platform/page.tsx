import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import PlatformSection from '../components/PlatformSection';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Digital Operations Platform',
  description:
    'nTrack platform supporting aggregation and regulatory reporting — integrated with CosmoTrace warehouse and compliance operations.',
  path: '/platform',
});

export default function PlatformPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Digital Operations Platform"
        title={
          <>
            Technology Supporting{' '}
            <span className="text-primary">Compliance Operations</span>
          </>
        }
        description="The nTrack platform integrates with our warehouse and aggregation operations — supporting EPCIS event management, traceability workflows, and regulatory reporting without replacing operational infrastructure."
        variant="light"
        primaryCta={{ label: 'Discuss platform integration', href: '/contact' }}
      />
      <PlatformSection />
      <CTABand
        title="Platform integrated with operations"
        description="Technology that supports — not replaces — pharmaceutical warehouse and compliance infrastructure."
        primaryLabel="Request integration assessment"
      />
    </MarketingPageShell>
  );
}
