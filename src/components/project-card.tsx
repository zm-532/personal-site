import Link from "next/link";

import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(28,25,23,0.45)] transition hover:-translate-y-1">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-stone-900">{project.title}</h3>
        <p className="text-sm leading-7 text-stone-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium tracking-wide text-stone-700 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={project.href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-stone-900 underline decoration-amber-600 underline-offset-4"
      >
        查看项目
      </Link>
    </article>
  );
}
