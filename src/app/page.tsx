import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { profile, projects, skills } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-14 sm:py-20">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-amber-800/10 bg-white/70 px-4 py-2 text-sm text-stone-700 shadow-sm">
            Available for frontend and full-stack opportunities
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Personal Intro</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
              {profile.name}
              <span className="mt-3 block text-2xl font-medium text-stone-600 sm:text-3xl">{profile.role}</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-stone-700">{profile.intro}</p>
            <p className="max-w-2xl text-base leading-7 text-stone-600">{profile.summary}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
            >
              查看项目
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
            >
              联系我
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_32px_120px_-60px_rgba(28,25,23,0.5)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">Highlights</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-4xl font-semibold text-stone-950">3+</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">可展示项目案例，覆盖产品原型、前端工程和全栈实践。</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-stone-950">TS</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">以 TypeScript 为主的工程习惯，重视类型安全和可维护性。</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-stone-950">UX</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">关注信息架构、交互反馈和面试展示场景下的表达效率。</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-stone-950">Static</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">采用静态导出，部署简单，适合 GitHub Pages 等托管平台。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Skills"
          title="核心技能"
          description="围绕现代前端工程、产品落地与协作开发组织自己的技能栈，方便面试官快速理解能力边界。"
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Selected Work"
          title="项目预览"
          description="精选 3 个适合面试讲述的项目，用于展示产品理解、工程能力和技术选型思路。"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
