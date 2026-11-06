import { JetBrains_Mono, Onest, Source_Serif_4 } from "next/font/google";

export const fontSans = Onest({
  variable: "--font-family-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  adjustFontFallback: false,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const fontSerif = Source_Serif_4({
  variable: "--font-family-serif",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
});

export const fontMono = JetBrains_Mono({
  variable: "--font-family-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
