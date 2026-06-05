'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer, transition, viewport } from '@/lib/motion';

type CategoryKey = 'all' | 'uae-compliance' | 'epcis-reporting' | 'gcc-serialization' | 'gs1-standards' | 'pharma-traceability' | 'aggregation' | 'dscsa';

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All Articles' },
  { key: 'uae-compliance', label: 'UAE Compliance' },
  { key: 'epcis-reporting', label: 'EPCIS & Reporting' },
  { key: 'gcc-serialization', label: 'GCC Serialization' },
  { key: 'gs1-standards', label: 'GS1 Standards' },
  { key: 'pharma-traceability', label: 'Pharma Traceability' },
  { key: 'aggregation', label: 'Aggregation' },
];

interface BlogPost {
  id: string;
  slug: string;
  category: CategoryKey;
  categoryLabel: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

const allPosts: BlogPost[] = [
  {
    id: 'bp-001',
    slug: 'uae-tatmeen-explained',
    category: 'uae-compliance',
    categoryLabel: 'UAE Compliance',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: 'UAE Tatmeen Explained: What Pharmaceutical Companies Need to Know',
    excerpt: 'A comprehensive guide to the UAE National Track & Trace System (Tatmeen) — how it works, what serialization data is required, and how to achieve full compliance for UAE pharmaceutical operations.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '08 May 2026',
    readTime: '7 min read',
    featured: true,
    tags: ['Tatmeen', 'UAE MOH', 'Serialization', 'Track & Trace'],
  },
  {
    id: 'bp-002',
    slug: 'gcc-serialization-readiness',
    category: 'gcc-serialization',
    categoryLabel: 'GCC Serialization',
    categoryColor: 'bg-muted text-primary',
    title: 'GCC Serialization Readiness: A Market-by-Market Guide for 2026',
    excerpt: 'Understanding the serialization mandates across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman — and how to prepare your pharmaceutical supply chain for full GCC compliance.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '02 May 2026',
    readTime: '9 min read',
    featured: false,
    tags: ['GCC', 'Saudi SFDA', 'Qatar MOPH', 'Serialization Mandate'],
  },
  {
    id: 'bp-003',
    slug: 'epcis-fundamentals',
    category: 'epcis-reporting',
    categoryLabel: 'EPCIS & Reporting',
    categoryColor: 'bg-violet-100 text-violet-700',
    title: 'EPCIS Fundamentals for Pharmaceutical Companies',
    excerpt: 'What is EPCIS 2.0, why it matters for pharmaceutical traceability, and how to implement compliant event generation and exchange for UAE and GCC regulatory reporting.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '25 Apr 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['EPCIS 2.0', 'CBV', 'Capture API', 'Query Interface'],
  },
  {
    id: 'bp-004',
    slug: 'serialization-vs-aggregation',
    category: 'pharma-traceability',
    categoryLabel: 'Pharma Traceability',
    categoryColor: 'bg-amber-100 text-amber-700',
    title: "Serialization vs Aggregation: What's the Difference?",
    excerpt: 'Two foundational concepts in pharmaceutical track-and-trace — clearly explained with real-world examples from UAE and GCC market implementations and their regulatory implications.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '18 Apr 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Serialization', 'Aggregation', 'GTIN', 'SSCC'],
  },
  {
    id: 'bp-005',
    slug: 'future-pharma-traceability-middle-east',
    category: 'pharma-traceability',
    categoryLabel: 'Pharma Traceability',
    categoryColor: 'bg-amber-100 text-amber-700',
    title: 'The Future of Pharmaceutical Traceability in the Middle East',
    excerpt: 'AI-enabled track-and-trace, regulatory convergence across GCC markets, and what the next five years hold for pharmaceutical serialization — from Tatmeen expansion to pan-GCC data sharing.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '10 Apr 2026',
    readTime: '8 min read',
    featured: true,
    tags: ['AI', 'GCC Traceability', 'Future Trends', 'Digital Health'],
  },
  {
    id: 'bp-006',
    slug: 'gs1-standards-pharma',
    category: 'gs1-standards',
    categoryLabel: 'GS1 Standards',
    categoryColor: 'bg-sky-100 text-sky-700',
    title: 'GS1 Standards in Pharmaceutical Supply Chains: A Practical Overview',
    excerpt: 'GTIN, SGTIN, SSCC, and GLN — the four GS1 identifiers every pharmaceutical operations manager must understand for UAE and GCC serialization compliance.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '03 Apr 2026',
    readTime: '6 min read',
    featured: false,
    tags: ['GS1', 'GTIN', 'SGTIN', 'GLN', 'SSCC'],
  },
  {
    id: 'bp-007',
    slug: 'aggregation-best-practices',
    category: 'aggregation',
    categoryLabel: 'Aggregation',
    categoryColor: 'bg-rose-100 text-rose-700',
    title: 'Pharmaceutical Aggregation Best Practices: From Unit Pack to Pallet',
    excerpt: 'A step-by-step guide to building a compliant pharmaceutical aggregation hierarchy — unit packs, bundles, cases, and pallets — with SSCC generation and EPCIS event recording.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '28 Mar 2026',
    readTime: '7 min read',
    featured: false,
    tags: ['Aggregation', 'SSCC', 'Hierarchy', 'Packaging'],
  },
  {
    id: 'bp-008',
    slug: 'cold-chain-serialization',
    category: 'uae-compliance',
    categoryLabel: 'UAE Compliance',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: 'Cold Chain Serialization in UAE: Compliance Requirements for Temperature-Sensitive Pharmaceuticals',
    excerpt: 'How UAE pharmaceutical regulations apply to cold chain products — from serialization at +2°C to +8°C to Tatmeen reporting for biologics and vaccines.',
    author: 'COSMOTRACE Editorial Team',
    authorRole: 'Pharmaceutical Compliance Experts',
    date: '20 Mar 2026',
    readTime: '5 min read',
    featured: false,
    tags: ['Cold Chain', 'Biologics', 'Temperature Control', 'UAE MOH'],
  },
];

const containerVariants = staggerContainer(0.07, 0.04);

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transition.smooth },
};

