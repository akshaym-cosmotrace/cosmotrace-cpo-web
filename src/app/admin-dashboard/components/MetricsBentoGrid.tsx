import React from 'react';
import { Users, FileText, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

// Grid plan: 5 cards → grid-cols-4 → row 1: hero spans 2 cols + 2 regular; row 2: 1 regular spanning 2 cols + 1 regular spanning 2 cols
const metrics = [
  {
    id: 'total-leads',
    label: 'Total Leads',
    value: '147',
    sub: '+12 this week',
    subPositive: true,
    icon: Users,
    iconColor: 'text-secondary',
    style: 'metric-primary',
    span: 'col-span-2',
    hero: true,
    detail: 'Across all lead sources since platform launch',
  },
  {
    id: 'new-this-week',
    label: 'New This Week',
    value: '12',
    sub: '↑ 33% vs last week',
    subPositive: true,
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    style: 'metric-positive',
    span: 'col-span-1',
    hero: false,
    detail: 'Week of 05–11 May 2026',
  },
  {
    id: 'unread-contacts',
    label: 'Unread Contacts',
    value: '5',
    sub: 'Requires attention',
    subPositive: false,
    icon: AlertCircle,
    iconColor: 'text-red-500',
    style: 'metric-alert',
    span: 'col-span-1',
    hero: false,
    detail: 'Contact form submissions not yet reviewed',
  },
  {
    id: 'published-posts',
    label: 'Published Posts',
    value: '5',
    sub: '2 drafts pending',
    subPositive: null,
    icon: FileText,
    iconColor: 'text-violet-600',
    style: 'metric-accent',
    span: 'col-span-2',
    hero: false,
    detail: 'Live blog articles driving organic traffic',
  },
  {
    id: 'pending-consultations',
    label: 'Pending Consultations',
    value: '8',
    sub: '3 scheduled this week',
    subPositive: true,
    icon: Calendar,
    iconColor: 'text-gold-500',
    style: 'metric-warning',
    span: 'col-span-2',
    hero: false,
    detail: 'Consultation requests awaiting scheduling',
  },
];

export default function MetricsBentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mb-6">
      {metrics?.map((m) => (
        <div
          key={`metric-${m?.id}`}
          className={`${m?.span === 'col-span-2' ? 'sm:col-span-2' : 'col-span-1'} ${m?.style} border rounded-2xl p-5 shadow-card`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-600 text-muted-foreground uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>
                {m?.label}
              </p>
              <p
                className={`font-800 text-foreground tabular-nums ${m?.hero ? 'text-4xl' : 'text-3xl'}`}
                style={{ fontWeight: 800 }}
              >
                {m?.value}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center`}>
              <m.icon size={20} className={m?.iconColor} />
            </div>
          </div>
          <p
            className={`text-xs font-500 ${
              m?.subPositive === true
                ? 'text-emerald-600'
                : m?.subPositive === false
                ? 'text-red-500' :'text-muted-foreground'
            }`}
            style={{ fontWeight: 500 }}
          >
            {m?.sub}
          </p>
          {m?.hero && (
            <p className="text-xs text-muted-foreground mt-1">{m?.detail}</p>
          )}
        </div>
      ))}
    </div>
  );
}