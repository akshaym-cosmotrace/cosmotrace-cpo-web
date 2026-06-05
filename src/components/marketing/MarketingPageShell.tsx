import React from 'react';
import MarketingNavbar from '@/components/layout/MarketingNavbar';
import MarketingFooter from '@/components/layout/MarketingFooter';

type MarketingPageShellProps = {
  children: React.ReactNode;
};

export default function MarketingPageShell({ children }: MarketingPageShellProps) {
  return (
    <main className="min-h-screen">
      <MarketingNavbar />
      {children}
      <MarketingFooter />
    </main>
  );
}
