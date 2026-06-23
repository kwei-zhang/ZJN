import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/post-card";
import {
  getCategory,
  getPostsByCategory,
  getTagsForCategory,
} from "@/lib/posts";

export function generateStaticParams() {
  return getPostsByCategory().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const found = getCategory(category);
  if (!found) return {};
  return {
    title: found.label,
    description: `Posts in ${found.label}.`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { category } = await params;
  const { tag } = await searchParams;

  const found = getCategory(category);
  if (!found) notFound();

  const tags = getTagsForCategory(category);
  const posts = tag
    ? found.posts.filter((post) => post.tags.includes(tag))
    : found.posts;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All folders
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">{found.label}</h1>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Link href={`/blog/${category}`}>
            <Badge
              variant={tag ? "outline" : "default"}
              className="transition-colors"
            >
              All
            </Badge>
          </Link>
          {tags.map((t) => (
            <Link
              key={t}
              href={`/blog/${category}?tag=${encodeURIComponent(t)}`}
            >
              <Badge
                variant={tag === t ? "default" : "outline"}
                className="transition-colors"
              >
                {t}
              </Badge>
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts found for this tag.</p>
      ) : (
        <div className="grid gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
