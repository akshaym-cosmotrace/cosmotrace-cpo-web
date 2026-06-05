'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { transition } from '@/lib/motion';

const STORAGE_KEY = 'cosmotrace-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && !localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={transition.smoothFast}
          className="fixed bottom-0 left-0 right-0 z-[100] flex flex-col gap-3 border-t border-white/10 bg-black px-4 py-3 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between sm:px-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-xs leading-relaxed text-white/90 sm:max-w-[70%] sm:pr-4">
            We use cookies to improve your experience and analyze site traffic. By continuing to use this site, you agree to our use of cookies.
          </p>
          <button
            type="button"
            onClick={accept}
            className="shrink-0 rounded-md bg-[#22c55e] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-300 ease-out hover:bg-[#16a34a]"
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
