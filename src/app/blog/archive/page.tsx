import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { getBlogArchiveGroups } from "@/lib/blog";

export default async function BlogArchivePage() {
  const archives = await getBlogArchiveGroups();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Archive"
          title="文章归档"
          description="按年份整理所有文章，方便快速回顾不同阶段的项目复盘与技术思考。"
        />

        <div className="space-y-8">
          {archives.map((group) => (
            <section
              key={group.year}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{group.year}</h2>
              <div className="mt-6 space-y-4">
                {group.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex flex-col gap-2 rounded-[1.25rem] border border-[var(--border)] bg-[var(--panel)] p-4 transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-lg font-semibold text-[var(--foreground)]">{post.title}</p>
                      <p className="text-sm text-[var(--muted)]">{post.date}</p>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{post.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
