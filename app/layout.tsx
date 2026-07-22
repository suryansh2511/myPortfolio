import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data";

// Using a native system font stack (defined in tailwind.config.ts) instead of
// next/font/google. This avoids a render-blocking external font request,
// which keeps first paint fast and removes a network dependency at build
// time. If you'd rather use Inter + JetBrains Mono, see the README for the
// two-line swap.

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} — Software Engineer, Distributed Systems & Applied AI`,
  description:
    "Software Engineer in Seattle building distributed systems, cloud platforms, and GenAI products at scale — including Microsoft Copilot for M365 Admin Center.",
  keywords: [
    "Suryansh Kumar Pathak",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Cloud Engineer",
    "Applied AI Engineer",
    "GenAI",
    "Seattle Software Engineer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Software Engineer, Distributed Systems & Applied AI`,
    description:
      "Distributed systems, cloud platforms, and GenAI products at scale — 2M+ requests/day, 500K+ enterprise admins served.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Engineer`,
    description:
      "Distributed systems, cloud platforms, and GenAI products at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
