import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  year: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        year: new Date(data.date).getFullYear().toString(),
        content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process multiline borders - replace newlines with special marker
    // Handle nested brackets by matching until we find ]\n or ]$ (end of border block)
    let processedContent = content;

    // Process whiteBorder blocks
    processedContent = processedContent.replace(/\[whiteBorder:([\s\S]*?)\](?=\n|$)/gm, (match, innerContent) => {
      return `[whiteBorder:${innerContent.replace(/\n/g, '|||LINEBREAK|||')}]`;
    });

    // Process multicolorBorder blocks
    processedContent = processedContent.replace(/\[multicolorBorder:([\s\S]*?)\](?=\n|$)/gm, (match, innerContent) => {
      return `[multicolorBorder:${innerContent.replace(/\n/g, '|||LINEBREAK|||')}]`;
    });

    return {
      slug,
      title: data.title,
      date: data.date,
      year: new Date(data.date).getFullYear().toString(),
      content: processedContent,
    };
  } catch {
    return null;
  }
}

export function getPostsByYear(): { [year: string]: Post[] } {
  const posts = getAllPosts();
  const postsByYear: { [year: string]: Post[] } = {};

  posts.forEach(post => {
    if (!postsByYear[post.year]) {
      postsByYear[post.year] = [];
    }
    postsByYear[post.year].push(post);
  });

  return postsByYear;
}
