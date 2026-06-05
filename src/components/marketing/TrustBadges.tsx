import React from 'react';
import { Shield, CheckCircle2, Warehouse } from 'lucide-react';

const badges = [
  { label: 'UAE Free Zone Facility', icon: Warehouse },
  { label: 'GS1 Ready', icon: CheckCircle2 },
  { label: 'Tatmeen Ready', icon: Shield },
  { label: 'GCC Compliance Support', icon: CheckCircle2 },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 bg-white border border-[#17448E]/15 px-4 py-2 rounded-lg shadow-sm"
        >
          <badge.icon size={14} className="text-[#17448E] shrink-0" />
          <span className="text-xs font-medium text-foreground">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
