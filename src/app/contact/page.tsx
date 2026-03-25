import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { contacts } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Contact"
          title="联系方式"
          description="你可以把邮箱、GitHub、LinkedIn、掘金或微信说明放在这里，让招聘方快速建立联系。"
        />
        <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
          <div className="space-y-5">
            {contacts.map((contact) => (
              <div key={contact.label} className="border-b border-[var(--border)] pb-5 last:border-b-0 last:pb-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{contact.label}</p>
                <Link
                  href={contact.href}
                  className="mt-2 block text-lg text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
                >
                  {contact.value}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
