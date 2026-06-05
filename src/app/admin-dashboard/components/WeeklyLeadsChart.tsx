'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts';

const weeklyData = [
  { day: 'Mon 05', leads: 3, consultations: 1 },
  { day: 'Tue 06', leads: 5, consultations: 2 },
  { day: 'Wed 07', leads: 2, consultations: 0 },
  { day: 'Thu 08', leads: 7, consultations: 3 },
  { day: 'Fri 09', leads: 4, consultations: 1 },
  { day: 'Sat 10', leads: 1, consultations: 0 },
  { day: 'Sun 11', leads: 3, consultations: 1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border rounded-xl shadow-card-hover p-3 text-xs">
      <p className="font-600 text-foreground mb-2" style={{ fontWeight: 600 }}>{label}</p>
      {payload.map((p: any) => (
        <div key={`tt-${p.dataKey}`} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: p.fill }} />
          <span className="text-muted-foreground capitalize">{p.dataKey}:</span>
          <span className="font-600 text-foreground tabular-nums" style={{ fontWeight: 600 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function WeeklyLeadsChart() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-card h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-700 text-foreground" style={{ fontWeight: 700 }}>
            Weekly Lead Volume
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            05–11 May 2026 — leads captured per day
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
            <span className="text-muted-foreground">Leads</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-muted-foreground">Consultations</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={weeklyData} barGap={4} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }}
            axisLine={false}
            tickLine={false}
            width={28}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--muted)', opacity: 0.5 }} />
          <Bar dataKey="leads" fill="var(--primary)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="consultations" fill="var(--accent)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}