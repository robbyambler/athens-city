import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Fraunces, variable across the full 100–900 weight axis. A serif with some
// mass in it, so the headlines still hold at text-8xl. The default display
// weight (600) is set on `.font-display` in globals.css.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "#NoPlaceLeft Athens",
  description:
    "A church planting strategy for Athens, Greece, built on the No Place Left framework: evangelism to multiplication, seven districts surveyed, and the distance to a sustained gospel presence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
