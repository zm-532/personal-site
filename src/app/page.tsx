import Link from "next/link";

import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { projects } from "@/data/projects";
import { profile, skills } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-10 sm:py-16">
      <Hero {...profile} />

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Skills"
          title="核心技能"
          description="围绕现代前端工程、产品落地与协作开发组织技能栈，重点突出 React 生态、TypeScript 工程化与 UI 实现能力。"
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="space-y-6 rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
          <SectionTitle
            eyebrow="About"
            title="适合技术面试展示的作品集结构"
            description="首页突出价值主张，项目页展示案例深度，博客页承接技术输出，联系页提供清晰转化路径。"
          />
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--panel-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5"
          >
            Explore Blog Placeholder
          </Link>
        </div>

        <div className="space-y-8">
          <SectionTitle
            eyebrow="Selected Work"
            title="项目预览"
            description="首页的项目预览同样来自统一的数据文件，避免内容分散在多个组件中，便于长期维护。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="More Projects"
          title="更多项目与延展空间"
          description="后续你可以继续扩展项目案例、接入真实文章内容，或者增加工作经历与技能时间线。"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
