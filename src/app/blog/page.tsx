import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { getAllBlogPosts, getAllBlogTags } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const tags = await getAllBlogTags();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Blog"
          title="技术文章与思考"
          description="文章内容来自本地 Markdown 文件，通过静态生成输出，适合沉淀项目复盘、技术总结和长期思考。"
        />

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/blog/archive"
            className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
          >
            Archive
          </Link>
          <Link
            href="/blog/tags"
            className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
          >
            Tags
          </Link>
          {tags.map((tagItem) => (
            <Link
              key={tagItem.tag}
              href={`/blog/tags/${encodeURIComponent(tagItem.tag)}`}
              className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--muted)] transition duration-300 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
            >
              {tagItem.tag} ({tagItem.count})
            </Link>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Post {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{post.title}</h3>
              <p className="mt-3 text-sm text-[var(--accent)]">{post.date}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-code)] px-3 py-1 text-xs font-medium text-[var(--foreground-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition duration-300 group-hover:gap-3"
              >
                Read Article
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
