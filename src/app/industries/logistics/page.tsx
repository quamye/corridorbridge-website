import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Logistics — Industry Solutions", description: "CorridorBridge cross-border infrastructure solutions for Freight and logistics providers operating between Africa and Canada." };
export default function IndustryPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industry</div>
          <h1 className="font-display text-5xl font-bold text-white mb-6">Logistics</h1>
          <p className="text-white/60 text-xl max-w-2xl">Cross-border infrastructure solutions built for Freight and logistics providers operating between Africa and Canada.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Talk to an Expert</Link>
            <Link href="/solutions" className="btn-outline px-8 py-3.5">View All Solutions</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-blue-950 mb-4">Solutions for Logistics</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">Detailed industry content coming soon. Contact us to discuss your specific requirements.</p>
          <Link href="/contact" className="btn-navy px-8 py-3.5">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
