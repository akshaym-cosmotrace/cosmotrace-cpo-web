import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import MetricsBentoGrid from './components/MetricsBentoGrid';
import LeadsTable from './components/LeadsTable';
import ActivityFeed from './components/ActivityFeed';
import ChartsRow from './components/ChartsRow';

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="max-w-screen-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-700 text-foreground" style={{ fontWeight: 700 }}>
            Operations Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            COSMOTRACE lead pipeline, content, and operational overview — updated 11 May 2026, 13:42
          </p>
        </div>

        {/* KPI Bento Grid */}
        <MetricsBentoGrid />

        {/* Charts Row */}
        <ChartsRow />

        {/* Bottom: Table + Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mt-6">
          <div className="xl:col-span-2">
            <LeadsTable />
          </div>
          <div className="xl:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}