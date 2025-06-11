
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RightSidebar } from '@/components/layout/right-sidebar';

const placeholderPosts = [
  {
    slug: 'first-post',
    title: '探索自然的奇迹',
    description: '深入探讨未受破坏的景观的壮丽之美及其保护的重要性。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'nature landscape',
    tags: ['自然', '探索'],
    publishDate: '2024-07-15',
  },
  {
    slug: 'tech-innovations-2024',
    title: '科技的未来：2024年的创新',
    description: '发现塑造我们未来的突破性技术，从人工智能的进步到可持续技术。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'technology abstract',
    tags: ['科技', '创新'],
    publishDate: '2024-07-18',
  },
  {
    slug: 'minimalist-living-guide',
    title: '极简生活指南',
    description: '通过我们的极简生活综合指南，拥抱简约，在更少的事物中寻找快乐。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'minimalist interior',
    tags: ['生活方式', '简约'],
    publishDate: '2024-07-20',
  },
   {
    slug: 'culinary-adventures',
    title: '烹饪历险：品味世界',
    description: '加入我们的美食之旅，探索来自全球的异国风味和传统美食。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'food gourmet',
    tags: ['美食', '旅行'],
    publishDate: '2024-07-22',
  },
  {
    slug: 'urban-photography-tips',
    title: '掌握城市摄影：技巧与窍门',
    description: '利用这些专家技巧，捕捉城市生活的活力精髓，拍摄令人惊叹的城市照片。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'city skyline',
    tags: ['摄影', '城市'],
    publishDate: '2024-07-24',
  },
  {
    slug: 'mindfulness-daily-life',
    title: '将正念融入日常生活',
    description: '学习实用技巧，将正念带入您的日常生活，享受更平静、更专注的生活。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'zen meditation',
    tags: ['健康', '正念'],
    publishDate: '2024-07-26',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="lg:flex lg:gap-8">
        <main className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholderPosts.map((post) => (
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
          <div className="mt-12 flex justify-center">
            <Link href="/page/2">
              <Button variant="outline">下一页</Button>
            </Link>
          </div>
        </main>
        <aside className="lg:w-1/3 mt-8 lg:mt-0">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
