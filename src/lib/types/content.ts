import type { StaticImageData } from "next/image";

export type Content = {
  tags: string;
  slug: string;
  title: string;
  banner: StaticImageData;
  description: string;
  publishedAt: string;
};

export type Project = Content & {
  id: string;
  title: string;
  description: string;
  bannerLink?: string;
  category?: string;
  date: Date;
  author: string;
  github: string;
};

export type ContentType = "projects";
