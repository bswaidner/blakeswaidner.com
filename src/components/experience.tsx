import type { Experience } from "@/content/schema";

function years(entry: Experience) {
  const start = entry.start.slice(0, 4);
  if (!entry.end) return `${start}–now`;
  const end = entry.end.slice(0, 4);
  return end === start ? start : `${start}–${end.slice(2)}`;
}

/** The home page's experience table: years, company, title. */
export function ExperienceRows({ entries }: { entries: Experience[] }) {
  return (
    <div className="flex flex-col tabular-nums">
      {entries.map((entry) => (
        <div
          key={`${entry.company}-${entry.start}`}
          className="flex flex-wrap gap-x-6 gap-y-1 border-t border-rule py-3.5 text-lg"
        >
          <span className="shrink-0 grow-0 basis-[150px] text-muted-foreground">
            {years(entry)}
          </span>
          <span className="shrink grow basis-[180px] font-semibold">
            {entry.company}
          </span>
          <span className="shrink grow-[2] basis-[220px]">{entry.title}</span>
        </div>
      ))}
    </div>
  );
}

/** The resume's fuller version, with each role's summary and highlights. */
export function ExperienceDetail({ entries }: { entries: Experience[] }) {
  return (
    <div className="flex flex-col tabular-nums">
      {entries.map((entry) => (
        <div
          key={`${entry.company}-${entry.start}`}
          className="break-inside-avoid border-t border-rule py-5"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
            <span className="shrink-0 grow-0 basis-[150px] text-muted-foreground">
              {years(entry)}
            </span>
            <span className="shrink grow basis-[180px] font-semibold">
              {entry.company}
            </span>
            <span className="shrink grow-[2] basis-[220px]">{entry.title}</span>
          </div>
          <p className="mt-2 max-w-[680px] text-muted-foreground">
            {entry.summary}
          </p>
          <ul className="mt-2 max-w-[680px] list-disc space-y-1 pl-5">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
