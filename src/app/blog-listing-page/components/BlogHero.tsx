'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, User, Star } from 'lucide-react';
import { fadeUp, transition } from '@/lib/motion';

export default function BlogHero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-marketing-header pb-16 lg:pt-28 lg:pb-20 industrial-grid">
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <motion.div
          variants={fadeUp(20)}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Pharmaceutical Compliance Insights
          </div>
          <h1 className="text-hero-xl font-extrabold text-foreground mb-4 heading-accent-line" style={{ fontWeight: 800 }}>
            GCC Pharma <span className="gold-gradient-text">Compliance</span> Insights
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-4">
            Expert insights on UAE Tatmeen, EPCIS, GS1 standards, serialization, and
            pharmaceutical traceability across the GCC market.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0, transition: { ...transition.smooth, delay: 0.12 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <Link href="/blog" className="block group">
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow accent-border-l">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-56 lg:h-auto bg-muted flex items-center justify-center relative">
                  <div className="text-center px-8">
                    <div className="w-16 h-16 icon-accent-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-accent" />
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Featured Article
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                      UAE Compliance
                    </span>
                    <span className="bg-gold-500/10 text-gold-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug" style={{ fontWeight: 800 }}>
                    UAE Tatmeen Explained: What Pharmaceutical Companies Need to Know
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    A comprehensive guide to the UAE National Track & Trace System (Tatmeen) —
                    how it works, what serialization data is required, and how CosmoTrace
                    enables full Tatmeen compliance.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User size={13} />
                        CosmoTrace Editorial
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        7 min read
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
