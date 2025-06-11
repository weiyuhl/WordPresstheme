
'use client';

import React, { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 mt-auto border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
        <div className="space-y-1 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
          <span>陕ICP备16002024号</span>
          <span>陕公网安备 61032602000128号</span>
        </div>
      </div>
    </footer>
  );
}
