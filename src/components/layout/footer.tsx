
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    { href: '#', label: '友链' },
    { href: '#', label: '留言' },
    { href: '#', label: '订阅' },
    { href: '#', label: '打赏' },
    { href: '#', label: '举报与反馈' },
  ];

  return (
    <footer className="py-6 mt-auto border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
        <div className="flex flex-col items-center space-y-2">
          <span>
            © {currentYear ? currentYear : new Date().getFullYear()} 网站名称. All Rights Reserved.
          </span>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <span>陕ICP备16002024号</span>
            <span>陕公网安备 61032602000128号</span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4">
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full" aria-hidden="true"></span>
            <span>所有业务正常</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

