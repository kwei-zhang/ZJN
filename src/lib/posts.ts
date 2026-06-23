import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  category: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Post = PostMeta & {
  content: string;
};

export type PostCategory = {
  slug: string;
  label: string;
  posts: PostMeta[];
};

// Turn a folder name into a URL-safe slug. Spaces and underscores become
// hyphens so a folder like "Machine Learning" maps to "machine-learning".
function slugify(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Turn a folder name into a display label. Hyphens/underscores become spaces
// and all-lowercase words are capitalized, while words that already carry
// casing (e.g. "CS336", "iOS") are left untouched.
function formatCategoryLabel(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) =>
      word === word.toLowerCase()
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word,
    )
    .join(" ");
}

// Map a category slug back to its real directory name on disk.
function getCategoryDir(slug: string): string | null {
  if (!fs.existsSync(postsDirectory)) return null;
  return (
    fs
      .readdirSync(postsDirectory)
      .filter((entry) =>
        fs.statSync(path.join(postsDirectory, entry)).isDirectory(),
      )
      .find((dir) => slugify(dir) === slug) ?? null
  );
}

function readPostFile(dir: string, file: string): PostMeta {
  const categorySlug = slugify(dir);
  const fileSlug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, dir, file), "utf8");
  const { data } = matter(raw);
  return {
    slug: `${categorySlug}/${fileSlug}`,
    category: categorySlug,
    title: data.title ?? fileSlug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const posts: PostMeta[] = [];
  for (const dir of fs.readdirSync(postsDirectory)) {
    const dirPath = path.join(postsDirectory, dir);
    if (!fs.statSync(dirPath).isDirectory()) continue;

    for (const file of fs.readdirSync(dirPath)) {
      if (!file.endsWith(".md")) continue;
      posts.push(readPostFile(dir, file));
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(): PostCategory[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const postsByCategory = new Map<string, PostMeta[]>();
  for (const post of getAllPosts()) {
    const list = postsByCategory.get(post.category) ?? [];
    list.push(post);
    postsByCategory.set(post.category, list);
  }

  const labels = new Map<string, string>();
  for (const dir of fs.readdirSync(postsDirectory)) {
    if (!fs.statSync(path.join(postsDirectory, dir)).isDirectory()) continue;
    labels.set(slugify(dir), formatCategoryLabel(dir));
  }

  return Array.from(postsByCategory.entries())
    .map(([slug, posts]) => ({
      slug,
      label: labels.get(slug) ?? formatCategoryLabel(slug),
      posts,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getCategory(slug: string): PostCategory | null {
  return getPostsByCategory().find((category) => category.slug === slug) ?? null;
}

export function getTagsForCategory(slug: string): string[] {
  const tags = new Set<string>();
  for (const post of getCategory(slug)?.posts ?? []) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}

export function getPostBySlug(slug: string): Post | null {
  const [categorySlug, ...rest] = slug.split("/");
  const fileSlug = rest.join("/");
  const dir = getCategoryDir(categorySlug);
  if (!dir || !fileSlug) return null;

  const fullPath = path.join(postsDirectory, dir, `${fileSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    category: categorySlug,
    title: data.title ?? fileSlug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
