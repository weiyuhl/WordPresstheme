
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  slug: string;
  tags: string[];
  publishDate: string; // Prop kept for data consistency, but not displayed here
  authorName?: string; // Prop kept for data consistency, but not displayed here
}

export function BlogPostCard({ title, description, imageUrl, imageHint, slug, tags }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image Container */}
      <div className="relative h-48 md:w-1/3 lg:w-2/5 md:shrink-0 md:aspect-[4/3]"> {/* Mobile: fixed h-48. Desktop: use aspect ratio 4/3 */}
        <Link href={`/blog/${slug}`} aria-label={`阅读更多关于 ${title} 的内容`} className="block w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 30vw"
            data-ai-hint={imageHint}
            className="object-cover" 
          />
        </Link>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <CardTitle className="font-headline text-xl lg:text-2xl mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors duration-200 ease-in-out">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3 md:line-clamp-4 lg:line-clamp-5 mb-4 flex-grow">
          {description}
        </CardDescription>
        
        <div className="mt-auto pt-4 pb-6"> {/* Footer section for tags. Increased pb-6 */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1"> {/* Tags */}
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
