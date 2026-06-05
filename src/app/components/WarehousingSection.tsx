'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, BarChart3, Package, ShieldCheck, Scan } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import SectionShell from '@/components/marketing/SectionShell';
import { fadeUp, fadeUpFast, staggerContainer, viewport } from '@/lib/motion';
import { operationImages } from '@/lib/images';

const features = [
  { icon: Thermometer, label: 'Ambient Storage', value: '+15°C to +25°C', desc: 'Stable pharmaceutical-grade ambient conditions' },
  { icon: Thermometer, label: 'Cold Chain Storage', value: '+2°C to +8°C', desc: 'Refrigerated storage for temperature-sensitive products' },
  { icon: BarChart3, label: 'Real-Time Monitoring', value: '24/7 IoT', desc: 'Continuous sensor monitoring with instant alerts' },
  { icon: Scan, label: 'Batch Traceability', value: '100% Track', desc: 'Every batch tracked from receipt to dispatch' },
  { icon: ShieldCheck, label: 'Compliance-Ready', value: 'GMP Aligned', desc: 'Storage aligned with pharmaceutical GMP standards' },
  { icon: Package, label: 'Secure Handling', value: 'Pharma Grade', desc: 'Trained pharmaceutical handling protocols' },
];

export default function WarehousingSection() {
  return (
    <>
      <SectionShell id="warehousing" variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={fadeUp(20)} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
              Warehousing & Infrastructure
            </div>
            <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line" style={{ fontWeight: 800 }}>
              Pharmaceutical-Grade Storage & Handling
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mt-4 leading-relaxed">
              Our UAE Free Zone facility provides temperature-controlled, compliance-ready
              storage with complete batch traceability and real-time monitoring.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp(20)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative rounded-2xl overflow-hidden aspect-[16/10] border-2 border-[#17448E]/15 shadow-card"
          >
            <AppImage
              src={operationImages.coldChain}
              alt="Cold chain pharmaceutical storage facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.07, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.label}
              variants={fadeUpFast(14)}
              className="bg-white border border-border rounded-2xl p-6 card-hover shadow-card accent-border-l"
            >
              <div className="w-11 h-11 icon-accent-bg rounded-xl flex items-center justify-center mb-4">
                <f.icon size={22} className="text-primary" />
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{f.label}</p>
              <p className="text-2xl font-extrabold text-foreground mb-2 tabular-nums" style={{ fontWeight: 800 }}>
                {f.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>
    </>
  );
}
