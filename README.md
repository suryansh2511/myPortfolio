# Suryansh Kumar Pathak — Portfolio

A premium, technical portfolio built with Next.js 14 (App Router) and Tailwind CSS. Dark/light theme, mobile-first, SEO-ready, zero-dependency system fonts for fast first paint.

---

## 1. Brand positioning

**Positioning statement:** Backend and distributed-systems engineer who has taken that expertise into applied AI — shipping GenAI features (Microsoft Copilot for M365 Admin Center) on top of high-availability systems (2M+ requests/day, 99.95% uptime, sub-150ms P95). The pitch to recruiters: not "an AI engineer" and not "just a backend engineer" — someone who can own a distributed system end to end *and* ship the AI layer on top of it responsibly (with real evaluation and guardrails, via DeepEval/SEVAL).

This is the throughline for every section: **scale, reliability, and applied AI grounded in production systems experience.**

### Headline options (3)
1. **"Engineering backend systems that scale — and the AI that runs on them."** *(used on site)*
2. "Distributed systems engineer building the backbone of enterprise AI."
3. "I build backend platforms that run at scale — for millions of requests and 500K+ admins."

### Subheadline options (3)
1. **"I build distributed systems, cloud platforms, and GenAI products for millions of users — including Microsoft Copilot for M365 Admin Center, serving 500K+ enterprise administrators."** *(used on site)*
2. "3+ years designing high-availability backend systems (99.95% uptime, sub-150ms P95) and applied AI architectures — from fraud protection to enterprise Copilot experiences."
3. "Backend and cloud engineer turning distributed-systems expertise into production-grade GenAI platforms — 2M+ requests/day, 500K+ enterprise admins served."

To swap in an alternate headline/subheadline, edit `hero.headline` / `hero.subheadline` in `lib/data.ts` (the alternates are also listed there as `headlineOptions` / `subheadlineOptions`).

---

## 2. Site structure & section order

| # | Section | Purpose |
|---|---|---|
| — | Header (sticky) | Nav, GitHub/LinkedIn, theme toggle |
| 1 | Hero | Headline, subheadline, CTAs (Resume / Projects / Contact), scale stats |
| 2 | About | Concise bio, education |
| 3 | Experience | Microsoft (via HCLTech), Serigor, Softworld — impact-first bullets |
| 4 | Skills | Grouped by Languages & Frameworks, Cloud & Infra, Data & Messaging, Applied AI, Systems & Practice |
| 5 | Projects | 4 featured projects aligned to backend/distributed systems/GenAI |
| 6 | Currently Building | Areas of active focus (agentic RAG, AI eval, reliability) |
| 7 | Contact | Email CTA, resume download, GitHub/LinkedIn |
| — | Footer | Copyright, location |

All copy lives in **`lib/data.ts`** — a single source of truth. Edit text, links, and data there; no need to touch component files for content changes.

---

## 3. Design direction

**Palette** (defined via CSS variables in `app/globals.css`, theme-aware):

| Token | Dark | Light | Use |
|---|---|---|---|
| Canvas | `#0B0E14` | `#FAFAF8` | Page background |
| Surface | `#12161F` | `#F1F1EE` | Cards |
| Border | `#212734` | `#E3E3DE` | Dividers, card borders |
| Ink | `#E7E9EE` | `#0B0E14` | Primary text |
| Muted | `#8B93A7` | `#5B6270` | Secondary text |
| Accent | `#5EEAD4` / `#2DD4BF` (teal/mint) | same | Highlights, CTAs, section markers |

The accent is a cool teal — signals "technical" without tipping into generic SaaS blue or clichéd AI-purple.

**Typography:** system-native font stack (`-apple-system, Segoe UI, Roboto…` for body/headings; `ui-monospace, SF Mono, JetBrains Mono…` for labels, stats, and tags). This is a deliberate choice: it renders instantly with zero external font requests, which directly serves the "fast loading" goal. If you'd prefer Inter + JetBrains Mono from Google Fonts instead, see **Section 6: swapping in Google Fonts** below.

**Interaction:** subtle fade-up on hero load, hover states on links/cards/buttons, smooth scroll, sticky blurred header. No heavy animation libraries — kept deliberately minimal per the "premium, not flashy" brief.

---

## 4. Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, metadata/SEO, theme provider
│   ├── page.tsx           # Assembles all sections
│   ├── globals.css        # Theme variables, base styles
│   ├── sitemap.ts         # Auto-generated sitemap.xml
│   └── robots.ts          # Auto-generated robots.txt
├── components/             # One component per section + header/footer/theme toggle
├── lib/
│   └── data.ts             # ALL copy, links, and content — edit here
├── public/
│   └── resume.pdf          # PLACEHOLDER — replace with your real resume
├── tailwind.config.ts       # Colors, fonts, animations
└── package.json
```

---

## 5. Before you deploy — checklist

- [ ] Replace `public/resume.pdf` with your real resume (same filename, or update `site.resumeUrl` in `lib/data.ts`).
- [ ] Update `site.github` and `site.linkedin` in `lib/data.ts` with your real profile URLs.
- [ ] Confirm employment dates in `experience[].period` in `lib/data.ts` — placeholders are marked `// TODO: confirm exact dates`.
- [ ] Decide on featured projects: the four in `projects[]` are illustrative builds aligned to your resume (RAGForge, PulseGuard, DistribuQueue, LatencyLens). Replace with your real repos/links, or keep them as concept projects and mark them as such — just don't ship them as real repos if they don't exist yet.
- [ ] Set `site.domain` in `lib/data.ts` to your actual domain once registered (used in SEO metadata, sitemap, robots.txt).
- [ ] Add a real Open Graph image (`public/og.png`, 1200×630) and reference it in `app/layout.tsx` metadata for rich social previews. Optional but recommended.

