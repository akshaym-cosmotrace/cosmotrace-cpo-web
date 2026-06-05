'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { LayoutDashboard, Users, MessageSquare, FileText, Calendar, ChevronLeft, ChevronRight, Settings, LogOut,  } from 'lucide-react';

const navGroups = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin-dashboard', icon: LayoutDashboard, badge: null },
    ],
  },
  {
    label: 'Lead Management',
    items: [
      { label: 'Leads', href: '/admin-dashboard', icon: Users, badge: '12' },
      { label: 'Contacts', href: '/admin-dashboard', icon: MessageSquare, badge: '5' },
      { label: 'Consultations', href: '/admin-dashboard', icon: Calendar, badge: '3' },
    ],
  },
  {
    label: 'Content',
    items: [
      { label: 'Blog Posts', href: '/admin-dashboard', icon: FileText, badge: null },
    ],
  },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`flex flex-col bg-navy-950 border-r border-white/10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Logo */}
      <div className={`flex items-center border-b border-white/10 h-16 ${collapsed ? 'justify-center px-3' : 'gap-3 px-5'}`}>
        <AppLogo
          src="/assets/images/LOGO_PNG-01_1_-1778506493482.png"
          size={32}
        />
        {!collapsed && (
          <span className="font-bold text-base text-white tracking-tight truncate">
            CosmoTrace
          </span>
        )}
      </div>
      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin">
        {navGroups?.map((group) => (
          <div key={`admin-group-${group?.label}`} className="mb-5">
            {!collapsed && (
              <p className="px-5 mb-2 text-xs font-600 text-slate-500 uppercase tracking-widest" style={{ fontWeight: 600 }}>
                {group?.label}
              </p>
            )}
            {group?.items?.map((item) => {
              const isActive = pathname === item?.href;
              return (
                <Link
                  key={`admin-nav-${item?.label}`}
                  href={item?.href}
                  className={`admin-sidebar-item flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg mb-0.5 ${
                    isActive ? 'active bg-secondary/15 text-white' : 'text-slate-400 hover:text-white'
                  } ${collapsed ? 'justify-center' : ''}`}
                  title={collapsed ? item?.label : undefined}
                >
                  <item.icon size={18} className="flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="text-sm font-500 flex-1" style={{ fontWeight: 500 }}>
                        {item?.label}
                      </span>
                      {item?.badge && (
                        <span className="bg-accent text-white text-xs font-600 px-2 py-0.5 rounded-full min-w-[20px] text-center" style={{ fontWeight: 600 }}>
                          {item?.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      {/* Bottom */}
      <div className="border-t border-white/10 p-3 space-y-1">
        <Link
          href="/admin-dashboard"
          className={`admin-sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white ${collapsed ? 'justify-center' : ''}`}
          title={collapsed ? 'Settings' : undefined}
        >
          <Settings size={18} />
          {!collapsed && <span className="text-sm font-500" style={{ fontWeight: 500 }}>Settings</span>}
        </Link>
        <Link
          href="/"
          className={`admin-sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 ${collapsed ? 'justify-center' : ''}`}
          title={collapsed ? 'Back to Site' : undefined}
        >
          <LogOut size={18} />
          {!collapsed && <span className="text-sm font-500" style={{ fontWeight: 500 }}>Back to Site</span>}
        </Link>
      </div>
      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-24 -right-3 w-6 h-6 bg-navy-950 border border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
      </button>
    </aside>
  );
}