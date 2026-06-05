import React from 'react';
import { ArrowRight } from 'lucide-react';

type Step = {
  label: string;
  step?: string;
};

type ProcessFlowDiagramProps = {
  steps: Step[];
  title?: string;
  className?: string;
};

export default function ProcessFlowDiagram({
  steps,
  title,
  className = '',
}: ProcessFlowDiagramProps) {
  return (
    <div
      className={`bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-card ${className}`}
    >
      {title && (
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 text-center">
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((node, i) => (
          <React.Fragment key={node.label}>
            <div className="flex flex-col items-center min-w-[72px]">
              <div className="w-10 h-10 bg-[#17448E]/10 border-2 border-[#17448E]/25 rounded-full flex items-center justify-center mb-2">
                <span className="text-xs font-bold text-primary tabular-nums">
                  {node.step ?? String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs font-semibold text-foreground text-center">
                {node.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden sm:flex items-center mb-4 text-muted-foreground">
                <div className="w-6 h-px bg-gradient-to-r from-[#17448E] to-[#CC851D]" />
                <ArrowRight size={12} className="-ml-0.5 text-[#CC851D]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
