import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    banner: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/src/content/posts/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({ contentDirPath: './src/content', documentTypes: [Post] });
