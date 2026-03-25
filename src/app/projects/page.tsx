import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Projects"
          title="项目展示"
          description="项目列表由本地数据文件统一管理，页面通过 map 渲染卡片，后续新增项目时只需要维护数据即可。"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
