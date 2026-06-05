import React from 'react';
import { Package, Boxes, Layers, Warehouse } from 'lucide-react';

const tiers = [
  { label: 'Unit Pack', icon: Package, desc: 'Individual serialized item' },
  { label: 'Bundle / Case', icon: Boxes, desc: 'Secondary aggregation level' },
  { label: 'Pallet', icon: Layers, desc: 'SSCC-labelled logistics unit' },
  { label: 'Warehouse', icon: Warehouse, desc: 'Stored & traceable inventory' },
];

export default function AggregationHierarchyDiagram() {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-card">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8 text-center">
        Packaging Hierarchy Traceability
      </p>
      <div className="flex flex-col items-center gap-0">
        {tiers.map((tier, i) => (
          <React.Fragment key={tier.label}>
            <div className="w-full max-w-sm flex items-center gap-4 p-4 border border-border rounded-xl accent-border-l bg-muted/30">
              <div className="w-10 h-10 icon-accent-bg rounded-lg flex items-center justify-center shrink-0">
                <tier.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{tier.label}</p>
                <p className="text-xs text-muted-foreground">{tier.desc}</p>
              </div>
            </div>
            {i < tiers.length - 1 && (
              <div className="w-px h-6 bg-gradient-to-b from-primary to-accent" aria-hidden />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
