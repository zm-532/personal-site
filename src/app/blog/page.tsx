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
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Blog"
          title="博客占位"
          description="当前页面用于占位，后续可以接入 MDX、Contentlayer 或静态 JSON 数据。"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-6 inline-flex text-sm font-semibold text-amber-700 underline underline-offset-4"
              >
                Coming soon
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
