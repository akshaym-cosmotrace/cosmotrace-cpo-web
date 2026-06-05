'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Package } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import { DURATION, EASE_OUT, fadeUp, fadeIn, viewport } from '@/lib/motion';

const pricingModels = [
  {
    id: 'pay-per-use',
    icon: Zap,
    title: 'Pay-Per-Use',
    subtitle: 'Flexible Operational Model',
    desc: 'Transparent per-pack pricing aligned with your actual serialization volume.',
    features: [
      'Transparent per-pack pricing',
      'No minimum volume commitment',
      'Flexible scalability as volumes grow',
      'Start from 10,000 packs/month',
    ],
    cta: 'Request Pay-Per-Use Quote',
    highlight: false,
  },
  {
    id: 'bundled',
    icon: Package,
    title: 'Bundled Pricing',
    subtitle: 'Enterprise Commitment Model',
    desc: 'Predictable operational spend for established pharmaceutical companies with consistent volumes.',
    features: [
      'Simplified monthly billing',
      'Predictable operational spend',
      'Priority operational support',
      'Volume discount tiers included',
    ],
    cta: 'Request Bundled Pricing',
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <SectionShell id="pricing" variant="white">
      <motion.div
        variants={fadeUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 text-xs font-semibold px-4 py-2 rounded-full mb-5">
          Commercial Models
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-4 heading-accent-line inline-block" style={{ fontWeight: 800 }}>
          Pricing Built for Pharmaceutical Scale
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
          Flexible commercial models designed to match your serialization volume and operational maturity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pricingModels.map((model, i) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.md, ease: EASE_OUT, delay: i * 0.12 }}
            className={`relative bg-white border-2 rounded-2xl p-8 shadow-card accent-border-l ${
              model.highlight ? 'border-[#17448E]/30 ring-1 ring-[#17448E]/10' : 'border-[#17448E]/12'
            }`}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl icon-accent-bg flex items-center justify-center">
                <model.icon size={24} className="text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {model.subtitle}
                </span>
                <h3 className="text-xl font-extrabold text-foreground mt-2" style={{ fontWeight: 800 }}>
                  {model.title}
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{model.desc}</p>
            <ul className="space-y-2.5 mb-6">
              {model.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors ${
                model.highlight
                  ? 'bg-primary text-white hover:bg-navy-900'
                  : 'border border-border text-primary hover:bg-muted'
              }`}
            >
              {model.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeIn()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center text-xs text-muted-foreground mt-8"
      >
        All pricing is volume-based. Contact us for a customized quote aligned to your UAE & GCC requirements.
      </motion.p>
    </SectionShell>
  );
}
