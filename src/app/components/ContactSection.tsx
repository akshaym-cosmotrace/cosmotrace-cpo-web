'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Loader2, CheckCircle2, Send, MapPin, Mail, Phone } from 'lucide-react';
import SectionShell from '@/components/marketing/SectionShell';
import { slideFrom, transition, viewport } from '@/lib/motion';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  requestType: string[];
};

const requestTypes = [
  { id: 'consultation', label: 'Request a consultation' },
  { id: 'walkthrough', label: 'Schedule a facility walkthrough' },
  { id: 'integration', label: 'Discuss integration requirements' },
  { id: 'pricing', label: 'Explore scalable pricing models' },
];

type ContactSectionProps = {
  standalone?: boolean;
};

export default function ContactSection({ standalone = false }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ defaultValues: { requestType: [] } });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Consultation request submitted. Our team will contact you within 24–48 hours.');
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const content = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
      <motion.div variants={slideFrom('x', -22)} initial="hidden" whileInView="visible" viewport={viewport}>
        <div className="inline-flex items-center gap-2 compliance-badge text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
          Get In Touch
        </div>
        <h2 className="text-section-title font-extrabold text-foreground mb-5 heading-accent-line" style={{ fontWeight: 800 }}>
          Simplify GCC Pharmaceutical Operations with CosmoTrace
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mt-4">
          Let's discuss serialization, warehousing, and compliance for your UAE and GCC operations.
          Our team responds within 24–48 hours.
        </p>

        <div className="space-y-4 mb-8">
          {[
            { label: '24–48 Hour Response', sub: 'Direct response from our pharmaceutical compliance team' },
            { label: 'UAE Free Zone Facility Tour', sub: 'Schedule an in-person or virtual facility walkthrough' },
            { label: 'Custom Pricing Proposal', sub: 'Volume-based pricing aligned to your operations' },
            { label: 'Integration Assessment', sub: 'Technical review of your existing ERP and serialization systems' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {standalone && (
          <div className="space-y-3 pt-6 border-t border-border">
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <MapPin size={16} className="text-accent shrink-0" />
              UAE Free Zone Facility, Dubai, UAE
            </div>
            <a href="mailto:info@cosmotrace.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary">
              <Mail size={16} className="text-accent shrink-0" />
              info@cosmotrace.com
            </a>
            <a href="tel:+442034884542" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary">
              <Phone size={16} className="text-accent shrink-0" />
              +44 203 488 4542
            </a>
          </div>
        )}
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 22 },
          visible: { opacity: 1, x: 0, transition: { ...transition.smooth, delay: 0.08 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="bg-white rounded-2xl p-8 shadow-card border border-border accent-border-l">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Request Submitted</h3>
              <p className="text-sm text-muted-foreground">
                Thank you for contacting CosmoTrace. Our team will respond within 24–48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <h3 className="text-lg font-bold text-foreground mb-6">Request a Consultation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Full name is required' })}
                    className={`w-full px-3.5 py-2.5 text-sm border rounded-lg outline-none transition-colors ${
                      errors.name ? 'border-red-400' : 'border-border focus:border-primary'
                    } bg-white text-foreground`}
                    placeholder="Dr. Ahmed Al-Rashidi"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Work email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                    })}
                    className={`w-full px-3.5 py-2.5 text-sm border rounded-lg outline-none transition-colors ${
                      errors.email ? 'border-red-400' : 'border-border focus:border-primary'
                    } bg-white text-foreground`}
                    placeholder="ahmed@pharmagroup.ae"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('company', { required: 'Company name is required' })}
                    className={`w-full px-3.5 py-2.5 text-sm border rounded-lg outline-none transition-colors ${
                      errors.company ? 'border-red-400' : 'border-border focus:border-primary'
                    } bg-white text-foreground`}
                    placeholder="Gulf Pharma Holdings"
                  />
                  {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg outline-none focus:border-primary bg-white text-foreground"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-foreground mb-2.5">How can we help?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {requestTypes.map((rt) => (
                    <label key={rt.id} className="flex items-center gap-2.5 cursor-pointer group">
                      <input type="checkbox" value={rt.id} {...register('requestType')} className="w-4 h-4 accent-primary rounded" />
                      <span className="text-xs text-foreground group-hover:text-primary transition-colors">{rt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg outline-none focus:border-primary resize-none bg-white text-foreground"
                  placeholder="Tell us about your serialization requirements, monthly pack volumes, and compliance challenges..."
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full cta-pill disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Consultation Request
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Our team responds within 24–48 hours. All inquiries are confidential.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );

  if (standalone) {
    return (
      <SectionShell id="contact" variant="white" grid>
        {content}
      </SectionShell>
    );
  }

  return (
    <section className="section-muted py-24 lg:py-32 industrial-grid" id="contact">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">{content}</div>
    </section>
  );
}
