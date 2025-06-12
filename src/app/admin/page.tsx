
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '后台管理 - 网站名称',
  description: '网站后台管理区域。',
};

export default function AdminPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <h1 className="text-3xl font-headline font-bold mb-8">后台管理页面</h1>
      <p className="mb-6 text-lg">
        这里是您的网站后台管理区域。
      </p>
      <p className="mb-8 text-muted-foreground">
        您可以在此基础上构建您的管理功能。
      </p>
      <Link href="/">
        <Button variant="outline">返回首页</Button>
      </Link>
    </div>
  );
}
