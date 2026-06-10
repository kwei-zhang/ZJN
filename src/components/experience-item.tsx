import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/experience";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <li className="group relative pb-10 pl-8 last:pb-0">
      {/* timeline line + dot */}
      <span className="absolute top-1.5 left-0 size-3 rounded-full border-2 border-primary bg-background" />
      <span
        aria-hidden
        className="absolute top-5 left-[5px] h-full w-px bg-border group-last:hidden"
      />

      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-semibold">
            {experience.role}{" "}
            <span className="font-normal text-muted-foreground">
              · {experience.organization}
            </span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {experience.start} – {experience.end}
          </p>
        </div>
        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5" />
          {experience.location}
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {experience.tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </li>
  );
}
