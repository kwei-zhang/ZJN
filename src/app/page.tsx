import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Go",
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-5 pt-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Kevin(Kaiwei) Zhang
        </h1>
        <p className="text-lg text-muted-foreground">
          AI/Full Stack developer &amp; Master of Engineering at University of Toronto
        </p>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          I build web applications and developer tools, with a focus on distributed systems, software security, and natural language processing. I enjoy designing reliable systems, exploring how software can be made safer, and building tools that improve the developer experience. This site collects my projects, experience, and writing.

        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/projects">
              View projects <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read the blog</Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 pt-1 text-muted-foreground">
          <a
            href="https://github.com/kaiwei"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/kaiwei"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </section>

      <Separator />

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
        I graduated from the University of Toronto with an Bachelor of Science degree in Computer Science, and I am currently pursuing a Master of Engineering in Electrical and Computer Engineering at the University of Toronto.
        <br />
        <br />
        My work and interests focus on artificial intelligence, natural language processing, and machine learning. I enjoy building practical software systems, exploring intelligent applications, and applying technical ideas to real-world problems.

        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
