import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SectionShell } from "@/components/section-shell";
import type { Project } from "@/types/project";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Projects"
          title="项目展示"
          description="围绕 RAG、Agent、业务系统改造和研究项目整理作品案例，强调问题拆解、系统实现与交付表达。"
        />
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--panel)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--panel-strong)]"
        >
          查看全部项目
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
