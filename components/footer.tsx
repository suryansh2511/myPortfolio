import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="font-mono">{site.location}</p>
      </div>
    </footer>
  );
}
