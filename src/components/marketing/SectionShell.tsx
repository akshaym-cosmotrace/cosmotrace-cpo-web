import React from 'react';

type SectionShellProps = {
  children: React.ReactNode;
  id?: string;
  variant?: 'white' | 'muted' | 'blue';
  grid?: boolean;
  className?: string;
};

export default function SectionShell({
  children,
  id,
  variant = 'white',
  grid = false,
  className = '',
}: SectionShellProps) {
  const bg =
    variant === 'muted' ? 'section-muted' : variant === 'blue' ? 'section-blue' : 'section-white';

  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${bg} ${grid ? 'industrial-grid' : ''} ${className}`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        {children}
      </div>
    </section>
  );
}