---

## 6. Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

### Swapping in Google Fonts (optional)

The site ships with a system font stack for zero-network-dependency loading. To use Inter + JetBrains Mono instead:

1. In `app/layout.tsx`, add back:
   ```tsx
   import { Inter, JetBrains_Mono } from "next/font/google";
   const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
   const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
   ```
   and apply `${inter.variable} ${jetbrainsMono.variable}` to the `<body>` className.
2. In `tailwind.config.ts`, prepend `"var(--font-inter)"` to the `sans` array and `"var(--font-jetbrains)"` to the `mono` array.

---

## 7. Deployment

### Option A — Vercel (recommended)

Vercel is built by the Next.js team; it's the path of least resistance for App Router features (image optimization, edge functions, zero-config SSR) and has a generous free tier.

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset auto-detects as Next.js — leave build settings as default (`next build`).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in ~1 minute.
5. **Custom domain:** Project → Settings → Domains → add your domain → update your registrar's DNS (Vercel gives you the exact A/CNAME records). SSL is automatic.

CLI alternative:
```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### Option B — Netlify

1. Push to GitHub.
2. [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project** → select the repo.
3. Build command: `next build`. Publish directory: `.next`.
4. Add the **Next.js Runtime** plugin if prompted (Netlify auto-detects Next.js and installs `@netlify/plugin-nextjs`) — this handles SSR/ISR support automatically.
5. Deploy. Add a custom domain under **Domain settings** → **Add a domain**, then update DNS at your registrar (or use Netlify DNS).

CLI alternative:
```bash
npm i -g netlify-cli
netlify deploy --build
netlify deploy --build --prod
```

### Option C — GitHub Pages (static export)

GitHub Pages only serves static files, so you need to export the site statically. This portfolio has no server-side features (no API routes, no dynamic data), so static export works cleanly.

1. In `next.config.mjs`, add:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
   };
   ```
2. Build and export:
   ```bash
   npm run build
   ```
   Static files are output to `out/`.
3. Push `out/` to a `gh-pages` branch (or use the `gh-pages` npm package):
   ```bash
   npm i -D gh-pages
   npx gh-pages -d out
   ```
4. In your repo → **Settings → Pages** → set source to the `gh-pages` branch.
5. If deploying to a project page (`username.github.io/repo-name`), set `basePath: "/repo-name"` in `next.config.mjs`. If deploying to a user page (`username.github.io`) or a custom domain, skip `basePath`.
6. **Custom domain:** add a `CNAME` file to `public/` with your domain, then point your registrar's DNS at GitHub Pages (A records to GitHub's IPs, or CNAME to `username.github.io`).

**Trade-off to know:** GitHub Pages/static export means no server-side rendering or edge functions if you add dynamic features later (a blog CMS, a contact form backend, etc.). Vercel or Netlify won't have that limitation.

---

## 8. Domain ideas

Availability changes constantly — verify at a registrar (Namecheap, Google Domains successor Squarespace Domains, Cloudflare Registrar) before committing.

- `suryanshpathak.dev`
- `suryanshpathak.com`
- `skpathak.dev`
- `suryansh.dev`
- `pathak.dev`
- `skp.engineer`
- `suryanshkumar.dev`
- `hisuryansh.com`

`.dev` reads as technical/credible for an engineering audience and is the most idiomatic choice for a software engineer's portfolio; `.com` is the safer, more universally recognized fallback if you want something recruiters will type from memory.

---

## 9. Future improvements

Roadmap ideas to extend this into a stronger, more durable personal brand asset:

- **Blog / writing.** Add an `app/blog/[slug]/page.tsx` route with MDX for technical posts (distributed systems patterns, GenAI eval lessons, postmortems). This is one of the highest-leverage additions for engineering credibility — recruiters and hiring managers read them, and they're strong SEO/backlink material.
- **Architecture case studies.** A dedicated deep-dive page per major system (e.g. "How we evaluate GenAI responses at scale with DeepEval + SEVAL," "Designing a fraud-scoring pipeline for sub-200ms latency"). Diagrams + trade-off discussion, not just bullet points — this is what senior/staff-track interviewers actually want to see.
- **Project deep dives.** Expand each featured project into its own page: problem, architecture diagram, key decisions, what you'd do differently. Link from the Projects section card.
- **Testimonials/recommendations.** Short pull-quotes from managers or peers (with permission), placed near Experience.
- **Analytics.** Add privacy-respecting analytics (Vercel Analytics or Plausible) to see which sections get attention.
- **Contact form.** Replace the `mailto:` CTA with a real form (Formspree, Resend, or a simple API route) if you want submissions without exposing your inbox address directly.
- **Command palette / quick nav.** A `Cmd+K` menu (using `cmdk`) for fast section jumping — a nice "this person sweats details" signal for a technical audience.
- **OG image generation.** Use `next/og` to auto-generate social preview cards per page (especially valuable once the blog exists).

---

## 10. Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · next-themes · lucide-react

No component libraries, no animation frameworks, no font CDN dependency — kept intentionally lean for load speed and long-term maintainability.
