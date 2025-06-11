
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageParams {
  params: {
    pageNumber: string;
  };
}

export default function PaginatedPage({ params }: PageParams) {
  const currentPage = parseInt(params.pageNumber, 10);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <h1 className="text-3xl font-bold mb-8">这是第 {currentPage} 页</h1>
      <p className="mb-8 text-lg">这里通常会显示第 {currentPage} 页的文章列表。</p>
      
      <div className="flex justify-center space-x-4">
        {currentPage > 1 && (
          <Link href={currentPage === 2 ? "/" : `/page/${prevPage}`}>
            <Button variant="outline">上一页</Button>
          </Link>
        )}
        <Link href={`/page/${nextPage}`}>
          <Button variant="outline">下一页 ({nextPage})</Button>
        </Link>
      </div>
       <div className="mt-8">
        <Link href="/">
          <Button variant="link">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}

// Optional: Generate static paths if you know the number of pages beforehand
// export async function generateStaticParams() {
//   // Example: For 5 pages
//   // return Array.from({ length: 5 }, (_, i) => ({
//   //   pageNumber: (i + 1).toString(),
//   // }));
//   return []; // Return empty array if you don't want to pre-render any specific pages
// }

export async function generateMetadata({ params }: PageParams) {
  return {
    title: `第 ${params.pageNumber} 页 - 网站名称`,
    description: `博客文章列表第 ${params.pageNumber} 页。`,
  };
}
