import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import { Header } from "@/components/header-3";
import Footer from "@/components/footer";
import FloatingCounselling from "@/components/floating-counselling";
import { BRAND_DOMAIN, BRAND_NAME } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Abroad Consultancy in Nepal | Exact Education",
  description:
    "Exact Education is a trusted study abroad consultancy in Nepal helping students apply to top universities in Australia, UK, USA, Canada, and more. Get expert guidance today.",
  metadataBase: new URL(BRAND_DOMAIN),

  keywords: [
    "study abroad Nepal",
    "consultancy in Nepal",
    "student visa Nepal",
    "Australia study visa",
    "UK study consultancy",
    "abroad education Nepal",
  ],

  openGraph: {
    title: "Study Abroad Consultancy in Nepal | Exact Education",
    description:
      "Get expert guidance for studying abroad. Apply to top universities with Exact Education.",
    url: BRAND_DOMAIN,
    siteName: BRAND_NAME,
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <AOSProvider>
        {children}
        </AOSProvider>
         < Footer />
        <FloatingCounselling />
        </body>
    </html>
  );
}
