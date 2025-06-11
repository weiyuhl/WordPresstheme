
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card'; // 导入 BlogPostCard

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


export default function PaginatedPage({ params }: PageParams) {
  const currentPage = parseInt(params.pageNumber, 10);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // 根据页码选择文章数据 (简单示例，真实应用中应从API获取)
  // For this example, we'll show placeholderPostsPageN for any page >= 2
  // And no posts for page 1 on this dynamic route, as it's handled by src/app/page.tsx for its content
  const postsToShow = currentPage > 1 ? placeholderPostsPageN : [];

  if (currentPage === 1 && params.pageNumber === "1") {
      return (
        <div className="container mx-auto py-12 px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-8">这是第 1 页</h1>
            <p className="mb-4 text-lg">内容已在首页展示。</p>
            <div className="flex items-center justify-between w-full max-w-sm mx-auto mb-8">
                <div style={{width: '88px'}} /> {/* Placeholder for Previous button width to balance layout */}
                <span className="text-lg font-medium text-muted-foreground">
                  第 {currentPage} 页
                </span>
                <Link href={`/page/${nextPage}`}>
                    <Button variant="outline">下一页</Button>
                </Link>
            </div>
            <Link href="/">
                <Button variant="link">返回首页</Button>
            </Link>
        </div>
      );
  }


  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-foreground">
        文章列表 - 第 {currentPage} 页
      </h2>
      
      {postsToShow.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
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
          { currentPage > 1 ? `第 ${currentPage} 页没有更多文章了。` : "" }
        </p>
      )}
      
      <div className="mt-12 flex items-center justify-between w-full max-w-sm mx-auto">
        {currentPage > 1 ? (
          <Link href={currentPage === 2 ? "/" : `/page/${prevPage}`}>
            <Button variant="outline">上一页</Button>
          </Link>
        ) : (
          <div style={{width: '88px'}} /> /* Placeholder for Previous button to balance layout */
        )}
        
        <span className="text-lg font-medium text-muted-foreground">
          第 {currentPage} 页
        </span>

        {postsToShow.length > 0 ? (
             <Link href={`/page/${nextPage}`}>
                <Button variant="outline">下一页</Button>
            </Link>
        ) : (
          <div style={{width: '88px'}} /> /* Placeholder for Next button to balance layout */
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
  return {
    title: `第 ${params.pageNumber} 页 - 网站名称`,
    description: `博客文章列表第 ${params.pageNumber} 页。`,
  };
}
