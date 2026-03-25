export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ZM Portfolio. Built with Next.js and Tailwind CSS.</p>
        <p>Static export ready for GitHub Pages, Netlify, and Vercel.</p>
      </div>
    </footer>
  );
}
