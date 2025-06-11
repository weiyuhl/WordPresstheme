import { BlogPostCard } from '@/components/blog-post-card';

const placeholderPosts = [
  {
    slug: 'first-post',
    title: 'Exploring the Wonders of Nature',
    description: 'A deep dive into the breathtaking beauty of untouched landscapes and the importance of conservation.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'nature landscape',
  },
  {
    slug: 'tech-innovations-2024',
    title: 'The Future of Technology: Innovations in 2024',
    description: 'Discover the groundbreaking technologies shaping our future, from AI advancements to sustainable tech.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'technology abstract',
  },
  {
    slug: 'minimalist-living-guide',
    title: 'A Guide to Minimalist Living',
    description: 'Embrace simplicity and find joy in less with our comprehensive guide to minimalist living.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'minimalist interior',
  },
   {
    slug: 'culinary-adventures',
    title: 'Culinary Adventures: A Taste of the World',
    description: 'Join us on a gastronomic journey exploring exotic flavors and traditional cuisines from around the globe.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'food gourmet',
  },
  {
    slug: 'urban-photography-tips',
    title: 'Mastering Urban Photography: Tips and Tricks',
    description: 'Capture the vibrant essence of city life with these expert tips for stunning urban photography.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'city skyline',
  },
  {
    slug: 'mindfulness-daily-life',
    title: 'Incorporating Mindfulness into Daily Life',
    description: 'Learn practical techniques to bring mindfulness into your everyday routine for a calmer, more focused life.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'zen meditation',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-foreground">
        Latest Posts
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
