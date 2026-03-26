import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { SectionShell } from "@/components/section-shell";

type ContactItem = {
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  contacts: ContactItem[];
};

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <SectionShell id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
        <SectionTitle
          eyebrow="Contact"
          title="适合进一步沟通与面试交流的入口"
          description="如果你在寻找 AI 应用、RAG 系统或 Agent 方向的人选，我很乐意进一步介绍项目背景、技术取舍与实现细节。"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-[linear-gradient(135deg,#4f46e5_0%,#2563eb_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-0.5"
          >
            查看博客
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-[var(--border-strong)] bg-[var(--panel-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5"
          >
            浏览项目
          </Link>
        </div>
      </div>

      <div className="grid gap-4">
        {contacts.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{item.label}</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{item.value}</p>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
