'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer,  } from 'recharts';

const sourceData = [
  { name: 'Consultation Request', value: 58, color: '#1a2b48' },
  { name: 'Homepage CTA', value: 34, color: '#29abe2' },
  { name: 'Facility Walkthrough', value: 28, color: '#d68f29' },
  { name: 'Contact Form', value: 19, color: '#10B981' },
  { name: 'Brochure Download', value: 8, color: '#8B5CF6' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="bg-white border border-border rounded-xl shadow-card-hover p-3 text-xs">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.payload.color }} />
        <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>{item.name}</span>
      </div>
      <p className="text-muted-foreground">
        <span className="font-600 text-foreground tabular-nums" style={{ fontWeight: 600 }}>{item.value}</span> leads
      </p>
    </div>
  );
};

const CustomLegend = ({ payload }: any) => (
  <div className="flex flex-col gap-1.5 mt-3">
    {payload?.map((entry: any) => (
      <div key={`legend-${entry.value}`} className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entry.color }} />
          <span className="text-xs text-muted-foreground truncate max-w-[130px]">{entry.value}</span>
        </div>
        <span className="text-xs font-600 text-foreground tabular-nums" style={{ fontWeight: 600 }}>
          {entry.payload.value}
        </span>
      </div>
    ))}
  </div>
);

export default function LeadSourceChart() {
  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-card h-full">
      <div className="mb-4">
        <h3 className="text-sm font-700 text-foreground" style={{ fontWeight: 700 }}>
          Lead Source Distribution
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          147 total leads by acquisition channel
        </p>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie
            data={sourceData}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={72}
            paddingAngle={3}
            dataKey="value"
          >
            {sourceData.map((entry, index) => (
              <Cell key={`source-cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend payload={sourceData.map((d) => ({ value: d.name, color: d.color, payload: d }))} />
    </div>
  );
}