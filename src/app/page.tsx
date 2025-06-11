import { BlogPostCard } from '@/components/blog-post-card';

const placeholderPosts = [
  {
    slug: 'first-post',
    title: '探索自然的奇迹',
    description: '深入探讨未受破坏的景观的壮丽之美及其保护的重要性。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'nature landscape',
  },
  {
    slug: 'tech-innovations-2024',
    title: '科技的未来：2024年的创新',
    description: '发现塑造我们未来的突破性技术，从人工智能的进步到可持续技术。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'technology abstract',
  },
  {
    slug: 'minimalist-living-guide',
    title: '极简生活指南',
    description: '通过我们的极简生活综合指南，拥抱简约，在更少的事物中寻找快乐。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'minimalist interior',
  },
   {
    slug: 'culinary-adventures',
    title: '烹饪历险：品味世界',
    description: '加入我们的美食之旅，探索来自全球的异国风味和传统美食。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'food gourmet',
  },
  {
    slug: 'urban-photography-tips',
    title: '掌握城市摄影：技巧与窍门',
    description: '利用这些专家技巧，捕捉城市生活的活力精髓，拍摄令人惊叹的城市照片。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'city skyline',
  },
  {
    slug: 'mindfulness-daily-life',
    title: '将正念融入日常生活',
    description: '学习实用技巧，将正念带入您的日常生活，享受更平静、更专注的生活。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'zen meditation',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-foreground">
        最新文章
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            imageHint={post.imageHint}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
