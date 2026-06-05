'use client';

import React from 'react';
import SectionShell from '@/components/marketing/SectionShell';
import ProcessFlowDiagram from '@/components/marketing/ProcessFlowDiagram';
import OperationalCard from '@/components/marketing/OperationalCard';
import { motion } from 'framer-motion';
import { QrCode, Scan, FileText, ShieldCheck, Barcode, ClipboardCheck } from 'lucide-react';
import { fadeUp, viewport } from '@/lib/motion';

const processSteps = [
  { label: 'Serial Generation', step: '01' },
  { label: 'Line Commissioning', step: '02' },
  { label: 'Verification', step: '03' },
  { label: 'EPCIS Events', step: '04' },
  { label: 'Tatmeen Report', step: '05' },
];

const capabilities = [
  {
    icon: QrCode,
    title: 'GS1-Compliant Serialization',
    description: 'GTIN and SGTIN generation aligned with global pharmaceutical identification standards.',
    highlights: ['GTIN', 'SGTIN', 'DataMatrix'],
    accent: 'teal' as const,
  },
  {
    icon: Scan,
    title: 'Line Integration & Scanning',
    description: 'Barcode scanning, verification, and rejection handling on packaging lines.',
    highlights: ['Scan-verify', 'Reject handling', 'Line speed'],
    accent: 'navy' as const,
  },
  {
    icon: FileText,
    title: 'EPCIS Event Generation',
    description: 'Compliant EPCIS 2.0 event capture for commissioning, shipping, and receiving.',
    highlights: ['EPCIS 2.0', 'CBV', 'Audit trail'],
    accent: 'gold' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Tatmeen Reporting Readiness',
    description: 'UAE National Track & Trace integration and reporting workflow support.',
    highlights: ['Tatmeen', 'UAE MOH', 'Real-time'],
    accent: 'navy' as const,
  },
];

export default function SerializationContent() {
  return (
    <>
      <SectionShell variant="white">
        <ProcessFlowDiagram title="Serialization Process Flow" steps={processSteps} />
      </SectionShell>
      <SectionShell variant="muted" grid>
        <motion.div
          variants={fadeUp(20)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10"
        >
          <h2 className="text-section-title font-extrabold text-foreground heading-accent-line mb-4" style={{ fontWeight: 800 }}>
            Serialization Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-4">
            From serial number generation to regulatory reporting — operational serialization
            at our UAE Free Zone facility with integrated traceability infrastructure.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <OperationalCard key={cap.title} {...cap} />
          ))}
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Barcode, label: 'Barcode & DataMatrix printing' },
            { icon: ClipboardCheck, label: 'Commissioning & verification records' },
            { icon: ShieldCheck, label: 'Regulatory audit documentation' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl accent-border-l">
              <item.icon size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
