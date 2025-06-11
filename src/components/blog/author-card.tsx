
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function AuthorCard() {
  const [showDonationSection, setShowDonationSection] = useState(false);

  return (
    <>
      <div className="max-w-md mx-auto bg-card rounded-xl shadow-lg p-6 md:p-8 text-center relative mt-16 mb-8">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Image
            src="https://placehold.co/100x100.png"
            alt="用户名称 Avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-card shadow-md"
            data-ai-hint="avatar character"
          />
        </div>
        <div className="mt-8"> {/* Add margin top to push content below avatar */}
          <h2 className="text-2xl font-bold font-headline text-foreground mb-1">用户名称</h2>
          <p className="text-muted-foreground mb-6">分享设计与科技生活</p>
          <div className="flex justify-center space-x-3 sm:space-x-4 mb-6">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              onClick={() => setShowDonationSection(!showDonationSection)}
            >
              打赏
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
              订阅
            </Button>
          </div>

          {showDonationSection && (
            <div className="mt-6 border-t border-border pt-6">
              <h3 className="text-xl font-semibold mb-2 text-center text-foreground">感谢您的支持！</h3>
              <p className="text-muted-foreground mb-4 text-center">您的慷慨解囊是对我最大的鼓励！</p>
              <div className="flex flex-row justify-around items-center gap-6 my-4">
                <div className="flex flex-col items-center">
                  <Image
                    src="https://placehold.co/150x150.png"
                    alt="微信支付二维码"
                    width={150}
                    height={150}
                    data-ai-hint="QR code"
                    className="rounded-md shadow-md"
                  />
                  <p className="mt-2 text-sm font-medium text-foreground">微信支付</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="https://placehold.co/150x150.png"
                    alt="支付宝二维码"
                    width={150}
                    height={150}
                    data-ai-hint="QR code"
                    className="rounded-md shadow-md"
                  />
                  <p className="mt-2 text-sm font-medium text-foreground">支付宝</p>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            本文是原创文章，采用 CC BY-NC-ND 4.0 协议，完整转载请注明来自 用户名称
          </p>
        </div>
      </div>
    </>
  );
}
