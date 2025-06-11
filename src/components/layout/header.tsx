import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto h-16 grid grid-cols-3 items-center px-4 md:px-6">
        <div className="justify-self-start">
          <Button variant="ghost" size="icon" aria-label="Open menu" className="transition-colors duration-200 ease-in-out hover:text-accent-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="justify-self-center">
          <Link href="/" className="text-2xl md:text-3xl font-headline font-semibold tracking-tight hover:text-primary transition-colors duration-200 ease-in-out">
            Boke Navi
          </Link>
        </div>
        
        <div className="justify-self-end">
          <Button variant="ghost" size="icon" aria-label="Search" className="transition-colors duration-200 ease-in-out hover:text-accent-foreground">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
