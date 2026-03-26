import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionTitle } from "@/components/section-title";
import { getAllBlogTags, getPostsByTag } from "@/lib/blog";

type BlogTagPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateStaticParams() {
  const tags = await getAllBlogTags();

  return tags.map((tagItem) => ({
    tag: tagItem.tag
  }));
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Tag"
          title={decodedTag}
          description={`共 ${posts.length} 篇文章，围绕 ${decodedTag} 这个主题整理。`}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--panel),rgba(255,255,255,0.02))] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm text-[var(--accent)]">{post.date}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:gap-3"
              >
                Read Article
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
