
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PaginatedPageContent from '@/components/paginated-page-content'; 
import type { Metadata } from 'next';
import { RightSidebar } from '@/components/layout/right-sidebar';

const placeholderPostsPageN = [
  {
    slug: 'sustainable-architecture',
    title: '可持续建筑的未来',
    description: '探索环保建筑设计和绿色技术如何塑造未来的城市。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'green building',
    tags: ['建筑', '可持续'],
    publishDate: '2024-07-28',
    authorName: '用户名称',
  },
  {
    slug: 'ai-in-healthcare',
    title: '人工智能在医疗保健中的革命',
    description: '了解人工智能如何改变诊断、治疗和患者护理。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'medical technology',
    tags: ['AI', '医疗'],
    publishDate: '2024-07-30',
    authorName: '用户名称',
  },
  {
    slug: 'deep-sea-exploration',
    title: '深海探索的奥秘',
    description: '潜入海洋深处，发现未知的生物和奇观。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ocean underwater',
    tags: ['海洋', '探索'],
    publishDate: '2024-08-01',
    authorName: '用户名称',
  },
   {
    slug: 'ancient-civilizations-lost-secrets',
    title: '古代文明：失落的秘密',
    description: '揭开古代文明的神秘面纱和那些失落已久的秘密。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ancient ruins',
    tags: ['历史', '考古'],
    publishDate: '2024-08-03',
    authorName: '用户名称',
  },
  {
    slug: 'the-art-of-storytelling',
    title: '讲故事的艺术',
    description: '学习如何通过引人入胜的叙事技巧来吸引和启发听众。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'writing book',
    tags: ['创意', '写作'],
    publishDate: '2024-08-05',
    authorName: '用户名称',
  },
  {
    slug: 'cosmic-wonders-beyond-our-galaxy',
    title: '宇宙奇观：银河系之外',
    description: '探索我们银河系以外的遥远星系和宇宙现象。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'galaxy stars',
    tags: ['天文', '宇宙'],
    publishDate: '2024-08-07',
    authorName: '用户名称',
  },
];

const TOTAL_PAGES = 5; 

interface PageParams {
  params: {
    pageNumber: string;
  };
}

export default function Page({ params }: PageParams) {
  const currentPage = parseInt(params.pageNumber, 10);

  if (isNaN(currentPage) || currentPage < 1) {
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
  
  const postsForClientComponent = placeholderPostsPageN;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="lg:flex lg:gap-8">
        <main className="lg:w-2/3">
          <PaginatedPageContent
            currentPage={currentPage}
            TOTAL_PAGES={TOTAL_PAGES}
            initialPosts={postsForClientComponent}
            pageNumberString={params.pageNumber}
          />
        </main>
        <aside className="lg:w-1/3 mt-8 lg:mt-0">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
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

export async function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES -1 }, (_, i) => ({
    pageNumber: (i + 2).toString(),
  }));
}
