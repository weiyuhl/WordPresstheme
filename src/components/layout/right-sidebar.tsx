
'use client';

import React from 'react';

export function RightSidebar() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg sticky top-20">
      <h3 className="text-xl font-headline font-semibold mb-4 text-foreground">小部件区域</h3>
      <div className="space-y-4">
        <div className="p-4 border rounded-md bg-background/50">
          <h4 className="font-semibold mb-2 text-foreground">热门文章</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary">文章标题 1</a></li>
            <li><a href="#" className="hover:text-primary">文章标题 2</a></li>
            <li><a href="#" className="hover:text-primary">文章标题 3</a></li>
          </ul>
        </div>
        <div className="p-4 border rounded-md bg-background/50">
          <h4 className="font-semibold mb-2 text-foreground">标签云</h4>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground">科技</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground">生活</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground">教程</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground">随笔</span>
          </div>
        </div>
        <div className="p-4 border rounded-md bg-background/50">
          <h4 className="font-semibold mb-2 text-foreground">广告位</h4>
          <div className="aspect-video bg-muted rounded flex items-center justify-center">
            <p className="text-sm text-muted-foreground">广告图片</p>
          </div>
        </div>
      </div>
    </div>
  );
}
