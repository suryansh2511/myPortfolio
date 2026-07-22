import { SectionHeading } from "@/components/section-heading";
import { currentlyBuilding } from "@/lib/data";

export function CurrentlyBuilding() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="05"
          title="Currently Building"
          description="Where I'm spending my attention right now."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {currentlyBuilding.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border p-6">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
