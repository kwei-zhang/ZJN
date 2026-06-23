import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  formatDate,
  getAllPosts,
  getCategory,
  getPostBySlug,
} from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => {
    const [category, slug] = post.slug.split("/");
    return { category, slug };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(`${category}/${slug}`);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = getPostBySlug(`${category}/${slug}`);
  if (!post) notFound();

  const categoryLabel = getCategory(category)?.label ?? category;

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Link
          href={`/blog/${category}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to {categoryLabel}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <time
            dateTime={post.date}
            className="text-sm text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/${category}?tag=${encodeURIComponent(tag)}`}
              >
                <Badge
                  variant="outline"
                  className="transition-colors hover:bg-accent"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
