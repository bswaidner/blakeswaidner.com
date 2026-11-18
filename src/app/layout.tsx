import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  robots: site.launched ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-6 print:hidden">
            <Link href="/" className="font-medium">
              {site.name}
            </Link>
            <nav className="flex gap-5 text-sm text-muted-foreground">
              <Link href="/#work" className="hover:text-foreground">
                Work
              </Link>
              <Link href="/#experience" className="hover:text-foreground">
                Experience
              </Link>
              <Link href="/resume" className="hover:text-foreground">
                Resume
              </Link>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
