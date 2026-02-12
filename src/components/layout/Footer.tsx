'use client';

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto retro-panel-soft text-center px-6 py-5">
        <p className="text-sm sm:text-base font-semibold text-[var(--secondary-foreground)]">
          {currentYear} Abdullah Al Noman. Crafted with a retro web spirit.
        </p>
      </div>
    </footer>
  );
}
