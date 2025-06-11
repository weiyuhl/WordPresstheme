
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

interface Comment {
  id: string;
  author: string;
  avatarUrl?: string;
  date: Date;
  text: string;
  email: string; // Added email to comment interface
}

const placeholderComments: Comment[] = [
  {
    id: '1',
    author: '访客小明',
    email: 'ming@example.com',
    avatarUrl: 'https://placehold.co/40x40.png?text=M',
    date: new Date(2024, 6, 20, 10, 30),
    text: '这篇文章写得太棒了，非常有启发性！期待作者更多精彩分享。',
  },
  {
    id: '2',
    author: '访客小红',
    email: 'hong@example.com',
    avatarUrl: 'https://placehold.co/40x40.png?text=H',
    date: new Date(2024, 6, 21, 14, 15),
    text: '感谢分享，学到了很多新知识。关于人工智能在医疗领域的应用，我还有一些疑问，希望有机会能和作者深入交流。',
  },
];

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(placeholderComments);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Client-side state for ensuring date formatting happens after hydration
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim() || !email.trim()) {
      setError('姓名、邮箱和评论内容均不能为空。');
      return;
    }
    // Basic email validation (can be more sophisticated)
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('请输入有效的邮箱地址。');
        return;
    }
    setError(null);
    setIsSubmitting(true);

    // Simulate API call / saving comment
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newComment: Comment = {
      id: Date.now().toString(), // Simple ID generation for demo
      author: name,
      email: email,
      avatarUrl: `https://placehold.co/40x40.png?text=${name.charAt(0).toUpperCase()}`,
      date: new Date(),
      text: commentText,
    };

    setComments(prevComments => [newComment, ...prevComments]);
    setName('');
    setEmail('');
    setCommentText('');
    setIsSubmitting(false);
  };

  return (
    <section className="mt-12 py-8 border-t border-border">
      <h2 className="text-3xl font-headline font-semibold mb-8 text-foreground">留下您的评论</h2>
      
      <form onSubmit={handleSubmit} className="mb-10 p-6 bg-card rounded-lg shadow-md space-y-6">
        <div>
          <Label htmlFor="comment-name" className="block text-sm font-medium text-foreground mb-1">姓名 <span className="text-destructive">*</span></Label>
          <Input 
            id="comment-name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="请输入您的称呼" 
            className="w-full"
            required 
          />
        </div>
        <div>
          <Label htmlFor="comment-email" className="block text-sm font-medium text-foreground mb-1">邮箱 <span className="text-destructive">*</span></Label>
          <Input 
            id="comment-email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入您的邮箱" 
            className="w-full"
            required
          />
        </div>
        <div>
          <Label htmlFor="comment-text" className="block text-sm font-medium text-foreground mb-1">评论内容 <span className="text-destructive">*</span></Label>
          <Textarea 
            id="comment-text" 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="请在此输入您的评论..." 
            rows={5} 
            className="w-full"
            required 
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
          {isSubmitting ? '正在提交...' : '发表评论'}
        </Button>
      </form>

      <h3 className="text-2xl font-headline font-semibold mb-6 text-foreground">
        {comments.length > 0 ? `${comments.length} 条评论` : '暂无评论'}
      </h3>
      <div className="space-y-8">
        {comments.length === 0 && !isSubmitting ? (
          <p className="text-muted-foreground text-center py-4">还没有评论，快来抢沙发吧！</p>
        ) : (
          comments.map((comment) => (
            <article key={comment.id} className="flex items-start space-x-4 p-5 bg-card rounded-lg shadow-sm">
              <Avatar className="h-11 w-11 border border-border flex-shrink-0">
                <AvatarImage src={comment.avatarUrl} alt={comment.author} data-ai-hint="avatar character" />
                <AvatarFallback>{comment.author.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground text-lg">{comment.author}</h4>
                  {isClient && (
                     <time dateTime={comment.date.toISOString()} className="text-xs text-muted-foreground">
                       {format(comment.date, 'yyyy年MM月dd日 HH:mm')}
                     </time>
                  )}
                </div>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{comment.text}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
