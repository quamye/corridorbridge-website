import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CorridorBridge Advisory — Regulatory-Ready Cross-Border Payment Enablement",
  description: "CorridorBridge Advisory helps businesses and fintechs build secure, compliant, and efficient cross-border payment operations between Africa and North America using trusted licensed partners.",
  keywords: "cross-border payments, Africa Canada payments, FINTRAC compliance, payment advisory, fintech advisory, Ghana Canada payments",
  openGraph: {
    title: "CorridorBridge Advisory",
    description: "Regulatory-Ready Cross-Border Payment Enablement for Africa, Canada, and the World.",
    type: "website",
    url: "https://corridorbridge.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
