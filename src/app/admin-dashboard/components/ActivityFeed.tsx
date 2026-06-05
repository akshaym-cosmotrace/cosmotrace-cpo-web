import React from 'react';
import { UserPlus, MessageSquare, FileText, Calendar, Eye, TrendingUp } from 'lucide-react';

const activities = [
  {
    id: 'act-001',
    type: 'lead',
    icon: UserPlus,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'New consultation request',
    detail: 'Dr. Ahmed Al-Rashidi — Gulf Pharma Holdings',
    time: '13:28',
    date: 'Today',
  },
  {
    id: 'act-002',
    type: 'contact',
    icon: MessageSquare,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Unread contact submission',
    detail: 'Khalid Ibrahim Hassan — Emirates MedTech',
    time: '11:45',
    date: 'Today',
  },
  {
    id: 'act-003',
    type: 'lead',
    icon: TrendingUp,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Lead converted',
    detail: 'Fatima Al-Zaabi — GCC PharmaCo',
    time: '09:12',
    date: 'Today',
  },
  {
    id: 'act-004',
    type: 'blog',
    icon: FileText,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    title: 'Blog post published',
    detail: 'UAE Tatmeen Explained — UAE Compliance',
    time: '08:30',
    date: 'Today',
  },
  {
    id: 'act-005',
    type: 'consultation',
    icon: Calendar,
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    title: 'Facility walkthrough scheduled',
    detail: 'Sarah Al-Mansouri — Nova Pharma UAE',
    time: '16:20',
    date: '10 May',
  },
  {
    id: 'act-006',
    type: 'lead',
    icon: UserPlus,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'Brochure download lead',
    detail: 'Mohammed Al-Qasimi — Sharjah Medical Supplies',
    time: '14:55',
    date: '09 May',
  },
  {
    id: 'act-007',
    type: 'blog',
    icon: Eye,
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-500',
    title: 'Blog post viewed 124 times',
    detail: 'GCC Serialization Readiness — top article',
    time: '12:00',
    date: '09 May',
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white border border-border rounded-2xl shadow-card overflow-hidden h-full">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="text-sm font-700 text-foreground" style={{ fontWeight: 700 }}>
            Recent Activity
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Platform events — last 7 days
          </p>
        </div>
        <button className="text-xs font-500 text-secondary hover:text-primary transition-colors" style={{ fontWeight: 500 }}>
          View all
        </button>
      </div>
      <div className="divide-y divide-border">
        {activities?.map((act) => (
          <div
            key={`act-${act?.id}`}
            className="px-5 py-3.5 hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg ${act?.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <act.icon size={15} className={act?.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-600 text-foreground leading-snug" style={{ fontWeight: 600 }}>
                  {act?.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{act?.detail}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs font-500 text-muted-foreground tabular-nums" style={{ fontWeight: 500 }}>
                  {act?.time}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{act?.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-border">
        <button className="w-full text-xs font-500 text-secondary hover:text-primary transition-colors py-1" style={{ fontWeight: 500 }}>
          Load more activity →
        </button>
      </div>
    </div>
  );
}