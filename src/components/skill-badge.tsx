type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
      {label}
    </span>
  );
}
