'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const WeeklyLeadsChart = dynamic(() => import('./WeeklyLeadsChart'), { ssr: false });
const LeadSourceChart = dynamic(() => import('./LeadSourceChart'), { ssr: false });

export default function ChartsRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <WeeklyLeadsChart />
      </div>
      <div className="lg:col-span-1">
        <LeadSourceChart />
      </div>
    </div>
  );
}