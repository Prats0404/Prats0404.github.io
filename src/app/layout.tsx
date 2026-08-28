import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathvi V Suvarna — AI & Data Science Engineer",
  description:
    "Portfolio of Prathvi V Suvarna — AI & Data Science Engineer building production-grade systems across data engineering, full-stack development, and deep learning.",
  keywords: [
    "Prathvi V Suvarna",
    "AI Engineer",
    "Data Science",
    "Full-Stack Developer",
    "Portfolio",
    "Deep Learning",
    "React",
    "Python",
    "Kotlin",
  ],
  authors: [{ name: "Prathvi V Suvarna" }],
  openGraph: {
    title: "Prathvi V Suvarna — AI & Data Science Engineer",
    description:
      "Final-year B.E. AI & Data Science graduate building production-grade systems across data engineering, full-stack development, and deep learning.",
    url: "https://Prats0404.github.io",
    siteName: "Prathvi V Suvarna Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathvi V Suvarna — AI & Data Science Engineer",
    description:
      "Final-year B.E. AI & Data Science graduate building production-grade systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="antialiased">
        {/* Grain texture overlay */}
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
