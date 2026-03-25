import Link from "next/link";

import { SectionTitle } from "@/components/section-title";

const posts = [
  {
    title: "构建个人网站时，我如何平衡展示感与工程感",
    excerpt: "这部分先做占位，后续可以替换为真实博客文章列表或 Markdown 内容。",
    href: "#"
  },
  {
    title: "一次项目重构中的页面组织与组件拆分",
    excerpt: "你可以把技术总结、面试复盘或学习笔记放在这里，增强个人输出能力展示。",
    href: "#"
  }
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Blog"
          title="博客占位"
          description="当前页面用于占位，后续可以接入 MDX、Contentlayer 或静态 JSON 数据，逐步沉淀技术文章与项目复盘。"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Post {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition duration-300 group-hover:gap-3"
              >
                Coming soon
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
