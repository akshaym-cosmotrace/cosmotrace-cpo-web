import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import BlogHero from '../blog-listing-page/components/BlogHero';
import BlogGrid from '../blog-listing-page/components/BlogGrid';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Insights & Compliance Blog',
  description:
    'Expert insights on UAE Tatmeen, EPCIS, GS1 standards, pharmaceutical serialization, and traceability across the GCC market.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <MarketingPageShell>
      <BlogHero />
      <BlogGrid />
    </MarketingPageShell>
  );
}
