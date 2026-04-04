import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giga Technology | Futuristic Tech Company",
  description:
    "Giga Technology landing page demo built with Next.js, Tailwind CSS, and lightweight Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased scroll-smooth">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
