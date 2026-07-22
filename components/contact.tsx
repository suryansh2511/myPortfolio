import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="grid-fade">
      <div className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-strong">06 · Contact</p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{contact.subheading}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {contact.cta}
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
            >
              Resume
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
            <a href={site.email ? `mailto:${site.email}` : "#"} className="hover:text-ink">
              {site.email}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-ink"
            >
              <Github size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
