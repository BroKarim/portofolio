'use client';
import { MDXProvider } from '@mdx-js/react';
import { ImagePreview } from '../imagePreview';
import type { ContentSlugProps } from '@/lib/mdx';
import type { ReactElement } from 'react';
import type { Content, Project } from '@/lib/types/content';

type ContentLayoutProps = {
  children: ReactElement<ContentSlugProps>;
  meta: Pick<Content, 'title' | 'tags' | 'publishedAt' | 'description' | 'banner'> & Pick<Project, 'bannerLink' | 'date'>;
};

export function ContentLayout({ meta, children }: ContentLayoutProps): JSX.Element {
  const { title, description, publishedAt, banner, bannerLink, tags } = meta;
  // const { type, slug } = children.props;
  // const contentIsBlog = type === 'projects';

  return (
    <>
      <div className="pt-0">
        <ImagePreview src={banner} alt={title} customLink={bannerLink} className="max-h-[448px] object-cover" />
        <section className="mt-8 grid gap-2">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Written on {publishedAt} by BroKariim</p>
          <hr className="mt-4 dark:border-gray-600" />
          <section className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
            <article className="prose prose-lg max-w-4xl prose-invert text-white">
              <MDXProvider>{children}</MDXProvider>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}
