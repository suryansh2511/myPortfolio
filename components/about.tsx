import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="01" title="About" description="Backend by trade, AI by necessity." />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 self-start card-surface rounded-2xl p-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</span>
            {about.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
