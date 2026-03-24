type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-stone-600">{description}</p>
    </div>
  );
}
