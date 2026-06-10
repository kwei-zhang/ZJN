# Personal Website

A personal website built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Pages

- `/` — bio, about, and skills
- `/projects` — project cards (edit `src/lib/projects.ts`)
- `/experience` — experience timeline (edit `src/lib/experience.ts`)
- `/blog` — markdown blog with tag filtering

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a blog post

Add a markdown file to `content/blog/`. The filename becomes the URL slug.

```markdown
---
title: "My Post Title"
date: "2026-06-09"
description: "One-line summary shown on the blog index."
tags: ["tag1", "tag2"]
---

Post content in markdown...
```

Posts support GitHub-flavored markdown (tables, task lists) and syntax-highlighted code blocks.

## Customizing

- Name, social links: `src/components/site-nav.tsx`, `src/components/site-footer.tsx`, `src/app/page.tsx`
- Projects: `src/lib/projects.ts`
- Experience: `src/lib/experience.ts`
