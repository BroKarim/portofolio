// ni yg ngatur layout untuk content
//karena content kita cuman project makanya dinamaakkan project-layout

import { MDXProvider } from '@mdx-js/react';
import type { ReactElement } from 'react';
import type { Project, Content } from '@/lib/types/contents';
import type { ContentSlugProps } from '@/lib/mdx';
import { ImagePreview } from './imagePreview';

type ContentLayoutProps = {
  children: ReactElement<ContentSlugProps>;
  meta: Pick<Content, 'title' | 'tags' | 'publishedAt' | 'description' | 'banner'> & Pick<Project, 'link' | 'github' | 'youtube' | 'category'>;
};

export function ContentLayout({ meta, children }: ContentLayoutProps): JSX.Element {
  const [{ title, description, publishedAt, banner, tags }, { type, slug, readTime }] = [meta, children.props];

  return (
    <>
      <main className="pt-0">
        <ImagePreview className="max-h-[448px] object-cover" wrapperClassName="mt-0.5" src={banner} alt={title} />
        <section className="mt-8 grid gap-2">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Written by BroKariim</p>
        </section>
      </main>
    </>
  );
}
