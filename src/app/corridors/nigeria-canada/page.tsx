import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Nigeria ↔ Canada Corridor", description: "The Nigeria-Canada corridor connects Africa's largest economy with Canadian markets. Complex compliance requirements and payment infrastructure demands make expert advisory essential.", keywords: "Nigeria Canada trade, Nigeria Canada payments, Nigeria Canada corridor" };
export default function CorridorPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Corridor</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Nigeria ↔ Canada Corridor</h1>
          <p className="text-white/60 text-xl max-w-2xl">The Nigeria-Canada corridor connects Africa's largest economy with Canadian markets. Complex compliance requirements and payment infrastructure demands make expert advisory essential.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Discuss This Corridor</Link>
            <Link href="/services" className="btn-outline px-8 py-3.5">View Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {["Payments", "Compliance", "Logistics", "Advisory"].map(s => (
              <div key={s} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-amber-200 transition-all">
                <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">{s}</div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{s} for {"Nigeria ↔ Canada Corridor"}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Expert {s.toLowerCase()} services tailored specifically for this corridor's regulatory requirements, licensed partners, and operational characteristics.</p>
                <Link href="/contact" className="text-amber-600 text-xs font-semibold mt-4 inline-flex items-center gap-1 hover:text-amber-700">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to operate on this corridor?</h2>
          <p className="text-white/60 mb-8">Talk to our corridor specialists today.</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">Book a Corridor Consultation</Link>
        </div>
      </section>
    </>
  );
}
