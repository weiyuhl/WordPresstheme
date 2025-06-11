
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Post {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  publishDate: string;
  content?: string; // Optional: for more detailed content later
}

// Combine placeholder posts from homepage and paginated pages
// In a real app, this would come from a database or CMS
const placeholderPostsHome = [
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

const allPlaceholderPosts: Post[] = [...placeholderPostsHome, ...placeholderPostsPageN];

async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return allPlaceholderPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: '文章未找到',
      description: '抱歉，无法找到您请求的文章。',
    };
  }
  return {
    title: `${post.title} - 网站名称`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return allPlaceholderPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto py-12 px-4 md:px-6 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold mb-3 text-center">{post.title}</h1>
        <div className="text-center text-muted-foreground text-sm mb-4">
          <span>发布于 {post.publishDate}</span>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="aspect-video relative w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={post.imageHint}
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground">
        <p>{post.description}</p>
        {/* Placeholder for more content if available */}
        {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <Button variant="outline">返回首页</Button>
        </Link>
      </div>
    </article>
  );
}
