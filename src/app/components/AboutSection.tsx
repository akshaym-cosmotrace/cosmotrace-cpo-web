'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Warehouse, ShieldCheck, ClipboardCheck, Database } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import SectionShell from '@/components/marketing/SectionShell';
import { fadeUp, viewport } from '@/lib/motion';
import { operationImages } from '@/lib/images';

const capabilities = [
  { icon: Warehouse, label: 'Pharmaceutical-grade warehousing & cold chain storage' },
  { icon: ShieldCheck, label: 'End-to-end track & trace readiness' },
  { icon: ClipboardCheck, label: 'GS1, EPCIS & Tatmeen compliant reporting' },
  { icon: Database, label: 'Secure data handling & batch visibility' },
  { icon: CheckCircle2, label: 'Seamless integration with existing operations' },
  { icon: Building2, label: 'Scalable operational infrastructure at UAE Free Zone' },
];

type AboutSectionProps = {
  compact?: boolean;
};

export default function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <SectionShell id="about" variant="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        <motion.div variants={fadeUp(20)} initial="hidden" whileInView="visible" viewport={viewport}>
          <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
            About CosmoTrace CPO
          </div>
          <h2 className="text-section-title font-extrabold text-foreground mb-5 text-balance heading-accent-line" style={{ fontWeight: 800 }}>
            Enabled... Not Performed.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-5 mt-4">
            CosmoTrace CPO is a UAE-based pharmaceutical Contract Packaging Organization
            specializing in serialization enablement, aggregation readiness, compliant
            warehousing, and track-and-trace infrastructure.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We help pharmaceutical companies simplify compliance and scale operations
            across the UAE & GCC — at our UAE Free Zone Facility.{' '}
            <strong className="text-foreground font-semibold">
              You bring the products. We provide the infrastructure, operations & compliance readiness.
            </strong>
          </p>

          {!compact && (
            <ul className="space-y-3 mb-8">
              {capabilities.map((cap) => (
                <li key={cap.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg icon-accent-bg flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cap.label}</span>
                </li>
              ))}
            </ul>
          )}

          {compact && (
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Learn about our operations
              <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp(20)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#17448E]/15 shadow-card">
            <AppImage
              src={operationImages.facility}
              alt="CosmoTrace pharmaceutical operations facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white shadow-card rounded-xl px-5 py-3 border border-border accent-border-l">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Tatmeen Ready</p>
                <p className="text-xs text-muted-foreground">UAE compliant infrastructure</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
