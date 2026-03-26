import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import hljs from "highlight.js/lib/common";
import { Marked } from "marked";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  contentHtml: string;
};

export type BlogArchiveGroup = {
  year: string;
  posts: BlogPostMeta[];
};

const marked = new Marked({
  gfm: true,
  breaks: true
});

marked.use({
  renderer: {
    code(token) {
      const language = token.lang?.trim();
      const highlighted = language && hljs.getLanguage(language)
        ? hljs.highlight(token.text, { language }).value
        : hljs.highlightAuto(token.text).value;
      const languageClass = language ? ` language-${language}` : "";

      return `<pre><code class="hljs${languageClass}">${highlighted}</code></pre>`;
    }
  }
});

function sortPostsByDate<T extends { date: string }>(posts: T[]) {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function toPostMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  return {
    slug,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : []
  };
}

async function readBlogFile(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  const fileContent = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    meta: toPostMeta(slug, data),
    content
  };
}

export async function getBlogSlugs() {
  const files = await readdir(blogDirectory);

  return files.filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, ""));
}

export async function getAllBlogPosts() {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPostMeta(slug)));

  return sortPostsByDate(posts);
}

export async function getAdjacentBlogPosts(slug: string) {
  const posts = await getAllBlogPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {
      previousPost: null,
      nextPost: null
    };
  }

  return {
    previousPost: posts[currentIndex + 1] ?? null,
    nextPost: posts[currentIndex - 1] ?? null
  };
}

export async function getAllBlogTags() {
  const posts = await getAllBlogPosts();
  const tagMap = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }

  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getBlogArchiveGroups(): Promise<BlogArchiveGroup[]> {
  const posts = await getAllBlogPosts();
  const groups = new Map<string, BlogPostMeta[]>();

  for (const post of posts) {
    const year = new Date(post.date).getFullYear().toString();
    const current = groups.get(year) ?? [];
    current.push(post);
    groups.set(year, current);
  }

  return [...groups.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, groupedPosts]) => ({
      year,
      posts: groupedPosts
    }));
}

export async function getBlogPostMeta(slug: string): Promise<BlogPostMeta> {
  const { meta } = await readBlogFile(slug);

  return meta;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const { meta, content } = await readBlogFile(slug);

  return {
    ...meta,
    content,
    contentHtml: await marked.parse(content)
  };
}
