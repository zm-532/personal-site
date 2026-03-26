import { SectionTitle } from "@/components/section-title";
import { SectionShell } from "@/components/section-shell";

type ExperienceItem = {
  type: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  bullets: string[];
};

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
  education: EducationItem[];
};

export function ExperienceSection({ experiences, education }: ExperienceSectionProps) {
  return (
    <SectionShell id="experience" className="space-y-8">
      <SectionTitle
        eyebrow="Experience"
        title="经历与教育"
        description="把实习、研究与学习背景放在同一套信息层级中表达，突出方向连续性与问题解决能力。"
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {experiences.map((item) => (
            <article
              key={`${item.organization}-${item.title}`}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">{item.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--foreground-soft)]">{item.organization}</p>
                </div>
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--foreground-soft)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-[1rem] border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-7 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Education</p>
          <div className="mt-6 space-y-5">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.degree}`}
                className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--panel-strong)] p-5"
              >
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{item.degree}</h3>
                <p className="mt-2 text-sm text-[var(--foreground-soft)]">{item.school}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
