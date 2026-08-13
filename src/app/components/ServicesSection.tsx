'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Layers, Warehouse, Truck, Thermometer, PackageCheck, ClipboardCheck } from 'lucide-react';
import OperationalCard from '@/components/marketing/OperationalCard';
import SectionShell from '@/components/marketing/SectionShell';
import { fadeUp, staggerContainer, viewport } from '@/lib/motion';

export const services = [
  {
    id: 'serialization',
    icon: QrCode,
    title: 'Serialization Operations',
    desc: 'GS1-compliant serial number generation, commissioning and verification, EPCIS file generation, and Tatmeen reporting readiness.',
    highlights: ['GS1-Compliant', 'EPCIS Ready', 'Tatmeen Reporting', 'Line Integration'],
    href: '/serialization',
    accent: 'navy' as const,
  },
  {
    id: 'aggregation',
    icon: Layers,
    title: 'Aggregation Operations',
    desc: 'Complete packaging hierarchy traceability: Unit packs → Bundles → Cases → Pallets with scanning, verification, and relabeling.',
    highlights: ['Unit → Case → Pallet', 'Verification', 'Relabeling', 'Hierarchy Mgmt'],
    href: '/aggregation',
    accent: 'gold' as const,
  },
  {
    id: 'warehousing',
    icon: Warehouse,
    title: 'Warehousing & Storage',
    desc: 'Pharmaceutical-grade warehousing with real-time inventory monitoring, batch traceability, and compliance-ready storage.',
    highlights: ['Pharma-Grade', 'Batch Traceability', 'Real-time Monitoring', 'GMP Aligned'],
    href: '/warehousing',
    accent: 'navy' as const,
  },
  {
    id: 'inbound',
    icon: Truck,
    title: 'Inbound Logistics',
    desc: 'Shipment coordination, receiving and inspection, sortation and put-away, pallet and case-level handling.',
    highlights: ['Receiving', 'Sortation', 'Put-Away', 'Allocation'],
    href: '/services',
    accent: 'navy' as const,
  },
  {
    id: 'coldchain',
    icon: Thermometer,
    title: 'Cold Chain Storage',
    desc: 'Ambient +15°C to +25°C and cold chain +2°C to +8°C with real-time monitoring and compliance documentation.',
    highlights: ['Ambient', 'Cold Chain', '24/7 Monitoring', 'Compliant'],
    href: '/warehousing',
    accent: 'navy' as const,
  },
  {
    id: 'outbound',
    icon: PackageCheck,
    title: 'Outbound Handling',
    desc: 'Order picking, packing and staging, dispatch coordination, and fully traceable outbound processing.',
    highlights: ['Order Picking', 'Dispatch', 'Traceable', 'Staging'],
    href: '/services',
    accent: 'gold' as const,
  },
  {
    id: 'compliance',
    icon: ClipboardCheck,
    title: 'Compliance Operations',
    desc: 'EPCIS reporting, Tatmeen readiness, GS1 standards, and GCC traceability mandate support.',
    highlights: ['EPCIS 2.0', 'Tatmeen', 'GS1', 'GCC'],
    href: '/compliance',
    accent: 'navy' as const,
  },
];

type ServicesSectionProps = {
  overview?: boolean;
  limit?: number;
};

export default function ServicesSection({ overview = false, limit }: ServicesSectionProps) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <SectionShell id="services" variant={overview ? 'blue' : 'white'} grid={!overview}>
      <motion.div
        variants={fadeUp(20)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Our Services
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line inline-block" style={{ fontWeight: 800 }}>
          End-to-End Pharmaceutical Operations
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
          Integrated packaging, serialization, warehousing, and traceability operations — all
          under one UAE Free Zone roof.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.055, 0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={`grid gap-5 ${
          overview
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}
      >
        {displayed.map((service) => (
          <motion.div key={service.id} variants={fadeUp(14)}>
            <OperationalCard
              icon={service.icon}
              title={service.title}
              description={service.desc}
              highlights={service.highlights}
              href={service.href}
              accent={service.accent}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
