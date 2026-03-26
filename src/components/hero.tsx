import Link from "next/link";

type HeroProps = {
  name: string;
  role: string;
  intro: string;
  summary: string;
};

const metrics = [
  { label: "Focus", value: "AI Application Systems" },
  { label: "Method", value: "Design x Engineering" },
  { label: "Direction", value: "RAG / Agent Workflow" }
];

export function Hero({ name, role, intro, summary }: HeroProps) {
  return (
    <section className="section-reveal relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] px-6 py-12 shadow-[var(--shadow-soft)] sm:px-8 sm:py-16 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.55),transparent)]" />
      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_68%)]" />
      <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.14),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_70%)]" />

      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-soft)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
            Open to AI application and intelligent system opportunities
          </div>

          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--accent)]">Developer Portfolio</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              {name}
            </h1>
            <p className="max-w-3xl text-2xl font-medium tracking-[-0.03em] text-[var(--foreground-soft)] sm:text-3xl">
              {role}
            </p>
            <p className="max-w-3xl text-lg leading-8 text-[var(--foreground-soft)]">{intro}</p>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{summary}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f46e5_0%,#2563eb_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-18px_rgba(79,70,229,0.72)]"
            >
              项目展示
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--panel-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              联系我
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel-strong),transparent)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{metric.label}</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{metric.value}</p>
            </div>
          ))}

          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-code)] p-5 font-mono text-sm text-[var(--foreground-soft)]">
            <p className="text-[var(--accent)]">$ portfolio.ts</p>
            <p className="mt-3">{'const value = "build AI products with clear structure and stable delivery";'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
