import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import AIAdvisor from "@/components/AIAdvisor";

export const metadata: Metadata = {
  title: { default: "CorridorBridge — Cross-Border Infrastructure for Africa and Canada", template: "%s | CorridorBridge" },
  description: "CorridorBridge enables businesses, financial institutions, and government agencies to operate securely across Africa and Canada through payments, logistics, compliance, and digital infrastructure.",
  keywords: ["Africa Canada trade", "cross-border payments", "Africa Canada logistics", "trade infrastructure", "payment readiness", "fintech advisory", "cross-border compliance", "shipment tracking platform", "FINTRAC compliance", "AML KYC"],
  authors: [{ name: "CorridorBridge Advisory Inc." }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://corridorbridge.com",
    siteName: "CorridorBridge",
    title: "CorridorBridge — Cross-Border Infrastructure for Africa and Canada",
    description: "Move payments, shipments, compliance workflows, and business operations across borders through one trusted platform.",
    images: [{ url: "https://corridorbridge.com/og-image.png", width: 1200, height: 630, alt: "CorridorBridge" }],
  },
  twitter: { card: "summary_large_image", title: "CorridorBridge", description: "Cross-Border Infrastructure for Africa and Canada" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CorridorBridge Advisory Inc.",
          "url": "https://corridorbridge.com",
          "description": "Cross-border infrastructure platform connecting Africa and Canada",
          "foundingLocation": "Canada",
          "areaServed": ["Canada", "Africa"],
          "serviceType": ["Cross-Border Payments", "Trade Compliance", "Logistics Technology", "Advisory Services"],
        })}} />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <AIAdvisor />
      </body>
    </html>
  );
}



