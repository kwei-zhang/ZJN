import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kaiwei Zhang
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/kaiwei"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/kaiwei"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
