import type { Metadata } from "next";
import type { ReactNode } from "react";

import { site } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteStructuredData } from "@/lib/structured-data";

import { fontMono, fontSans, fontSerif } from "./fonts";
import { MotionProvider } from "./motion-provider";
import { ThemeProvider } from "./theme-provider";

import "./globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  ...pageMetadata({
    title: site.title,
    description: site.description,
    path: "/",
  }),
  title: { default: site.title, template: `%s — ${site.name}` },
  applicationName: site.name,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={site.language}
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd data={siteStructuredData()} />
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
