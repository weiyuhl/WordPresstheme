
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { AuthorCard } from '@/components/blog/author-card';
import { CommentSection } from '@/components/blog/comment-section';

interface Post {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  categories?: string[]; // 新增分类字段
  publishDate: string;
  content?: string;
}

const placeholderPostsHome: Post[] = [
  {
    slug: 'first-post',
    title: '探索自然的奇迹',
    description: '深入探讨未受破坏的景观的壮丽之美及其保护的重要性。',
    content: `
      <p>深入探讨未受破坏的景观的壮丽之美及其保护的重要性。</p>
      <h2 class="text-2xl font-semibold my-4">自然的呼唤</h2>
      <p>地球上的自然奇观，从巍峨的山脉到深邃的海洋，每一处都蕴藏着独特的生态价值和无与伦比的美学魅力。这些景观不仅仅是视觉上的享受，更是地球生态系统不可或缺的一部分。它们调节气候，净化水源，为无数物种提供栖息地。</p>
      <h3 class="text-xl font-semibold my-3">为何保护至关重要？</h3>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li><strong>维持生物多样性：</strong> 未受破坏的自然区域是珍稀动植物的家园，保护它们就是保护我们这个星球的生物多样性。</li>
        <li><strong>科学研究的宝库：</strong> 自然景观为科学家提供了研究地球历史、气候变化和生命演化的天然实验室。</li>
        <li><strong>精神与文化的寄托：</strong> 许多文化都与特定的自然景观紧密相连，这些地方是人们精神寄托的源泉。</li>
        <li><strong>可持续发展的基石：</strong> 通过生态旅游等方式，自然景观可以为当地社区带来经济收益，实现人与自然的和谐共处。</li>
      </ul>
      <p>面对日益严峻的环境挑战，我们每个人都有责任行动起来，通过减少污染、支持环保组织、倡导绿色生活等方式，共同守护这些自然的馈赠，为子孙后代留下一个更加美丽和健康的世界。</p>
      <figure class="my-6 text-center">
        <img src="https://placehold.co/600x350.png" data-ai-hint="forest waterfall" alt="森林中的瀑布" class="rounded-md shadow-md mx-auto" />
        <figcaption class="text-sm text-muted-foreground mt-2">宁静的森林瀑布，大自然的杰作。</figcaption>
      </figure>
      <p>让我们携手努力，确保这些自然的奇迹能够永续存在。</p>
    `,
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'nature landscape',
    tags: ['自然', '探索'],
    categories: ['自然探索', '环境保护'],
    publishDate: '2024-07-15',
  },
  {
    slug: 'tech-innovations-2024',
    title: '科技的未来：2024年的创新',
    description: '发现塑造我们未来的突破性技术，从人工智能的进步到可持续技术。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'technology abstract',
    tags: ['科技', '创新'],
    categories: ['前沿科技', '技术趋势'],
    publishDate: '2024-07-18',
  },
  {
    slug: 'minimalist-living-guide',
    title: '极简生活指南',
    description: '通过我们的极简生活综合指南，拥抱简约，在更少的事物中寻找快乐。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'minimalist interior',
    tags: ['生活方式', '简约'],
    categories: ['生活哲学', '家居整理'],
    publishDate: '2024-07-20',
  },
   {
    slug: 'culinary-adventures',
    title: '烹饪历险：品味世界',
    description: '加入我们的美食之旅，探索来自全球的异国风味和传统美食。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'food gourmet',
    tags: ['美食', '旅行'],
    categories: ['环球美食', '饮食文化'],
    publishDate: '2024-07-22',
  },
  {
    slug: 'urban-photography-tips',
    title: '掌握城市摄影：技巧与窍门',
    description: '利用这些专家技巧，捕捉城市生活的活力精髓，拍摄令人惊叹的城市照片。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'city skyline',
    tags: ['摄影', '城市'],
    categories: ['摄影技巧', '城市探索'],
    publishDate: '2024-07-24',
  },
  {
    slug: 'mindfulness-daily-life',
    title: '将正念融入日常生活',
    description: '学习实用技巧，将正念带入您的日常生活，享受更平静、更专注的生活。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'zen meditation',
    tags: ['健康', '正念'],
    categories: ['身心健康', '生活方式'],
    publishDate: '2024-07-26',
  },
];

const placeholderPostsPageN: Post[] = [
  {
    slug: 'sustainable-architecture',
    title: '可持续建筑的未来',
    description: '探索环保建筑设计和绿色技术如何塑造未来的城市。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'green building',
    tags: ['建筑', '可持续'],
    categories: ['绿色建筑', '城市发展'],
    publishDate: '2024-07-28',
  },
  {
    slug: 'ai-in-healthcare',
    title: '人工智能在医疗保健中的革命',
    description: '了解人工智能如何改变诊断、治疗和患者护理。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'medical technology',
    tags: ['AI', '医疗'],
    categories: ['智慧医疗', '人工智能'],
    publishDate: '2024-07-30',
  },
  {
    slug: 'deep-sea-exploration',
    title: '深海探索的奥秘',
    description: '潜入海洋深处，发现未知的生物和奇观。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ocean underwater',
    tags: ['海洋', '探索'],
    categories: ['海洋科学', '探索发现'],
    publishDate: '2024-08-01',
  },
   {
    slug: 'ancient-civilizations-lost-secrets',
    title: '古代文明：失落的秘密',
    description: '揭开古代文明的神秘面纱和那些失落已久的秘密。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'ancient ruins',
    tags: ['历史', '考古'],
    categories: ['历史揭秘', '考古发现'],
    publishDate: '2024-08-03',
  },
  {
    slug: 'the-art-of-storytelling',
    title: '讲故事的艺术',
    description: '学习如何通过引人入胜的叙事技巧来吸引和启发听众。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'writing book',
    tags: ['创意', '写作'],
    categories: ['写作技巧', '创意表达'],
    publishDate: '2024-08-05',
  },
  {
    slug: 'cosmic-wonders-beyond-our-galaxy',
    title: '宇宙奇观：银河系之外',
    description: '探索我们银河系以外的遥远星系和宇宙现象。',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'galaxy stars',
    tags: ['天文', '宇宙'],
    categories: ['宇宙探索', '天文学'],
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
        <div className="text-center text-muted-foreground text-sm mb-6"> {/* Increased bottom margin */}
          <span>发布于 {post.publishDate}</span>
          {post.categories && post.categories.length > 0 && (
            <>
              <span className="mx-2">|</span>
              <span>
                分类：
                {post.categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <Link href={`/category/${category.toLowerCase()}`} className="hover:text-primary transition-colors">
                      {category}
                    </Link>
                    {index < post.categories!.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </span>
            </>
          )}
        </div>
      </header>

      <div className="aspect-video relative w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          data-ai-hint={post.imageHint}
          priority={true} 
        />
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground">
        <p>{post.description}</p>
        {post.content && <p className="text-xs text-muted-foreground italic">(调试信息：此文章包含额外的 'content' 字段，但当前未渲染以排查问题。)</p>}
      </div>
      
      <AuthorCard />
      <CommentSection />

      <div className="mt-12 text-center">
        <Link href="/">
          <Button variant="outline">返回首页</Button>
        </Link>
      </div>
    </article>
  );
}
