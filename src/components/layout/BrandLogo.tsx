import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LOGO_SRC = '/assets/images/cosmotrace-logo.png';

type BrandLogoProps = {
  showTagline?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
};

/**
 * Brand lockup — logo at readable size without the old ring/frame box.
 * Logo file includes the COSMOTRACE wordmark (no duplicate text beside it).
 */
export default function BrandLogo({
  showTagline = true,
  theme = 'light',
  className = '',
}: BrandLogoProps) {
  const taglineClass =
    theme === 'dark'
      ? 'text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400'
      : 'text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground';

  const dividerClass = theme === 'dark' ? 'border-white/15' : 'border-[#17448E]/15';

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 sm:gap-4 flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-md ${className}`}
    >
      <span className="relative block h-9 sm:h-[2.65rem] w-[8.5rem] sm:w-[9.75rem] shrink-0">
        <Image
          src={LOGO_SRC}
          alt="CosmoTrace"
          fill
          priority
          sizes="(max-width: 640px) 136px, 156px"
          className="object-contain object-left"
        />
      </span>

      {showTagline && (
        <span className={`hidden md:flex flex-col justify-center border-l pl-3 lg:pl-4 ${dividerClass}`}>
          <span className={taglineClass}>CPO · Operations</span>
          <span
            className={`text-[9px] mt-0.5 uppercase tracking-wider ${
              theme === 'dark' ? 'text-slate-500' : 'text-muted-foreground/80'
            }`}
          >
            UAE & GCC
          </span>
        </span>
      )}
    </Link>
  );
}
