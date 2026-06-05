'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import TrustBadges from '@/components/marketing/TrustBadges';
import ProcessFlowDiagram from '@/components/marketing/ProcessFlowDiagram';
import { operationImages } from '@/lib/images';

const workflowSteps = [
  { label: 'Serialize', step: '01' },
  { label: 'Aggregate', step: '02' },
  { label: 'Warehouse', step: '03' },
  { label: 'Dispatch', step: '04' },
];

export default function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-marketing-header industrial-grid">
      <div className="brand-strip absolute top-[var(--marketing-header-height)] left-0 right-0 z-10" aria-hidden />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 compliance-badge text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC851D]" aria-hidden />
              Pharmaceutical Warehousing & Compliance Operations — UAE & GCC
            </span>

            <h1
              className="text-hero-xl font-extrabold text-foreground leading-tight mb-6 text-balance"
              style={{ fontWeight: 800 }}
            >
              Enterprise Pharmaceutical{' '}
              <span className="text-primary">Warehouse Infrastructure</span>{' '}
              <span className="gold-gradient-text">& Traceability Operations</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              CosmoTrace CPO delivers serialization, aggregation, compliant warehousing, and
              logistics operations from our UAE Free Zone facility — with the digital infrastructure
              to keep your supply chain audit-ready.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="cta-pill gap-2">
                Request consultation
                <ArrowRight size={18} className="shrink-0" />
              </Link>
              <Link href="/contact" className="cta-pill-outline gap-2">
                <Calendar size={18} className="shrink-0 text-primary" />
                Schedule facility walkthrough
              </Link>
            </div>

            <TrustBadges />
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#17448E]/15 shadow-card">
            <AppImage
              src={operationImages.warehouseRacks}
              alt="Pharmaceutical warehouse storage racks and logistics infrastructure"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#17448E]/50 via-transparent to-[#CC851D]/15" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#17448E]/90 to-transparent">
              <p className="text-white text-sm font-semibold mb-1">UAE Free Zone Facility</p>
              <p className="text-white/85 text-xs">Pharma-grade storage · Cold chain · Batch traceability</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-[#17448E]/12 rounded-2xl overflow-hidden shadow-card">
          <div className="h-1 brand-strip" aria-hidden />
          <div className="p-6 lg:p-8 bg-white">
            <ProcessFlowDiagram title="Operational Traceability Workflow" steps={workflowSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
