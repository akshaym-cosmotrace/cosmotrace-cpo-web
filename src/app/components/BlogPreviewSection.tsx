'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import { fadeUp, staggerContainer, transition, viewport } from '@/lib/motion';

const previewPosts = [
  {
    id: 'post-001',
    category: 'UAE Compliance',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: 'UAE Tatmeen Explained: What Pharmaceutical Companies Need to Know',
    excerpt: 'A comprehensive guide to the UAE National Track & Trace System (Tatmeen) — how it works, what data is required, and how CosmoTrace enables compliance.',
    author: 'CosmoTrace Editorial Team',
    date: '08 May 2026',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 'post-002',
    category: 'GCC Serialization',
    categoryColor: 'bg-muted text-primary',
    title: 'GCC Serialization Readiness: A Market-by-Market Guide for 2026',
    excerpt: 'Understanding serialization mandates across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.',
    author: 'CosmoTrace Editorial Team',
    date: '02 May 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'post-003',
    category: 'EPCIS & Reporting',
    categoryColor: 'bg-gold-500/10 text-gold-600',
    title: 'EPCIS Fundamentals for Pharmaceutical Companies',
    excerpt: 'What is EPCIS 2.0, why it matters for pharmaceutical traceability, and how to implement compliant event generation.',
    author: 'CosmoTrace Editorial Team',
    date: '25 Apr 2026',
    readTime: '6 min read',
    featured: false,
  },
];

export default function BlogPreviewSection() {
  return (
    <SectionShell id="blog" variant="muted">
      <motion.div
        variants={fadeUp(22)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Insights & Compliance
          </div>
          <h2 className="text-section-title font-extrabold text-foreground heading-accent-line" style={{ fontWeight: 800 }}>
            Pharmaceutical Compliance Insights
          </h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors flex-shrink-0"
        >
          View all articles
          <ArrowRight size={16} />
        </Link>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.075, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {previewPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: transition.smooth } }}
            className="bg-white border border-border rounded-2xl overflow-hidden card-hover shadow-card group accent-border-l"
          >
            <div className="h-32 bg-muted flex items-center justify-center relative">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                {post.category}
              </span>
              {post.featured && (
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-sm font-bold text-foreground mb-2.5 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    Editorial
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <Link href="/blog" className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-1">
                  Read
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
