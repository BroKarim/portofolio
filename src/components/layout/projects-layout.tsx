"use client";
import { MDXProvider } from "@mdx-js/react";
import { ImagePreview } from "../imagePreview";
import type { ContentSlugProps } from "@/lib/mdx";
import type { ReactElement } from "react";
import type { Content, Project } from "@/lib/types/content";
import { Github, User } from "lucide-react";
import Link from "next/link";
import { MDXComponent } from "../mdx-components";

type ContentLayoutProps = {
  children: ReactElement<ContentSlugProps>;
  meta: Pick<
    Content,
    "title" | "tags" | "publishedAt" | "description" | "banner"
  > &
    Pick<Project, "bannerLink" | "date" | "github" | "category">;
};

export function ContentLayout({
  meta,
  children,
}: ContentLayoutProps): JSX.Element {
  const {
    title,
    description,
    publishedAt,
    banner,
    bannerLink,
    tags,
    github,
    category,
  } = meta;

  console.log("github:", github);
  return (
    <>
      <main className="pt-0 px-4 mx-auto max-w-screen-xl">
        <ImagePreview
          src={banner}
          alt={title}
          customLink={bannerLink}
          className="max-h-[448px] object-cover"
        />
        <section className="mt-8 grid gap-2">
          <p className="text-sm text-white">{publishedAt}</p>
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="text-lg">{description}</p>

          <div className="flex gap-4">
            {github && (
              <Link href={github} target="_blank" className="flex gap-2">
                <Github
                  color="black"
                  fontSize={20}
                  className="rounded-full p-1 bg-white"
                />
                <p className="hover:text-black hover:underline">Repository</p>
              </Link>
            )}
            <div className="flex gap-2">
              <User
                color="black"
                fontSize={20}
                className="rounded-full p-1 bg-white"
              />{" "}
              {category}
            </div>
          </div>

          <hr className="mt-4 dark:border-gray-600" />
          <section className="mt-4 grid gap-8 lg:grid-cols-[auto,1fr]">
            <article className="prose prose-lg max-w-full prose-invert ">
              <MDXProvider components={MDXComponent}>{children}</MDXProvider>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
