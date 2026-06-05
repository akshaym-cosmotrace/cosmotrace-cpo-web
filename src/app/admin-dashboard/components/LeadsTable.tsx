'use client';

import React, { useState } from 'react';
import { Search, Filter, Download, ChevronDown, ChevronUp, Eye, Edit2, Trash2 } from 'lucide-react';

type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'CLOSED';
type LeadSource = 'CONSULTATION_REQUEST' | 'FACILITY_WALKTHROUGH' | 'BROCHURE_DOWNLOAD' | 'HOMEPAGE_CTA' | 'CONTACT_FORM';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  source: LeadSource;
  status: LeadStatus;
  date: string;
}

const mockLeads: Lead[] = [
  { id: 'lead-001', name: 'Dr. Ahmed Al-Rashidi', email: 'ahmed.alrashidi@gulpharma.ae', company: 'Gulf Pharma Holdings', phone: '+971 50 234 5678', source: 'CONSULTATION_REQUEST', status: 'QUALIFIED', date: '11 May 2026' },
  { id: 'lead-002', name: 'Sarah Al-Mansouri', email: 's.mansouri@novapharmae.com', company: 'Nova Pharma UAE', phone: '+971 55 876 4321', source: 'HOMEPAGE_CTA', status: 'CONTACTED', date: '10 May 2026' },
  { id: 'lead-003', name: 'Khalid Ibrahim Hassan', email: 'k.hassan@emiratesmed.ae', company: 'Emirates MedTech', phone: '+971 52 345 6789', source: 'FACILITY_WALKTHROUGH', status: 'NEW', date: '10 May 2026' },
  { id: 'lead-004', name: 'Fatima Al-Zaabi', email: 'fatima@gccpharmaco.com', company: 'GCC PharmaCo', phone: '+971 56 987 6543', source: 'CONSULTATION_REQUEST', status: 'CONVERTED', date: '09 May 2026' },
  { id: 'lead-005', name: 'Mohammed Al-Qasimi', email: 'm.qasimi@sharjahmeds.ae', company: 'Sharjah Medical Supplies', phone: '+971 50 111 2233', source: 'BROCHURE_DOWNLOAD', status: 'NEW', date: '09 May 2026' },
  { id: 'lead-006', name: 'Layla Bin Saeed', email: 'layla@abupharma.ae', company: 'Abu Dhabi Pharma Group', phone: '+971 54 456 7890', source: 'CONTACT_FORM', status: 'CONTACTED', date: '08 May 2026' },
  { id: 'lead-007', name: 'Omar Al-Nuaimi', email: 'o.nuaimi@gulftraceability.com', company: 'Gulf Traceability Solutions', phone: '+971 55 567 8901', source: 'CONSULTATION_REQUEST', status: 'QUALIFIED', date: '07 May 2026' },
  { id: 'lead-008', name: 'Reem Al-Falasi', email: 'reem@dubaipharmalogistics.ae', company: 'Dubai Pharma Logistics', phone: '+971 52 678 9012', source: 'HOMEPAGE_CTA', status: 'NEW', date: '06 May 2026' },
  { id: 'lead-009', name: 'Hassan Al-Blooshi', email: 'h.blooshi@menalifesciences.com', company: 'MENA Life Sciences', phone: '+971 56 789 0123', source: 'FACILITY_WALKTHROUGH', status: 'CLOSED', date: '05 May 2026' },
  { id: 'lead-010', name: 'Aisha Al-Ketbi', email: 'aisha@serialpharma.ae', company: 'Serial Pharma UAE', phone: '+971 50 890 1234', source: 'CONSULTATION_REQUEST', status: 'CONVERTED', date: '04 May 2026' },
];

const statusConfig: Record<LeadStatus, { label: string; classes: string }> = {
  NEW: { label: 'New', classes: 'bg-blue-100 text-blue-700' },
  CONTACTED: { label: 'Contacted', classes: 'bg-amber-100 text-amber-700' },
  QUALIFIED: { label: 'Qualified', classes: 'bg-violet-100 text-violet-700' },
  CONVERTED: { label: 'Converted', classes: 'bg-emerald-100 text-emerald-700' },
  CLOSED: { label: 'Closed', classes: 'bg-slate-100 text-slate-600' },
};

const sourceConfig: Record<LeadSource, string> = {
  CONSULTATION_REQUEST: 'Consultation',
  FACILITY_WALKTHROUGH: 'Facility Tour',
  BROCHURE_DOWNLOAD: 'Brochure',
  HOMEPAGE_CTA: 'Homepage CTA',
  CONTACT_FORM: 'Contact Form',
};

