import type { Metadata } from "next";

import { ExperienceItem } from "@/components/experience-item";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "My work and teaching experience.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="text-muted-foreground">
          Where I&apos;ve worked and what I&apos;ve done.
        </p>
      </div>
      <ol>
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.role}-${experience.organization}`}
            experience={experience}
          />
        ))}
      </ol>
    </div>
  );
}
