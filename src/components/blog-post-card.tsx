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
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  slug: string;
}

export function BlogPostCard({ title, description, imageUrl, imageHint, slug }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Link href={`/blog/${slug}`} aria-label={`阅读更多关于 ${title} 的内容`}>
          <div className="aspect-[16/9] relative w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={imageHint}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
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
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent-foreground transition-colors duration-200 ease-in-out">
          <Link href={`/blog/${slug}`}>
            阅读更多 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
