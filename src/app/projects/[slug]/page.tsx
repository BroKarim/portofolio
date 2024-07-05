import { getPostNames, getPostData } from '@/lib/mdx';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

/**
 * return all possible slug values in an array like [{slug: 'first_blog'}, {slug: 'second_blog'}]
 */
export async function generateStaticParams() {
  const deatilProject = getPostNames();
  console.log('detailProjects:', deatilProject);
  return deatilProject.map((post) => ({
    slug: post,
  }));
}

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  //Load the blog post metadata using blog_functions.ts
  const slug = params.slug.replace('.mdx', ''); // Hapus ekstensi jika ada
  console.log('generateMetadata params:', params); // Debug log
  const metadata = await getPostData(slug);
  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
    };
  }
  return {}; //Default return.
}

export default async function BlogPage({ params }: ProjectPageProps) {
  const slug = params.slug.replace('.mdx', ''); 
  console.log('ProjectPage params:', slug);
  const ProjectMarkdown = dynamic(() => import('../../../content/project/' + slug + '.mdx'));

  return (
    <div className="container mx-auto p-4">
      <div>
        <Link prefetch={false} href={'/'} className="text-sm font-medium p-2 rounded-md hover:bg-slate-200 dark:hover:bg-zinc-600">
          &larr; All Blogs
        </Link>
      </div>
      <article className=" z-50 w-full mt-4 dark:prose-invert">
        <ProjectMarkdown />
      </article>
    </div>
  );
}
