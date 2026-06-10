---
title: "Everything This Blog Can Render"
date: "2026-06-05"
description: "A kitchen-sink tour of the markdown features supported by this blog."
tags: ["meta", "markdown"]
---

This post is a living test of the markdown features this blog supports.

## Text formatting

You can write **bold**, *italic*, ~~strikethrough~~, and `inline code`. Links work too: [Next.js docs](https://nextjs.org/docs).

> Blockquotes are great for pulling out important ideas or quoting other people.

## Code blocks

Syntax highlighting works for most languages:

```typescript
type Post = {
  slug: string;
  title: string;
  tags: string[];
};

export function sortByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => (a.slug < b.slug ? 1 : -1));
}
```

```python
def fib(n: int) -> int:
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## Tables

| Feature        | Supported |
| -------------- | --------- |
| Tables         | Yes       |
| Task lists     | Yes       |
| Footnotes      | No        |

## Lists

1. Ordered lists
2. Work as expected
   - And can nest
   - Unordered items

- [x] GFM task lists
- [ ] are also supported

## Images

Images use standard markdown syntax and can point at files in `public/` or external URLs.
