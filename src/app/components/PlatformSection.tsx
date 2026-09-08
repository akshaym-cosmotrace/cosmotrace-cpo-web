'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ShieldCheck, Settings, Lock, Database } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import ProcessFlowDiagram from '@/components/marketing/ProcessFlowDiagram';
import { fadeUp, staggerContainer, transition, viewport } from '@/lib/motion';

const platformFeatures = [
  {
    icon: ShieldCheck,
    title: 'Compliance-Ready',
    desc: 'Supports Tatmeen, GS1, EPCIS, and GCC traceability mandates.',
    color: 'text-primary',
    bg: 'icon-accent-bg',
  },
  {
    icon: Settings,
    title: 'Minimal In-House Setup',
    desc: 'We handle operational complexity so your team stays focused on core business.',
    color: 'text-primary',
    bg: 'bg-muted',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Throughput',
    desc: 'Grows with your business from 100k to 500k+ packs per month.',
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
  },
  {
    icon: Lock,
    title: 'Secure Data Handling',
    desc: 'Enterprise-grade data security with full audit trails and encryption.',
    color: 'text-primary',
    bg: 'bg-muted',
  },
  {
    icon: Database,
    title: 'Traceability Infrastructure',
    desc: 'nTrack platform supports aggregation and EPCIS event management.',
    color: 'text-primary',
    bg: 'icon-accent-bg',
  },
  {
    icon: DollarSign,
    title: 'Right-Sized Commercial Model',
    desc: 'Aligned to your shipment volume — no oversized enterprise contracts.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

const workflowSteps = [
  { label: 'Aggregate', step: '01' },
  { label: 'Warehouse', step: '02' },
  { label: 'Report', step: '03' },
  { label: 'Comply', step: '04' },
];

export default function PlatformSection() {
  return (
    <SectionShell id="platform" variant="blue" grid>
      <motion.div
        variants={fadeUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Digital Operations Platform
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line inline-block" style={{ fontWeight: 800 }}>
          Technology Supporting Compliance Operations
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
          Our nTrack platform supports aggregation and regulatory reporting —
          integrated with warehouse and logistics operations at our UAE facility.
        </p>
      </motion.div>

      <ProcessFlowDiagram title="Aggregation & Reporting Workflow" steps={workflowSteps} className="mb-12" />

      <motion.div
        variants={staggerContainer(0.08, 0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {platformFeatures.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: transition.smooth } }}
            className="bg-white border border-border rounded-2xl p-6 card-hover shadow-card accent-border-l"
          >
            <div className={`w-11 h-11 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
              <feature.icon size={22} className={feature.color} />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2" style={{ fontWeight: 700 }}>
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp(16)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mt-12"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-900 transition-colors duration-300"
        >
          Discuss platform integration
        </Link>
      </motion.div>
    </SectionShell>
  );
}
