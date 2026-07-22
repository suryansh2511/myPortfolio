import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="02"
          title="Experience"
          description="Systems shipped at enterprise scale."
        />

        <div className="space-y-14">
          {experience.map((job) => (
            <div key={job.company} className="grid gap-6 lg:grid-cols-[220px_1fr]">
              <div>
                <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
                <p className="mt-1 text-sm text-accent-strong">{job.role}</p>
                <p className="mt-3 font-mono text-xs text-muted">{job.period}</p>
                <p className="font-mono text-xs text-muted">{job.location}</p>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {job.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[15px]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
