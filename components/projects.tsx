import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="04"
          title="Projects"
          description="Selected builds — distributed systems and applied AI."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card-surface flex flex-col rounded-2xl p-6 transition-colors hover:border-accent/50 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                  <p className="mt-1 text-sm text-accent-strong">{project.tagline}</p>
                </div>
                {project.links?.[0] ? (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.impact.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Projects above are illustrative builds aligned with my professional focus — swap in your live
          repos and links in <code className="font-mono text-xs">lib/data.ts</code>.
        </p>
      </div>
    </section>
  );
}
