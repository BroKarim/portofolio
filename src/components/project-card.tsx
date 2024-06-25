import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types/contents';
import { Post } from 'contentlayer/generated';

export function ProjectCard(post: Post): JSX.Element {
  return (
    <article className="grid" key={post.title}>
      <Link className="project-card clickable p-4" href="/">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">{post.description}</p>

        <Image className="mt-3 h-44 rounded object-cover" width={804} height={452} src={post.banner} alt={post.title}  />
        <p className="animated-underline mt-2 w-fit">See more →</p>
      </Link>
    </article>
  );
}
// export function ProjectCard({ slug, tags, title, banner, description }: Omit<Project, 'readTime' | 'publishedAt'>): JSX.Element {
//   return (
//     <article className="grid" key={title}>
//       <Link className="project-card clickable p-4" href={`/projects/data/${slug}`}>
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

//         <Image className="mt-3 h-44 rounded object-cover" src={banner} alt={title} placeholder="blur" />
//         <p className="animated-underline mt-2 w-fit">See more →</p>
//       </Link>
//     </article>
//   );
// }
