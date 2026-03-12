import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sedat İrtaş | AI-Powered Energy Solutions",
  description:
    "Full-Stack Developer specializing in AI autonomous agents for renewable energy infrastructure. Türkerler Holding digital transformation proposal.",
  keywords: [
    "AI",
    "autonomous agents",
    "renewable energy",
    "Türkerler",
    "full-stack developer",
    "Claude AI",
    "SCADA",
    "energy optimization",
  ],
  openGraph: {
    title: "Sedat İrtaş | AI-Powered Energy Solutions",
    description:
      "Transforming renewable energy operations with autonomous AI agents",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