const POSTS_PER_PAGE = 6;

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'all'
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategoryChange = (cat: CategoryKey) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={`cat-tab-${cat.key}`}
              onClick={() => handleCategoryChange(cat.key)}
              className={`text-xs font-600 px-4 py-2 rounded-full border transition-all duration-150 ${
                activeCategory === cat.key
                  ? 'bg-primary text-white border-primary' :'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
              style={{ fontWeight: 600 }}
            >
              {cat.label}
              {activeCategory === cat.key && filtered.length !== allPosts.length && (
                <span className="ml-1.5 bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full tabular-nums">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing{' '}
            <span className="font-600 text-foreground tabular-nums" style={{ fontWeight: 600 }}>
              {filtered.length}
            </span>{' '}
            {filtered.length === 1 ? 'article' : 'articles'}
            {activeCategory !== 'all' && (
              <span> in {categories.find((c) => c.key === activeCategory)?.label}</span>
            )}
          </p>
          <p className="text-xs text-muted-foreground">
            Page {page} of {totalPages}
          </p>
        </div>

        {/* Blog Cards Grid */}
        {paginated.length === 0 ? (
          <div className="text-center py-20 bg-white border border-border rounded-2xl">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-base font-700 text-foreground mb-2" style={{ fontWeight: 700 }}>
              No articles in this category yet
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              We publish new pharmaceutical compliance insights regularly. Check back soon or browse all articles.
            </p>
            <button
              onClick={() => handleCategoryChange('all')}
              className="text-sm font-600 text-secondary hover:text-primary transition-colors"
              style={{ fontWeight: 600 }}
            >
              View all articles →
            </button>
          </div>
        ) : (
          <motion.div
            key={`blog-grid-${activeCategory}-${page}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6"
          >
            {paginated.map((post) => (
              <motion.article
                key={`blog-card-${post.id}`}
                variants={cardVariants}
                className="group bg-white border border-border rounded-2xl overflow-hidden card-hover shadow-card flex flex-col"
              >
                {/* Cover */}
                <div className="h-48 bg-muted relative overflow-hidden flex items-end">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  {post.featured && (
                    <div className="absolute top-3 right-3 bg-accent text-white text-xs font-600 px-2.5 py-1 rounded-full z-10" style={{ fontWeight: 600 }}>
                      Featured
                    </div>
                  )}
                  <div className="relative z-10 p-4">
                    <span className={`inline-block text-xs font-600 px-3 py-1 rounded-full ${post.categoryColor}`} style={{ fontWeight: 600 }}>
                      {post.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-sm font-700 text-foreground mb-2.5 leading-snug group-hover:text-primary transition-colors duration-300 ease-out line-clamp-2"
                    style={{ fontWeight: 700 }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={`tag-${post.id}-${tag}`}
                        className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-500"
                        style={{ fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User size={11} />
                        COSMOTRACE
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href="/blog"
                      className="flex items-center gap-1 text-xs font-600 text-secondary group-hover:text-primary transition-colors duration-300 ease-out"
                      style={{ fontWeight: 600 }}
                    >
                      Read Article
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1.5 text-sm font-500 text-muted-foreground border border-border px-4 py-2 rounded-lg hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontWeight: 500 }}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={`blog-page-${p}`}
                onClick={() => setPage(p)}
                className={`w-10 h-10 rounded-lg border text-sm font-600 transition-colors ${
                  page === p
                    ? 'bg-primary text-white border-primary' :'border-border text-foreground hover:bg-muted'
                }`}
                style={{ fontWeight: 600 }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1.5 text-sm font-500 text-muted-foreground border border-border px-4 py-2 rounded-lg hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontWeight: 500 }}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <motion.div
          variants={fadeUp(18)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 bg-white border border-border rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 accent-border-l shadow-card"
        >
          <div>
            <h3 className="text-lg font-extrabold text-foreground mb-2" style={{ fontWeight: 800 }}>
              Ready to Achieve UAE & GCC Serialization Compliance?
            </h3>
            <p className="text-sm text-muted-foreground">
              Talk to our pharmaceutical compliance experts about your serialization requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 flex items-center gap-2 bg-accent text-white font-600 px-7 py-3.5 rounded-xl hover:bg-gold-600 transition-colors duration-300 ease-out whitespace-nowrap"
            style={{ fontWeight: 600 }}
          >
            Request Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}