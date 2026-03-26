import Link from "next/link";
import { notFound } from "next/navigation";

import { getAdjacentBlogPosts, getAllBlogPosts, getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const matchedPost = posts.find((post) => post.slug === slug);

  if (!matchedPost) {
    notFound();
  }

  const post = await getBlogPostBySlug(slug);
  const { previousPost, nextPost } = await getAdjacentBlogPosts(slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <article className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="mb-10 space-y-4 border-b border-[var(--border)] pb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Blog Post</p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-[var(--muted)]">{post.date}</p>
          <p className="max-w-2xl text-base leading-7 text-[var(--foreground-soft)]">{post.summary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag)}`}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-code)] px-3 py-1 text-xs font-medium text-[var(--foreground-soft)] transition duration-300 hover:border-[var(--border-strong)]"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-[var(--foreground)] prose-p:text-[var(--foreground-soft)] prose-li:text-[var(--foreground-soft)] prose-strong:text-[var(--foreground)] prose-a:text-[var(--accent)] prose-a:decoration-[var(--accent)] prose-code:text-[var(--foreground)] prose-pre:border prose-pre:border-[var(--border)] prose-pre:bg-[var(--surface-code)] prose-blockquote:border-[var(--accent)] prose-blockquote:text-[var(--muted)] dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-5 transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Previous</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">{previousPost.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-5 text-left transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Next</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">{nextPost.title}</p>
            </Link>
          ) : null}
        </div>
      </article>
    </div>
  );
}
