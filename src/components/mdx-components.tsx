// kalau memang haru custom className, pake library classname aja ntar

import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';

import { Callout } from './callout';
import { MdxCard } from './mdx-card';

const components = {
  h1: ({ ...props }) => <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight')} {...props} />,
  h2: ({ ...props }) => <h2 className={cn('mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0')} {...props} />,
  h3: ({ ...props }) => <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight')} {...props} />,
  h4: ({ ...props }) => <h4 className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight')} {...props} />,
  h5: ({ ...props }) => <h5 className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight')} {...props} />,
  h6: ({ ...props }) => <h6 className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight')} {...props} />,
  a: ({ ...props }) => <a className={cn('font-medium underline underline-offset-4')} {...props} />,
  p: ({ ...props }) => <p className={cn('leading-7 [&:not(:first-child)]:mt-6')} {...props} />,
  ul: ({ ...props }) => <ul className={cn('my-6 ml-6 list-disc')} {...props} />,
  ol: ({ ...props }) => <ol className={cn('my-6 ml-6 list-decimal')} {...props} />,
  li: ({ ...props }) => <li className={cn('mt-2')} {...props} />,
  blockquote: ({ ...props }) => <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground')} {...props} />,
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />,
  th: ({ ...props }) => <th className={cn('border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right')} {...props} />,
  td: ({ ...props }) => <td className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right')} {...props} />,
  pre: ({ ...props }) => <pre className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4')} {...props} />,
  code: ({ ...props }) => <code className={cn('relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm')} {...props} />,
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
