import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import ContactSection from '../components/ContactSection';
import PageHero from '@/components/marketing/PageHero';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Contact CosmoTrace CPO',
  description:
    'Request a consultation, schedule a facility walkthrough, or discuss serialization, warehousing, and compliance requirements for your UAE & GCC operations.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <PageHero
        badge="Contact"
        title="Get In Touch"
        description="Our pharmaceutical compliance and operations team responds within 24–48 hours."
        variant="minimal"
      />
      <ContactSection standalone />
    </MarketingPageShell>
  );
}
