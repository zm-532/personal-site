import { SectionTitle } from "@/components/section-title";
import { SectionShell } from "@/components/section-shell";

type PersonalStat = {
  label: string;
  value: string;
};

type AboutSectionProps = {
  highlights: string[];
  stats: PersonalStat[];
};

export function AboutSection({ highlights, stats }: AboutSectionProps) {
  return (
    <SectionShell id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
        <SectionTitle
          eyebrow="About"
          title="设计感与工程感并重的个人表达"
          description="我希望作品集不仅能传递技术能力，也能体现信息组织、页面节奏和系统思维，让面试官在浏览时快速建立清晰印象。"
        />
      </div>

      <div className="grid gap-6">
        <article className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">What I Care About</p>
          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--panel-strong)] px-5 py-4 text-sm leading-7 text-[var(--foreground-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{stat.label}</p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">{stat.value}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
