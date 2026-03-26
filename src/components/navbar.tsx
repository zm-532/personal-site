import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--bg-header)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium text-[var(--foreground)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)]">
            ZM
          </span>
          <span className="tracking-[0.24em] uppercase text-[var(--muted)]">Portfolio</span>
        </Link>

        <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
          <nav className="flex flex-1 items-center gap-1 overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 md:flex-none">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm text-[var(--muted)] transition duration-300 hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
