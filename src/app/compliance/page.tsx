import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import PageHero from '@/components/marketing/PageHero';
import ComplianceSection from '../components/ComplianceSection';
import CTABand from '@/components/marketing/CTABand';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Regulatory Compliance & Traceability',
  description:
    'GS1, EPCIS, UAE Tatmeen, and GCC traceability compliance infrastructure — built into CosmoTrace pharmaceutical operations.',
  path: '/compliance',
});

export default function CompliancePage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Compliance & Traceability"
        title={
          <>
            Regulatory Compliance{' '}
            <span className="text-primary">Built Into Operations</span>
          </>
        }
        description="CosmoTrace infrastructure supports GS1, EPCIS, UAE Tatmeen, GCC traceability mandates, and DSCSA-ready architecture — integrated with warehouse and aggregation operations."
        variant="light"
        primaryCta={{ label: 'Discuss compliance requirements', href: '/contact' }}
      />
      <ComplianceSection />
      <CTABand
        title="Stay audit-ready across GCC markets"
        description="Our compliance operations team supports Tatmeen, GS1, and EPCIS reporting workflows."
      />
    </MarketingPageShell>
  );
}
