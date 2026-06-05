'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, FileCode, Network, ArrowRight } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import ProcessFlowDiagram from '@/components/marketing/ProcessFlowDiagram';
import { fadeUp, staggerContainer, transition, viewport } from '@/lib/motion';

const standards = [
  {
    id: 'gs1',
    icon: Globe,
    title: 'GS1',
    subtitle: 'Global Standards',
    desc: 'Full GS1 compliance including GTIN, SGTIN, SSCC, and GLN for pharmaceutical supply chain identification.',
    tags: ['GTIN', 'SGTIN', 'SSCC', 'GLN'],
    color: 'text-primary',
    bg: 'icon-accent-bg',
  },
  {
    id: 'epcis',
    icon: FileCode,
    title: 'EPCIS',
    subtitle: 'Electronic Product Code Information Services',
    desc: 'EPCIS 2.0 compliant event generation and exchange for full supply chain visibility and traceability.',
    tags: ['EPCIS 2.0', 'CBV', 'Query Interface', 'Capture API'],
    color: 'text-primary',
    bg: 'bg-muted',
  },
  {
    id: 'tatmeen',
    icon: ShieldCheck,
    title: 'UAE Tatmeen',
    subtitle: 'UAE National Track & Trace',
    desc: 'Full Tatmeen integration for UAE pharmaceutical market — from serialization to dispensing event reporting.',
    tags: ['UAE MOH', 'Tatmeen Portal', 'EPCIS Reports', 'Real-time'],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'gcc',
    icon: Network,
    title: 'GCC Traceability',
    subtitle: 'Gulf Cooperation Council',
    desc: 'Supports serialization mandates across all GCC markets including Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
    tags: ['Saudi SFDA', 'Qatar MOPH', 'Kuwait MOH', 'Bahrain NHRA'],
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
  },
];

const workflowNodes = [
  { label: 'Manufacture', step: '01' },
  { label: 'Serialize', step: '02' },
  { label: 'Aggregate', step: '03' },
  { label: 'Warehouse', step: '04' },
  { label: 'Distribute', step: '05' },
  { label: 'Dispense', step: '06' },
];

type ComplianceSectionProps = {
  compact?: boolean;
};

export default function ComplianceSection({ compact = false }: ComplianceSectionProps) {
  return (
    <SectionShell id="compliance" variant={compact ? 'blue' : 'muted'} grid={!compact}>
      <motion.div
        variants={fadeUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Compliance & Traceability
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line inline-block" style={{ fontWeight: 800 }}>
          Regulatory Compliance Built In
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
          CosmoTrace infrastructure is architected for compliance — supporting GS1, EPCIS,
          UAE Tatmeen, GCC traceability mandates, and DSCSA-ready architecture.
        </p>
      </motion.div>

      <ProcessFlowDiagram
        title="End-to-End Pharmaceutical Traceability Workflow"
        steps={workflowNodes}
        className="mb-10"
      />

      {!compact && (
        <motion.div
          variants={staggerContainer(0.07, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {standards.map((std) => (
            <motion.div
              key={std.id}
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: transition.smooth } }}
              className="bg-white border border-border rounded-2xl p-6 card-hover shadow-card accent-border-l"
            >
              <div className={`w-11 h-11 ${std.bg} rounded-xl flex items-center justify-center mb-4`}>
                <std.icon size={22} className={std.color} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-0.5" style={{ fontWeight: 700 }}>
                {std.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{std.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{std.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {std.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        variants={fadeUp(16)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-8 bg-white border border-border rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 accent-border-l shadow-card"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck size={20} className="text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-foreground">DSCSA-Ready Architecture</p>
            <p className="text-xs text-muted-foreground">
              Future-proofed infrastructure supporting US Drug Supply Chain Security Act requirements.
            </p>
          </div>
        </div>
        <Link
          href={compact ? '/compliance' : '/contact'}
          className="flex-shrink-0 text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1"
        >
          {compact ? 'View compliance details' : 'Learn more'}
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </SectionShell>
  );
}
