
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  publishDate: string;
}

interface PaginatedPageContentProps {
  currentPage: number;
  TOTAL_PAGES: number;
  initialPosts: Post[];
  pageNumberString: string;
}

export default function PaginatedPageContent({ 
  currentPage, 
  TOTAL_PAGES, 
  initialPosts,
  pageNumberString 
}: PaginatedPageContentProps) {
  const router = useRouter();
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPopoverOpen && inputRef.current) {
      inputRef.current.focus();
      setInputValue(currentPage.toString()); 
    }
  }, [isPopoverOpen, currentPage]);

  const handleGoToPage = () => {
    const page = parseInt(inputValue, 10);
    if (isNaN(page) || page < 1 || page > TOTAL_PAGES) {
      console.error("Invalid page number entered:", inputValue);
      setInputValue(currentPage.toString()); 
      return;
    }
    setIsPopoverOpen(false);
    if (page === currentPage) return; 

    if (page === 1) {
      router.push('/');
    } else {
      router.push(`/page/${page}`);
    }
  };

  if (currentPage === 1 && pageNumberString === "1") {
      return (
        <div className="container mx-auto py-12 px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-8">这是第 1 页</h1>
            <p className="mb-4 text-lg">内容已在首页展示。</p>
            <div className="flex items-center justify-between w-full max-w-sm mx-auto mb-8">
                <div style={{width: '88px'}} /> 
                 <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger asChild>
                    <button
                      className="text-lg font-medium text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-1 py-1"
                      aria-label={`当前第 ${currentPage} 页，共 ${TOTAL_PAGES} 页, 点击修改页码`}
                    >
                      {TOTAL_PAGES} / {currentPage}页
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4" side="bottom" align="center">
                    <div className="space-y-2">
                       <p className="text-sm font-medium text-center">跳转到页面</p>
                      <div className="flex items-center space-x-2">
                        <Input
                          ref={inputRef}
                          type="number"
                          min="1"
                          max={TOTAL_PAGES}
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') handleGoToPage(); }}
                          className="w-20 h-8"
                          aria-label="输入页码"
                        />
                        <Button onClick={handleGoToPage} size="sm" className="h-8">跳转</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                {currentPage < TOTAL_PAGES ? (
                    <Link href={`/page/${nextPage}`}>
                        <Button variant="outline">下一页</Button>
                    </Link>
                ) : (
                    <div style={{width: '88px'}} />
                )}
            </div>
            <Link href="/">
                <Button variant="link">返回首页</Button>
            </Link>
        </div>
      );
  }

  const displayPosts = (currentPage > 1 && currentPage <= TOTAL_PAGES) ? initialPosts : [];


  return (
    <div className="container mx-auto py-8 px-4 md:px-6"> {/* This container is fine, the grid inside is what matters for card listing */}
      
      {displayPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8"> {/* Changed md:grid-cols-2 to grid-cols-1 */}
          {displayPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              imageHint={post.imageHint}
              slug={post.slug} 
              tags={post.tags}
              publishDate={post.publishDate}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground my-12">
          {currentPage > TOTAL_PAGES ? "没有更多文章了。" : `第 ${currentPage} 页没有文章。`}
        </p>
      )}
      
      <div className="mt-12 flex items-center justify-between w-full max-w-sm mx-auto">
        {currentPage > 1 ? (
          <Link href={currentPage === 2 ? "/" : `/page/${prevPage}`}>
            <Button variant="outline">上一页</Button>
          </Link>
        ) : (
          <div style={{width: '88px'}} /> 
        )}
        
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
             <button
              className="text-lg font-medium text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-1 py-1"
              aria-label={`当前第 ${currentPage} 页，共 ${TOTAL_PAGES} 页, 点击修改页码`}
            >
              {TOTAL_PAGES} / {currentPage}页
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4" side="bottom" align="center">
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">跳转到页面</p>
              <div className="flex items-center space-x-2">
                <Input
                  ref={inputRef}
                  type="number"
                  min="1"
                  max={TOTAL_PAGES}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleGoToPage(); }}
                  className="w-20 h-8"
                  aria-label="输入页码"
                />
                <Button onClick={handleGoToPage} size="sm" className="h-8">跳转</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {currentPage < TOTAL_PAGES ? (
             <Link href={`/page/${nextPage}`}>
                <Button variant="outline">下一页</Button>
            </Link>
        ) : (
          <div style={{width: '88px'}} /> 
        )}
      </div>
       <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="link">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
