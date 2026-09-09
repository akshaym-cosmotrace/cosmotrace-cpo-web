'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, MinusCircle, CreditCard, Headphones, Warehouse } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import { fadeUp, staggerContainer, transition, viewport } from '@/lib/motion';

const reasons = [
  {
    id: 'operations-infra',
    icon: Warehouse,
    title: 'Warehouse & Operations Infrastructure',
    desc: 'UAE Free Zone facility with ambient and cold chain capabilities, batch traceability, and GMP-aligned storage — ready for pharmaceutical operations.',
    color: 'text-primary',
    bg: 'icon-accent-bg',
    featured: true,
  },
  {
    id: 'gcc-compliance',
    icon: Globe,
    title: 'UAE & GCC Compliance Readiness',
    desc: 'Purpose-built for Tatmeen, GS1, EPCIS, and all GCC regulatory frameworks. We stay current so your operations remain compliant.',
    color: 'text-primary',
    bg: 'bg-muted',
  },
  {
    id: 'scalable-infra',
    icon: TrendingUp,
    title: 'Scalable Operational Capacity',
    desc: 'Scales from 10k to 500k+ packs per month without infrastructure investment on your side.',
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
  },
  {
    id: 'reduced-burden',
    icon: MinusCircle,
    title: 'Reduced Operational Burden',
    desc: 'We handle compliance updates and operational complexity — your team focuses on core pharmaceutical business.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'flexible-commercial',
    icon: CreditCard,
    title: 'Flexible Commercial Models',
    desc: 'Pay-per-use or bundled pricing aligned to your volume. No oversized contracts.',
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
  },
  {
    id: 'dedicated-support',
    icon: Headphones,
    title: 'Dedicated Operational Support',
    desc: '24–48 hour response SLA and dedicated account management for mission-critical operations.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export default function WhyChooseSection() {
  const featured = reasons[0];
  const rest = reasons.slice(1);

  return (
    <SectionShell id="why-choose" variant="white">
      <motion.div
        variants={fadeUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Why CosmoTrace
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line inline-block" style={{ fontWeight: 800 }}>
          The CosmoTrace Advantage
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
          Why UAE and GCC pharmaceutical companies choose CosmoTrace as their trusted
          warehousing and compliance operations partner.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.065, 0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: transition.smooth } }}
          className="sm:col-span-2 bg-white border-2 border-[#17448E]/20 rounded-2xl p-8 shadow-card accent-border-l"
        >
          <div className="w-12 h-12 icon-accent-bg rounded-xl flex items-center justify-center mb-5">
            <featured.icon size={26} className="text-primary" />
          </div>
          <h3 className="text-lg font-extrabold mb-3 text-foreground" style={{ fontWeight: 800 }}>
            {featured.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{featured.desc}</p>
          <div className="flex flex-wrap gap-2">
            {['Free Zone Facility', 'Cold Chain', 'Batch Traceability', 'GMP Aligned'].map((tag) => (
              <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {rest.map((reason) => (
          <motion.div
            key={reason.id}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: transition.smooth } }}
            className="bg-white border border-border rounded-2xl p-6 card-hover shadow-card"
          >
            <div className={`w-11 h-11 ${reason.bg} rounded-xl flex items-center justify-center mb-4`}>
              <reason.icon size={22} className={reason.color} />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2 leading-snug" style={{ fontWeight: 700 }}>
              {reason.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{reason.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
