import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image: string
}

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), 'app/data/', `${slug}.mdx`),
      'utf-8'
    );

    if(!singleBlog) return null;

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
};

export const getBlogs = async () => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), 'app/data/'));
    const allBlogs = await Promise.all(files.map(async (file) => {
      const slug = file.replace('.mdx', '');
      const frontmatter = await getBlogFrontmatter(slug);
      return { slug, ...frontmatter };
    }));
    return allBlogs;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

export const getBlogFrontmatter = async (slug: string) => {
  const singleBlog = await getSingleBlog(slug);

  if(!singleBlog) return null;

  return singleBlog.frontmatter;
};