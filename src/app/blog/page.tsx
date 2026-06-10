import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/post-card";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about software, school, and whatever I'm learning.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getAllPosts();
  const tags = getAllTags();
  const posts = tag
    ? allPosts.filter((post) => post.tags.includes(tag))
    : allPosts;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Writing about software, school, and whatever I&apos;m learning.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/blog">
          <Badge
            variant={tag ? "outline" : "default"}
            className="transition-colors"
          >
            All
          </Badge>
        </Link>
        {tags.map((t) => (
          <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`}>
            <Badge
              variant={tag === t ? "default" : "outline"}
              className="transition-colors"
            >
              {t}
            </Badge>
          </Link>
        ))}
      </div>

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
