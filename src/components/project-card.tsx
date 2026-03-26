import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-strong)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.55),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="space-y-5">
        <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
          Case Study
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{project.name}</h3>
        <p className="text-sm leading-7 text-[var(--muted)]">{project.description}</p>

        {project.highlights?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-1 text-xs text-[var(--foreground-soft)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-code)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--foreground-soft)] uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={project.githubLink}
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-code)]"
        >
          GitHub
        </Link>
        {project.demoLink ? (
          <Link
            href={project.demoLink}
            className="inline-flex items-center rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition duration-300 hover:opacity-90"
          >
            Live Demo
          </Link>
        ) : null}
      </div>
    </article>
  );
}
