import type { StaticImageData } from 'next/image';

export type Content = {
  tags: string;
  slug: string;
  title: string;
  banner: StaticImageData;
  readTime: string;
  description: string;
  publishedAt: string;
  lastUpdatedAt?: string;
};

//buat tipe bernama Project
//dia merupkan kombinasai dari tope BERNAMA CONTENT
export type Project = Content & {
  link?: string;
  github?: string;
  youtube?: string;
  category?: string;
};

//mendefinisikan tipe yang disebut ContentType
// dengan nilai project
//artinya saat tipe ini dipanggil kita hanya dapat menggunakannya dengan nilai 'projects'
export type ContentType = 'projects';
