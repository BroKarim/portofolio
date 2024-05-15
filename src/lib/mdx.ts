import { getContentFiles, getContentReadTime } from './mdx-utils';
import type { Content, Project, ContentType } from './types/contents';
import { GetStaticPropsResult } from 'next';
import { removeContentExtension } from './helper';

export type ContentSlugProps = Pick<Content, 'readTime' | 'lastUpdatedAt'> & {
  type: ContentType;
  slug: string;
};

export function getContentSlug(type: ContentType, slug: string) {
  return async (): Promise<GetStaticPropsResult<ContentSlugProps>> => {
    const readTime = await getContentReadTime(type, slug);

    return {
      props: {
        type,
        slug,
        readTime,
      },
    };
  };
}

/**
 * Returns all the contents within the selected content directory.
 * sederhanay projects dibawah ini adalah folder projects (kita atur di content.ts)
 */
export async function getAllContents(type: 'projects'): Promise<Project[]>;
export async function getAllContents(type: ContentType): Promise<Project[]> {
  const contentPosts = await getContentFiles(type);

  const contents = await getContentByFiles(type, contentPosts);

  return contents;
}

/**
 * Get the contents by files.
 *
 * @param type The type of the content.
 * @param files The files of the content.
 * @returns The contents from the files.
 */
//baca lagi bagian ini, karena error di struktur file solusinay samain saama versi kita aja
export async function getContentByFiles(type: ContentType, files: string[]): Promise<Project[]> {
  const contentPromises = files.map(async (file) => {
    const { meta } = (await import(`../app/${type}/data/${file}`)) as {
      meta: Omit<Project, 'slug' | 'readTime'>;
    };
    //menghapus ekstensi dari nama file, menghasilkan slug, yang merupakan versi pendek dari nama file tanpa ekstensi.
    const slug = removeContentExtension(file);
    //Selanjutnya, kita memanggil fungsi getContentReadTime untuk mendapatkan estimasi waktu baca untuk konten tersebut berdasarkan type dan slug.
    const readTime = await getContentReadTime(type, slug);

    return { ...meta, slug, readTime };
  });
  //Kita menunggu semua Promise dalam array contentPromises untuk diselesaikan menggunakan Promise.all.
  //Ini menggabungkan semua hasil menjadi satu array contents.
  const contents = await Promise.all(contentPromises);

  return contents;
}
