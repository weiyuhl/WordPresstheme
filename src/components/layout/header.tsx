'use client';

import React from 'react';
import { Menu, Search, X, Send, Twitter, Github, Rss, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetPortal,
} from "@/components/ui/sheet";

const mainNavLinks = [
  { href: '/category/php', label: 'PHP' },
  { href: '/category/swoole', label: 'Swoole' },
  { href: '/category/wordpress', label: 'WordPress' },
  { href: '/category/notes', label: '技术笔记' },
  { href: '/category/resources', label: '实用资源' },
  { href: '/category/explore', label: '随便看看' },
];

const footerNavLinks = [
  { href: '/guestbook', label: '留言簿' },
  { href: '/benefits', label: '福利专区' },
  { href: '/sitelog', label: '网站记录' },
  { href: '/opensource', label: '开源项目' },
];

const socialLinks = [
  { href: 'https://weibo.com', label: '微博', icon: null, text: '微博' },
  { href: 'https://zhihu.com', label: '知乎', icon: null, text: '知乎' },
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'https://github.com', label: 'GitHub', icon: Github },
  { href: '#', label: 'RSS', icon: Rss },
  { href: 'mailto:info@example.com', label: 'Email', icon: Mail },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-[51] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto h-16 grid grid-cols-3 items-center px-4 md:px-6">
        <div className="justify-self-start">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={isSheetOpen ? "关闭菜单" : "打开菜单"} className="transition-colors duration-200 ease-in-out hover:text-accent-foreground">
                {isSheetOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetPortal>
              {/* SheetOverlay removed to prevent dimming */}
              <SheetContent
                side="top"
                className="flex flex-col p-0 bg-background text-foreground [--tw-enter-translate-y:-50px] [--tw-exit-translate-y:-50px] data-[state=open]:duration-300 data-[state=closed]:duration-200 custom-sheet-no-internal-close"
                style={{ top: '4rem', height: '60vh' }}
                onCloseAutoFocus={(event) => event.preventDefault()}
                onOpenAutoFocus={(event) => event.preventDefault()}
              >
                <SheetTitle className="sr-only">导航菜单</SheetTitle>
                
                <nav className="flex-grow flex flex-col items-center pt-2 pb-8 space-y-6 overflow-y-auto">
                  {mainNavLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="p-6 border-t">
                  <div className="flex justify-center items-center space-x-3 mb-6 text-sm text-muted-foreground">
                    {footerNavLinks.map((link, index) => (
                      <React.Fragment key={link.href}>
                        <SheetClose asChild>
                          <Link href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </SheetClose>
                        {index < footerNavLinks.length - 1 && <span>|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <SheetClose asChild key={social.label}>
                        <Link href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                          {social.icon ? <social.icon className="h-6 w-6" /> : <span className="text-sm">{social.text}</span>}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        </div>

        <div className="justify-self-center">
          <Link href="/" className="text-2xl md:text-3xl font-headline font-semibold tracking-tight hover:text-primary transition-colors duration-200 ease-in-out">
            博客导航
          </Link>
        </div>

        <div className="justify-self-end">
           <Button variant="ghost" size="icon" aria-label="搜索" className="transition-colors duration-200 ease-in-out hover:text-accent-foreground md:flex hidden">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
