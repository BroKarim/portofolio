// import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { ReactNode } from "react";

export const MDXComponent = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className=" text-5xl  max-w-[850px] leading-[1.2] md:leading-[1] text-black dark:text-white  md:text-6xl font-bold">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="  text-4xl leading-[1.2] text-black font-bold dark:text-black">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 text-lg font-bold text-black dark:text-black">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="my-4  text-xl leading-normal text-black  dark:text-white">
      {children}
    </p>
  ),

  li: ({ children }: { children?: ReactNode }) => (
    <li className=" text-xl leading-normal text-black  dark:text-white ">
      {children}
    </li>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc pl-10">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ul className="list-decimal pl-10">{children}</ul>
  ),

  hr: () => <hr className="mt-10 border-neutral-300 border-2" />
};
