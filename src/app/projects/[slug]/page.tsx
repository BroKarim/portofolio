'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

type ProjectPageProps = {
  params: { slug: string };
};

export default function BlogPage({ params }: ProjectPageProps) {
  const slug = params.slug.replace('.mdx', '');
  console.log('ProjectPage params:', slug);
  const ProjectMarkdown = dynamic(
    () => import('../../../content/project/' + slug + '.mdx')
  );

  return (
    <div className="container min-h-screen mx-auto p-4">
      <div>
        <Link
          prefetch={false}
          href={'/'}
          className="text-sm font-medium py-2 px-4 rounded-md hover:bg-slate-200 hover:text-black dark:hover:bg-zinc-600"
        >
          &larr; Back
        </Link>
      </div>
      <article className=" z-50 w-full mt-4 dark:prose-invert">
        <ProjectMarkdown />
      </article>
    </div>
  );
}
