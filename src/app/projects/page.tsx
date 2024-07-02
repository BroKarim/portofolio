// ada masalh di getPostsData
//karen datanya belum kebaca sehingga blogs kosong

import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/page-header';
import Info from '@/components/info';

import { getPostsData } from '@/lib/mdx';
import Link from 'next/link';

type Content = {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
};

export default async function Projects() {
  const blogs: Content[] = await getPostsData();
  console.log('susah bet : ', blogs);

  //Case: no posts
  if (blogs.length === 0) {
    return <div className="container mx-auto p-4">There are no posts yet...</div>;
  }
  return (
    <>
      <section>
        <div className="z-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <Info title="Projects" availableForWork={true} />
          <hr className="w-full bg-gray-700 h-[2px] border-none" />

          <PageHeader>
            <div className="block sm:gap-0 lg:max-w-md w-full ">
              <PageHeaderHeading>
                From vision to implementation. <br className="hidden md:block" />
                <span className="text-gray-500 pl-2 md:pl-0">User-centric design deliver good results.</span>
              </PageHeaderHeading>
            </div>

            <div className="overflow-hidden lg:w-1/2   lg:items-end ">
              <PageHeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PageHeaderDescription>
            </div>
          </PageHeader>
          <br />
          {/* my project */}
          <div className="flex md:justify-between flex-col md:flex-row justify-center  gap-4 md:items-start">
            <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-6 py-2 ">
              {/* ntra component card lagsung panggil disini, codenya nengok aja di github branch mdx-error di project- */}
              {blogs.map((blog) => {
                return (
                  <div key={blog.id}>
                    <Link href={`/projects/${blog.id}`}>
                      <p className="text-white">{blog.title}</p>
                      <span className="ml-2 text-xs text-white ">{blog.date.toLocaleDateString()}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// type BlogProps = {
//   projects: Project[];
// };

// export async function getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
//   const projects = await getAllContents('projects');

//   return {
//     props: {
//       projects,
//     },
//   };
// }
// export default Projects;
