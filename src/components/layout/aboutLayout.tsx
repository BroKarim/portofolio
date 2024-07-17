'use client';
import { MDXProvider } from '@mdx-js/react';
import type { ContentSlugProps } from '@/lib/mdx';
import type { ReactElement } from 'react';

type AboutLayoutProps = {
  children: ReactElement<ContentSlugProps>;
};

export function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <div className="flex">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </>
  );
}
