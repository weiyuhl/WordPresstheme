
'use client';

import React from 'react';
import { Menu, Search, X, Rss, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetPortal,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Input } from '@/components/ui/input';

const WeiboIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.28-6.812c-.23-.49-.71-.83-1.29-.83h-1.5c-.51 0-.96.3-1.18.75l-.66 1.375c-.15.31-.47.51-.83.51h-1.64c-.36 0-.68-.2-.83-.51l-.66-1.375c-.22-.45-.67-.75-1.18-.75h-1.5c-.58 0-1.06.34-1.29.83-.23.49-.15 1.08.2 1.48l2.75 3.06c.24.27.59.43.96.43h3.2c.37 0 .72-.16.96-.43l2.75-3.06c.35-.4.43-.99.2-1.48zM15.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
  </svg>
);

const ZhihuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.82 6.44c-.63-1.28-1.87-2.12-3.28-2.12h-1.5c-1.1 0-2.08.83-2.34 1.9L12 11.78l-1.7-5.56c-.26-1.07-1.24-1.9-2.34-1.9h-1.5c-1.41 0-2.65.84-3.28 2.12L2 10.1v.12L4.68 18h2.6l-1.5-5.76L8.08 6.8h.8l-2.16 7.2h2.56l2.72-9.12 2.72 9.12h2.56L14.4 6.8h.8l2.28 5.52L15.96 18h2.6l2.68-7.78v-.12L20.82 6.44z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.336-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.547 9.547 0 0112 6.836c.85.004 1.705.114 2.505.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.027 1.59 1.027 2.682 0 3.842-2.337 4.687-4.565 4.935.358.307.679.917.679 1.85 0 1.336-.012 2.415-.012 2.741 0 .268.18.578.688.48C19.138 20.162 22 16.417 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

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
  { href: 'https://weibo.com', label: '微博', icon: WeiboIcon, text: '微博' },
  { href: 'https://zhihu.com', label: '知乎', icon: ZhihuIcon, text: '知乎' },
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'https://github.com', label: 'GitHub', icon: GithubIcon },
  { href: '#', label: 'RSS', icon: Rss },
  { href: 'mailto:info@example.com', label: 'Email', icon: Mail },
];

export function Header() {
  const [isMenuSheetOpen, setIsMenuSheetOpen] = React.useState(false);
  const [isSearchSheetOpen, setIsSearchSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-[51] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto h-16 grid grid-cols-3 items-center px-4 md:px-6">
        <div className="justify-self-start">
          <Sheet open={isMenuSheetOpen} onOpenChange={setIsMenuSheetOpen}>
            {!isSearchSheetOpen && (
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={isMenuSheetOpen ? "关闭菜单" : "打开菜单"} className="transition-colors duration-200 ease-in-out hover:text-accent-foreground">
                  {isMenuSheetOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
            )}
            <SheetPortal>
              <SheetPrimitive.Content
                side="top"
                className={cn(
                  "fixed z-50 gap-4 bg-background shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
                  "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                  "flex flex-col p-0 text-foreground custom-sheet-no-internal-close"
                )}
                style={{ top: '4rem', height: '60vh' }}
              >
                <SheetTitle className="sr-only">网站名称</SheetTitle>
                
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
                           {social.icon ? React.createElement(social.icon) : <span className="text-sm">{social.text}</span>}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </SheetPrimitive.Content>
            </SheetPortal>
          </Sheet>
        </div>

        <div className="justify-self-center">
          <Link href="/" className="text-2xl md:text-3xl font-headline font-semibold tracking-tight hover:text-primary transition-colors duration-200 ease-in-out">
            网站名称
          </Link>
        </div>

        <div className="justify-self-end">
           <Sheet open={isSearchSheetOpen} onOpenChange={setIsSearchSheetOpen}>
            {!isMenuSheetOpen && (
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={isSearchSheetOpen ? "关闭搜索" : "打开搜索"} className="transition-colors duration-200 ease-in-out hover:text-accent-foreground">
                  {isSearchSheetOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
            )}
            <SheetPortal>
              <SheetPrimitive.Content
                side="top"
                className={cn(
                  "fixed z-50 gap-4 bg-background shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
                  "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                  "flex flex-col p-6 text-foreground custom-sheet-no-internal-close"
                )}
                style={{ top: '4rem', height: '40vh' }}
              >
                <SheetTitle className="sr-only">搜索内容</SheetTitle>
                <div className="flex flex-col space-y-4 h-full items-center justify-center">
                  <Input 
                    type="search" 
                    placeholder="请输入搜索关键词..." 
                    className="w-full max-w-md text-base"
                  />
                  <p className="text-sm text-muted-foreground">输入关键词后按 Enter 键搜索</p>
                </div>
              </SheetPrimitive.Content>
            </SheetPortal>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
