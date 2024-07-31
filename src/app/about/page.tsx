"use client";

import dynamic from "next/dynamic";
import { Profile } from "@/components/profile";
import { MDXComponent } from "@/components/mdx-components";
import { MDXProvider } from "@mdx-js/react";

const AboutMeMarkdown = dynamic(() => import("../../content/about/me.mdx"));

export default function About() {
  return (
    <>
      <section className="min-h-screen  pb-20 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-row flex-col lg:items-center lg:gap-16 ">
            <Profile description="An extremely passionate farmer who codes in between cleaning out the barn." />
            <div className="animate_right  md:w-full h-[600px] overflow-y-scroll space-y-0  no-scrollbar  grid  ">
              <MDXProvider components={MDXComponent}>
                <article className="prose prose-lg   prose-invert ">
                  <AboutMeMarkdown />
                </article>
              </MDXProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
