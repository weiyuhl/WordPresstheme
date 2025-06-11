
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  slug: string;
  tags: string[];
  publishDate: string;
}

export function BlogPostCard({ title, description, imageUrl, imageHint, slug, tags, publishDate }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Link href={`/blog/${slug}`} aria-label={`阅读更多关于 ${title} 的内容`}>
          <div className="aspect-[16/9] relative w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={imageHint}
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors duration-200 ease-in-out">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-6 pt-2 pb-6 flex flex-col items-start w-full text-sm"> {/* Changed pb-2 to pb-6 */}
        <div className="flex items-center justify-between w-full mb-0">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{publishDate}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

