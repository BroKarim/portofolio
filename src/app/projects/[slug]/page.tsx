"use client";

import dynamic from "next/dynamic";
import React from "react";
import TransitionLink from "@/components/transitionLink";

type ProjectPageProps = {
  params: { slug: string };
};

export default function BlogPage({ params }: ProjectPageProps) {
  const slug = params.slug.replace(".mdx", "");
  console.log("ProjectPage params:", slug);
  const ProjectMarkdown = dynamic(
    () => import("../../../content/project/" + slug + ".mdx")
  );

  return (
    <div className="container min-h-screen mx-auto p-4">
      <div>
        <TransitionLink href="/" label="&larr; Back" />
      </div>
      <article className=" z-50 w-full mt-4 dark:prose-invert">
        <ProjectMarkdown />
      </article>
    </div>
  );
}
