import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="03" title="Skills" description="Tools I reach for, grouped by purpose." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label} className="card-surface rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
