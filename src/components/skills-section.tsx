import { SectionTitle } from "@/components/section-title";
import { SectionShell } from "@/components/section-shell";
import { SkillBadge } from "@/components/skill-badge";

type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

type SkillsSectionProps = {
  groups: SkillGroup[];
  allSkills: string[];
};

export function SkillsSection({ groups, allSkills }: SkillsSectionProps) {
  return (
    <SectionShell id="skills" className="space-y-8">
      <SectionTitle
        eyebrow="Skills"
        title="核心技能与能力边界"
        description="围绕 AI 应用开发、RAG 检索增强、Agent 编排与后端工程能力建立自己的技术栈，保持设计表达与工程实现并重。"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{group.title}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">All Skills</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {allSkills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
