import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

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
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,#fef3c7,transparent_28%),linear-gradient(180deg,#f8f5ef_0%,#f3efe7_100%)] text-stone-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
