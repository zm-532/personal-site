import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Projects"
          title="项目展示"
          description="这里可以继续扩展更多项目卡片。每张卡片都包含标题、描述、技术栈和跳转链接，便于面试时快速展开。"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
