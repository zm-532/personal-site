import type { Metadata } from "next";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A clean portfolio site for personal branding and interviews."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              const storedTheme = window.localStorage.getItem("theme");
              const preferredTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
              document.documentElement.classList.toggle("dark", preferredTheme === "dark");
              document.documentElement.style.colorScheme = preferredTheme;
            })();
          `}
        </Script>
        <Navbar />
        <main className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),transparent_42%)] blur-3xl" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
