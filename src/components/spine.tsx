/**
 * The page title. From the md breakpoint up it is a vertical spine down the
 * left edge that stays put while the page scrolls. Below that it is a
 * masthead: ruled for the home page, a block of the project colour for a
 * case study.
 */
export function Spine({
  title,
  color,
}: {
  title: string;
  /** Set on case studies: the mobile masthead becomes a block of this colour. */
  color?: string;
}) {
  const words = title.split(" ");
  // The spine must fit the viewport height while sticky, so its size is also
  // capped by the title's length (about half an em per character).
  const fit = `calc((100vh - 80px) / ${Math.max(title.length, 6) * 0.5})`;

  return (
    <h1
      style={
        {
          "--spine-size": `min(11vw, 148px, ${fit})`,
          "--mast-color": color ?? "transparent",
        } as React.CSSProperties
      }
      className={[
        "m-0 font-semibold",
        color
          ? "-mx-4 bg-(--mast-color) px-4 pt-24 pb-5 text-[clamp(48px,15vw,64px)] leading-[0.88] tracking-[-0.055em]"
          : "border-b-2 border-ink pt-5 pb-5 text-[clamp(56px,18vw,76px)] leading-[0.84] tracking-[-0.06em]",
        "md:sticky md:top-10 md:mx-0 md:shrink-0 md:rotate-180 md:border-0 md:bg-transparent md:p-0",
        "md:text-[max(44px,var(--spine-size))] md:leading-[0.82] md:tracking-[-0.055em] md:whitespace-nowrap md:[writing-mode:vertical-rl]",
      ].join(" ")}
    >
      {color
        ? title
        : words.map((word, index) => (
            <span key={index}>
              {index > 0 && (
                <>
                  <br className="md:hidden" />
                  <span className="hidden md:inline"> </span>
                </>
              )}
              {word}
            </span>
          ))}
    </h1>
  );
}

/** Spine on the left, the page's column on the right. */
export function SpinePage({
  spine,
  children,
}: {
  spine: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto box-border max-w-[1280px] px-4 pb-16 md:flex md:items-start md:gap-12 md:px-8 md:pt-10 md:pb-24">
      {spine}
      {children}
    </div>
  );
}
