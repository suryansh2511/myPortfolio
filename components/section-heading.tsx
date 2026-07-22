type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent-strong">{index}</span>
        <span className="h-px flex-1 max-w-12 bg-border" />
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-2xl font-medium tracking-tight text-ink sm:text-3xl text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}
