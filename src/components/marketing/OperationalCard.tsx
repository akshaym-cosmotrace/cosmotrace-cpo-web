import React from 'react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type OperationalCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights?: string[];
  href?: string;
  accent?: 'navy' | 'gold' | 'teal';
};

const accentMap = {
  navy: 'text-primary',
  gold: 'text-[#CC851D]',
  teal: 'text-primary',
};

export default function OperationalCard({
  icon: Icon,
  title,
  description,
  highlights,
  href,
  accent = 'navy',
}: OperationalCardProps) {
  const content = (
    <>
      <div className="w-11 h-11 icon-accent-bg rounded-xl flex items-center justify-center mb-4 border border-[#17448E]/10">
        <Icon size={22} className={accentMap[accent]} />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-2 leading-snug" style={{ fontWeight: 700 }}>
        {title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{description}</p>
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {highlights.map((h) => (
            <span
              key={h}
              className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-medium"
            >
              {h}
            </span>
          ))}
        </div>
      )}
      {href && (
        <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-accent transition-colors">
          Learn more
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      )}
    </>
  );

  const className =
    'group bg-white border border-border rounded-2xl p-6 card-hover shadow-card accent-border-l block h-full';

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
