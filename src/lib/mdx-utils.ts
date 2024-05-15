import type { Project, ContentType } from './types/contents';
import { join } from 'path';
import { readFile, readdir } from 'fs/promises';
import readingTime from 'reading-time';

//Returns the content files within the selected content directory.
//buat fungsi bernama getContentFiles yang pake tipe contentType
//Fungsi ini akan mengembalikan sebuah Promise yang berisi array dari string.
export async function getContentFiles(type: ContentType): Promise<string[]> {
  //gabung bbrp bagian path menjadi satu path lengkap
  //path akan menunjukkan direktori konten berada
  const contentDirectory = join('src', 'app', type, 'data');

  //lalu kita akan memvaca isi dari contentDirectory
  //kontenta akan menjadi array yang disimpkan di contentsPost
  const contentPosts = await readdir(contentDirectory);

  //lalu array tadi adalah hasil dari fungsi ni
  return contentPosts;
}

/**
 * Returns the content read time.
 */
export async function getContentReadTime(type: ContentType, slug: string): Promise<string> {
  const contentPath = join('src', 'app', type, 'data', `${slug}.mdx`);

  try {
    // Membaca isi file
    const rawContent = await readFile(contentPath, 'utf8');

    // Menggunakan seluruh isi file untuk menghitung waktu baca
    const actualContent = rawContent.trim();
    const { text } = readingTime(actualContent);

    return text;
  } catch (error) {
    console.error(`Error reading content for ${slug} at ${contentPath}:`, error);
    throw error;
  }
}
