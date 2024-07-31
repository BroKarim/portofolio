"use client";
import { MDXProvider } from "@mdx-js/react";
import type { ContentSlugProps } from "@/lib/mdx";
import type { ReactElement } from "react";
import { MDXComponent } from "../mdx-components";

type AboutLayoutProps = {
  children: ReactElement<ContentSlugProps>;
};


export function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
        <MDXProvider components={MDXComponent}>{children}</MDXProvider>  
    </>
  );
}
