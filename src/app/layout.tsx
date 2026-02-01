import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.localseoexpertskaty.com"),
  title: {
    default: "Local SEO Experts Katy | #1 Strategic Local SEO & GBP Authority",
    template: "%s | Local SEO Experts Katy"
  },
  description: "Boost your calls and foot traffic with Katy's leading Local SEO experts. Specialized in Google Business Profile optimization, Map Pack rankings, and semantic topical authority.",
  keywords: ["Local SEO Katy", "Google Business Profile Optimization", "Map Pack Ranking", "GMB Suspension Recovery", "Semantic SEO Katy", "Katy SEO Expert"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.localseoexpertskaty.com",
    siteName: "Local SEO Experts Katy",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Local SEO Experts Katy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Experts Katy | #1 Strategic Local SEO & GBP Authority",
    description: "Boost your calls and foot traffic with Katy's leading Local SEO experts.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-slate-900 selection:bg-primary/20 selection:text-primary`}>
        <Navbar />
        <main className="pt-20 lg:pt-24 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
