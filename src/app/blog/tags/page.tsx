import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { getAllBlogTags } from "@/lib/blog";

export default async function BlogTagsPage() {
  const tags = await getAllBlogTags();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Tags"
          title="文章标签"
          description="按主题浏览文章，快速找到与 RAG、Agent、工作流或前端工程相关的内容。"
        />

        <div className="flex flex-wrap gap-3">
          {tags.map((tagItem) => (
            <Link
              key={tagItem.tag}
              href={`/blog/tags/${encodeURIComponent(tagItem.tag)}`}
              className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
            >
              {tagItem.tag} ({tagItem.count})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
