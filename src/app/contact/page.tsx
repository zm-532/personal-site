import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { contacts } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Contact"
          title="联系方式"
          description="你可以把自己的邮箱、GitHub、LinkedIn、掘金或微信说明放在这里，方便招聘方快速联系。"
        />
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(28,25,23,0.45)]">
          <div className="space-y-5">
            {contacts.map((contact) => (
              <div key={contact.label} className="border-b border-stone-200 pb-5 last:border-b-0 last:pb-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">{contact.label}</p>
                <Link href={contact.href} className="mt-2 block text-lg text-stone-900 underline underline-offset-4">
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
