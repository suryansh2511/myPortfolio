"use client";

import * as React from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium text-ink">
          SKP<span className="text-accent-strong">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-4 px-2">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
              <Github size={18} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
