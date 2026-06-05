import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

export default function AdminTopbar() {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 flex-shrink-0">
      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search leads, contacts..."
            className="pl-9 pr-4 py-2 text-sm bg-muted border border-border rounded-lg outline-none focus:border-primary transition-colors w-56 lg:w-72 text-foreground"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-lg hover:bg-muted flex items-center justify-center transition-colors" aria-label="Notifications">
          <Bell size={18} className="text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-lg hover:bg-muted transition-colors">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-700 text-white" style={{ fontWeight: 700 }}>CA</span>
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-600 text-foreground leading-none" style={{ fontWeight: 600 }}>
              CosmoTrace Admin
            </p>
            <p className="text-xs text-muted-foreground leading-none mt-0.5">
              admin@cosmotrace.ae
            </p>
          </div>
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}