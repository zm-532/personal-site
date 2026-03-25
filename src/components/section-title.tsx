type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-[var(--muted)]">{description}</p>
    </div>
  );
}
