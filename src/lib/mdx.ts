import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Blog = {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
};

//semua datad
export async function getPostsData(): Promise<Blog[]> {
  try {
    const dirPath = join(process.cwd(), 'src/content/project');
    const fileList: string[] = readdirSync(dirPath);

    if (fileList.length > 0) {
      const result = fileList.map(async (file) => {
        const filename = file.substring(0, file.lastIndexOf('.')) || file;
        return { ...(await getPostData(filename)), id: filename };
      });

      return Promise.all(result);
    }
  } catch (error) {
    console.error('Error karena: ', error);
  }
  return [];
}

//data satuan
export async function getPostData(filename: string): Promise<Omit<Blog, 'id'>> {
  console.log('getPostData filename:', filename); // Debug log
  const fullPath = join(process.cwd(), 'src/content/project', `${filename}.mdx`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    date: new Date(data.date),
    author: data.author,
  };
}

/**
 * Scan the blog directory and return an array of file names
 * @returns
 */
export function getPostNames(): string[] {
  try {
    //Read the /blog folder at root dir
    const dirPath = join(process.cwd(), 'src/content/project/');
    const fileList: string[] = readdirSync(dirPath);
   
    if (fileList.length > 0) {
      return fileList.map((file) => {
        //Remove extension
        return file.substring(0, file.lastIndexOf('.')) || file;
      });
    }
  } catch (error) {}
  return [];
}
