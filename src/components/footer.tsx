import Link from "next/link";

import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Portfolio</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            设计感与工程感并重的 AI 应用作品集
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            基于 Next.js、TypeScript 与 Tailwind CSS 构建，采用静态导出部署，适合持续沉淀项目、博客与个人表达。
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[var(--muted)]">
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 transition duration-300 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>© 2026 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
