import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about software, school, and whatever I'm learning.",
};

export default function BlogPage() {
  const categories = getPostsByCategory();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Writing about software, school, and whatever I&apos;m learning.
        </p>
      </div>

      {categories.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="relative transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <Link
                    href={`/blog/${category.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {category.label}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription>
                  {category.posts.length}{" "}
                  {category.posts.length === 1 ? "post" : "posts"}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
