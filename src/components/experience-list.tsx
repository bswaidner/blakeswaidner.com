import type { Experience } from "@/content/schema";

const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatMonth(month: string) {
  return monthFormat.format(new Date(`${month}-01T00:00:00Z`));
}

export function ExperienceList({ entries }: { entries: Experience[] }) {
  return (
    <ol className="flex flex-col gap-8">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.start}`} className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-medium">
              {entry.title}, {entry.company}
            </h3>
            <p className="text-sm text-muted-foreground tabular-nums">
              {formatMonth(entry.start)} to{" "}
              {entry.end ? formatMonth(entry.end) : "present"}
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{entry.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
