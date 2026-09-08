import React from 'react';
import MarketingPageShell from '@/components/marketing/MarketingPageShell';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import ComplianceSection from './components/ComplianceSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import CTABand from '@/components/marketing/CTABand';

export default function HomePage() {
  return (
    <MarketingPageShell>
      <HeroSection />
      <AboutSection compact />
      <ServicesSection overview limit={3} />
      <WhyChooseSection />
      <ComplianceSection compact />
      <BlogPreviewSection />
      <CTABand
        title="Ready to simplify pharmaceutical operations?"
        description="Speak with our compliance and operations team about warehousing and traceability at our UAE Free Zone facility."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </MarketingPageShell>
  );
}
