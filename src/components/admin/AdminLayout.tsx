import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      <AdminSidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}