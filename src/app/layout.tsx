import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title:
    "Shadrach Oguejiofor Chukwuemeka — IT & Visual Communication Specialist",
  description:
    "Portfolio of Shadrach Oguejiofor Chukwuemeka, a BSc IT student in Accra, Ghana working across software development and visual communication design.",
  openGraph: {
    title:
      "Shadrach Oguejiofor Chukwuemeka — IT & Visual Communication Specialist",
    description:
      "BSc IT student in Accra, Ghana working across software development and visual communication design.",
    url: "https://kingshaddy.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
