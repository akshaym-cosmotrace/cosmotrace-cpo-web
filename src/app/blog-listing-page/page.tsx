import React from 'react';
import MarketingNavbar from '@/components/layout/MarketingNavbar';
import MarketingFooter from '@/components/layout/MarketingFooter';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

export default function BlogListingPage() {
  return (
    <main className="min-h-screen">
      <MarketingNavbar />
      <BlogHero />
      <BlogGrid />
      <MarketingFooter />
    </main>
  );
}