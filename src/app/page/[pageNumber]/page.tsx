
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface PageParams {
  params: {
    pageNumber: string;
  };
}

// 为分页页面创建不同的模拟文章数据
const placeholderPostsPageN = [
  {
    slug: 'sustainable-architecture',
    title: '可持续建筑的未来',
    description: '探索环保建筑设计和绿色技术如何塑造未来的城市。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'green building',
    tags: ['建筑', '可持续'],
    publishDate: '2024-07-28',
  },
  {
    slug: 'ai-in-healthcare',
    title: '人工智能在医疗保健中的革命',
    description: '了解人工智能如何改变诊断、治疗和患者护理。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'medical technology',
    tags: ['AI', '医疗'],
    publishDate: '2024-07-30',
  },
  {
    slug: 'deep-sea-exploration',
    title: '深海探索的奥秘',
    description: '潜入海洋深处，发现未知的生物和奇观。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ocean underwater',
    tags: ['海洋', '探索'],
    publishDate: '2024-08-01',
  },
   {
    slug: 'ancient-civilizations-lost-secrets',
    title: '古代文明：失落的秘密',
    description: '揭开古代文明的神秘面纱和那些失落已久的秘密。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ancient ruins',
    tags: ['历史', '考古'],
    publishDate: '2024-08-03',
  },
  {
    slug: 'the-art-of-storytelling',
    title: '讲故事的艺术',
    description: '学习如何通过引人入胜的叙事技巧来吸引和启发听众。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'writing book',
    tags: ['创意', '写作'],
    publishDate: '2024-08-05',
  },
  {
    slug: 'cosmic-wonders-beyond-our-galaxy',
    title: '宇宙奇观：银河系之外',
    description: '探索我们银河系以外的遥远星系和宇宙现象。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'galaxy stars',
    tags: ['天文', '宇宙'],
    publishDate: '2024-08-07',
  },
];

const TOTAL_PAGES = 5; // 定义总页数

export default function PaginatedPage({ params }: PageParams) {
  const router = useRouter();
  const currentPage = parseInt(params.pageNumber, 10);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPopoverOpen && inputRef.current) {
      inputRef.current.focus();
      setInputValue(currentPage.toString()); // Pre-fill with current page
    }
  }, [isPopoverOpen, currentPage]);

  const handleGoToPage = () => {
    const page = parseInt(inputValue, 10);
    if (isNaN(page) || page < 1 || page > TOTAL_PAGES) {
      // Basic error handling: clear input or show alert/toast in a real app
      console.error("Invalid page number entered:", inputValue);
      setInputValue(currentPage.toString()); // Reset to current page on error
      return;
    }
    setIsPopoverOpen(false);
    if (page === currentPage) return; // No need to navigate if it's the same page

    if (page === 1) {
      router.push('/');
    } else {
      router.push(`/page/${page}`);
    }
  };

  if (isNaN(currentPage) || currentPage < 1) {
     // This case should ideally be handled by Next.js routing or a not-found page
     // For robustness, redirect or show error if current page is invalid
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-8">无效的页码</h1>
            <p className="mb-4 text-lg">您请求的页面不存在或页码无效。</p>
            <Link href="/">
                <Button variant="link">返回首页</Button>
            </Link>
        </div>
    );
  }

  if (currentPage === 1 && params.pageNumber === "1") {
      // Special handling for page 1 directly accessed via /page/1
      // Although typical navigation would go to / for page 1
      return (
        <div className="container mx-auto py-12 px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-8">这是第 1 页</h1>
            <p className="mb-4 text-lg">内容已在首页展示。</p>
            <div className="flex items-center justify-between w-full max-w-sm mx-auto mb-8">
                <div style={{width: '88px'}} /> {/* Placeholder for Previous button width */}
                 <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger asChild>
                    <button
                      className="text-lg font-medium text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-1 py-1"
                      aria-label={`当前第 ${currentPage} 页，共 ${TOTAL_PAGES} 页, 点击修改页码`}
                    >
                      {TOTAL_PAGES} / {currentPage}
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

  const displayPosts = (currentPage > 1 && currentPage <= TOTAL_PAGES) ? placeholderPostsPageN : [];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-foreground">
        文章列表 - 第 {currentPage} 页
      </h2>
      
      {displayPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              imageHint={post.imageHint}
              slug={`/blog/${post.slug}`} 
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
              {TOTAL_PAGES} / {currentPage}
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

export async function generateMetadata({ params }: PageParams) {
  const pageNumber = parseInt(params.pageNumber, 10);
  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > TOTAL_PAGES) {
    return {
      title: '无效页码 - 网站名称',
      description: '请求的页面不存在。',
    };
  }
  return {
    title: `第 ${pageNumber} 页 - 网站名称`,
    description: `博客文章列表第 ${pageNumber} 页。`,
  };
}

// Helper to generate static paths for pre-rendering if needed
export async function generateStaticParams() {
  // Generate params for pages from 2 to TOTAL_PAGES
  // Page 1 is handled by src/app/page.tsx
  return Array.from({ length: TOTAL_PAGES -1 }, (_, i) => ({
    pageNumber: (i + 2).toString(),
  }));
}
