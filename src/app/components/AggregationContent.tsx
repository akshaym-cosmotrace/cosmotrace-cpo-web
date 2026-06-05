'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Scan, PackageCheck, ClipboardCheck } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import AggregationHierarchyDiagram from '@/components/marketing/AggregationHierarchyDiagram';
import OperationalCard from '@/components/marketing/OperationalCard';
import { fadeUp, viewport } from '@/lib/motion';

const capabilities = [
  {
    icon: Layers,
    title: 'Hierarchy Management',
    description: 'Unit pack → bundle → case → pallet relationships with full parent-child traceability.',
    highlights: ['Unit → Case → Pallet', 'SSCC', 'Parent-child'],
    accent: 'gold' as const,
  },
  {
    icon: Scan,
    title: 'Aggregation Line Operations',
    description: 'Scanning, verification, and labeling on aggregation lines with error detection.',
    highlights: ['Scan-verify', 'Relabeling', 'Error detection'],
    accent: 'navy' as const,
  },
  {
    icon: PackageCheck,
    title: 'Pallet & Case Handling',
    description: 'SSCC labelling, pallet building, and dispatch-ready aggregation for logistics.',
    highlights: ['SSCC labels', 'Pallet build', 'Dispatch ready'],
    accent: 'teal' as const,
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Documentation',
    description: 'Complete audit trail for every aggregation event with EPCIS-compatible records.',
    highlights: ['EPCIS events', 'Audit trail', 'GCC ready'],
    accent: 'navy' as const,
  },
];

export default function AggregationContent() {
  return (
    <>
      <SectionShell variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp(20)} initial="hidden" whileInView="visible" viewport={viewport}>
            <h2 className="text-section-title font-extrabold text-foreground heading-accent-line mb-4" style={{ fontWeight: 800 }}>
              Packaging Hierarchy Traceability
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
              Complete aggregation operations from unit-level serialization through to pallet-level
              logistics units — with scanning, verification, and hierarchy management at our UAE facility.
            </p>
            <ul className="space-y-3">
              {[
                'Unit pack serialization with parent-child linking',
                'Case and pallet SSCC generation and verification',
                'Relabeling and hierarchy correction workflows',
                'EPCIS aggregation event capture and exchange',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <AggregationHierarchyDiagram />
        </div>
      </SectionShell>
      <SectionShell variant="muted" grid>
        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <OperationalCard key={cap.title} {...cap} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
