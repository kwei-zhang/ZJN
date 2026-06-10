import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built.",
};

export default function ProjectsPage() {
  const personalProjects = projects.filter((p) => p.category === "personal");
  const courseProjects = projects.filter((p) => p.category === "course");

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          A selection of things I&apos;ve built.
        </p>
      </div>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Personal Projects
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Course Projects
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {courseProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
