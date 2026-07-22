import { ArrowUpRight, Download } from "lucide-react";
import { hero, site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="grid-fade relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-content px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <div className="animate-fadeUp">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent-strong">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctas[0].href}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-transform hover:scale-[1.03]"
            >
              <Download size={16} />
              {hero.ctas[0].label}
            </a>
            <a
              href={hero.ctas[1].href}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
            >
              {hero.ctas[1].label}
              <ArrowUpRight size={16} />
            </a>
            <a
              href={hero.ctas[2].href}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {hero.ctas[2].label}
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-8">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-fadeUp"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <dt className="font-mono text-2xl font-semibold text-ink sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-muted">
          Based in {site.location.split(",")[0]} · Open to backend, full-stack, cloud & applied AI roles
        </p>
      </div>
    </section>
  );
}
