'use client';

import React, { useEffect, useState } from 'react';

const HERO_MEDIA_CANDIDATES = ['/hero/ambient.webp', '/hero/ambient.gif'] as const;

/**
 * Soft motion behind hero-style sections: CSS gradient drift + optional
 * `/hero/ambient.webp` or `/hero/ambient.gif` (only rendered if the file loads).
 */
export default function HeroAmbientBackground() {
  const [mediaSrc, setMediaSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    function probeUrl(src: string): Promise<boolean> {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    }

    void (async () => {
      for (const src of HERO_MEDIA_CANDIDATES) {
        if (cancelled) return;
        if (await probeUrl(src)) {
          if (!cancelled) setMediaSrc(src);
          return;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="hero-bg-stack pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="hero-bg-mesh-a" />
      <div className="hero-bg-mesh-b" />
      <div className="hero-bg-mesh-c" />
      <div className="hero-bg-vignette" />
      {mediaSrc ? (
        <img
          src={mediaSrc}
          alt=""
          className="hero-bg-user-media absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
}
