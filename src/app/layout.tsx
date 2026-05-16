import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohanarao Gorle | Full Stack Developer",
  description:
    "Full Stack MERN Developer crafting clean, scalable, and modern web experiences. Based in Hyderabad, India.",
  keywords: [
    "Mohanarao Gorle",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Web Developer Hyderabad",
  ],
  authors: [{ name: "Mohanarao Gorle" }],
  openGraph: {
    title: "Mohanarao Gorle | Full Stack Developer",
    description: "Crafting clean, scalable, and modern web experiences.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