const statusOptions: LeadStatus[] = ['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'CLOSED'];

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'ALL'>('ALL');
  const [sortKey, setSortKey] = useState<keyof Lead>('date');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [openStatusId, setOpenStatusId] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const perPage = 7;

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'ALL' || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortKey] as string;
    const bv = b[sortKey] as string;
    return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  const toggleSort = (key: keyof Lead) => {
    if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const changeStatus = (id: string, status: LeadStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    setOpenStatusId(null);
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === paginated.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(paginated.map((l) => l.id)));
  };

  const SortIcon = ({ col }: { col: keyof Lead }) =>
    sortKey === col ? (
      sortDir === 'asc' ? <ChevronUp size={13} /> : <ChevronDown size={13} />
    ) : (
      <ChevronDown size={13} className="opacity-30" />
    );

  return (
    <div className="bg-white border border-border rounded-2xl shadow-card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h3 className="text-sm font-700 text-foreground" style={{ fontWeight: 700 }}>
            Recent Leads
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} leads — sorted by {sortKey}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search leads..."
              className="pl-8 pr-3 py-1.5 text-xs border border-border rounded-lg outline-none focus:border-primary transition-colors w-40 bg-white text-foreground"
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => { setFilterStatus(e.target.value as LeadStatus | 'ALL'); setPage(1); }}
            className="text-xs border border-border rounded-lg px-2.5 py-1.5 outline-none focus:border-primary bg-white text-foreground"
          >
            <option value="ALL">All Status</option>
            {statusOptions.map((s) => (
              <option key={`filter-status-${s}`} value={s}>
                {statusConfig[s].label}
              </option>
            ))}
          </select>

          {/* Export */}
          <button className="flex items-center gap-1.5 text-xs font-500 text-muted-foreground border border-border px-3 py-1.5 rounded-lg hover:bg-muted transition-colors" style={{ fontWeight: 500 }}>
            <Download size={13} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Bulk Action Bar */}
      {selectedRows.size > 0 && (
        <div className="px-5 py-2.5 bg-primary/5 border-b border-primary/10 flex items-center gap-3">
          <span className="text-xs font-600 text-primary" style={{ fontWeight: 600 }}>
            {selectedRows.size} selected
          </span>
          <button className="text-xs text-secondary hover:text-primary transition-colors font-500" style={{ fontWeight: 500 }}>
            Mark as Contacted
          </button>
          <button className="text-xs text-red-500 hover:text-red-700 transition-colors font-500" style={{ fontWeight: 500 }}>
            Delete Selected
          </button>
          <button
            onClick={() => setSelectedRows(new Set())}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="w-10 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.size === paginated.length && paginated.length > 0}
                  onChange={toggleAll}
                  className="w-3.5 h-3.5 accent-primary"
                />
              </th>
              {(['name', 'company', 'source', 'status', 'date'] as (keyof Lead)[]).map((col) => (
                <th
                  key={`th-${col}`}
                  onClick={() => toggleSort(col)}
                  className="px-3 py-3 text-left font-600 text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                  style={{ fontWeight: 600 }}
                >
                  <div className="flex items-center gap-1 capitalize">
                    {col}
                    <SortIcon col={col} />
                  </div>
                </th>
              ))}
              <th className="px-3 py-3 text-right font-600 text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 600 }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-muted-foreground">
                  <div className="flex flex-col items-center gap-2">
                    <Search size={24} className="opacity-30" />
                    <p className="text-sm font-500" style={{ fontWeight: 500 }}>No leads match your search</p>
                    <p className="text-xs">Try adjusting your search or filter criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginated.map((lead, idx) => (
                <tr
                  key={`lead-row-${lead.id}`}
                  className={`table-row-hover border-b border-border last:border-0 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-muted/20'
                  } ${selectedRows.has(lead.id) ? 'bg-primary/5' : ''}`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(lead.id)}
                      onChange={() => toggleRow(lead.id)}
                      className="w-3.5 h-3.5 accent-primary"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <p className="font-600 text-foreground" style={{ fontWeight: 600 }}>{lead.name}</p>
                    <p className="text-muted-foreground mt-0.5">{lead.email}</p>
                  </td>
                  <td className="px-3 py-3">
                    <p className="font-500 text-foreground" style={{ fontWeight: 500 }}>{lead.company}</p>
                    <p className="text-muted-foreground mt-0.5">{lead.phone}</p>
                  </td>
                  <td className="px-3 py-3">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-500" style={{ fontWeight: 500 }}>
                      {sourceConfig[lead.source]}
                    </span>
                  </td>
                  <td className="px-3 py-3 relative">
                    <button
                      onClick={() => setOpenStatusId(openStatusId === lead.id ? null : lead.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-600 text-xs cursor-pointer hover:opacity-80 transition-opacity ${statusConfig[lead.status].classes}`}
                      style={{ fontWeight: 600 }}
                    >
                      {statusConfig[lead.status].label}
                      <ChevronDown size={10} />
                    </button>
                    {openStatusId === lead.id && (
                      <div className="absolute z-20 top-full left-0 mt-1 bg-white border border-border rounded-xl shadow-card-hover py-1 min-w-[140px]">
                        {statusOptions.map((s) => (
                          <button
                            key={`status-opt-${lead.id}-${s}`}
                            onClick={() => changeStatus(lead.id, s)}
                            className={`w-full text-left px-3 py-1.5 text-xs hover:bg-muted transition-colors flex items-center gap-2 ${
                              lead.status === s ? 'font-600' : 'font-400'
                            }`}
                            style={{ fontWeight: lead.status === s ? 600 : 400 }}
                          >
                            <span className={`inline-block w-2 h-2 rounded-full ${statusConfig[s].classes.split(' ')[0]}`} />
                            {statusConfig[s].label}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{lead.date}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        title="View lead details"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
                        title="Edit lead"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        className="w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors"
                        title="Delete lead — this cannot be undone"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-5 py-3.5 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, sorted.length)} of {sorted.length} leads
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={`page-btn-${p}`}
                onClick={() => setPage(p)}
                className={`text-xs w-7 h-7 rounded-lg border transition-colors ${
                  page === p
                    ? 'bg-primary text-white border-primary font-600' :'border-border hover:bg-muted text-foreground'
                }`}
                style={{ fontWeight: page === p ? 600 : 400 }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}