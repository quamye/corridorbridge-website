import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Blog & Resources", description: "CorridorBridge insights on cross-border payments, trade compliance, Africa-Canada logistics, and fintech advisory." };
const CATEGORIES = ["All", "Payments", "Compliance", "Logistics", "Advisory", "Trade Intelligence"];
export default function BlogPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Blog & Resources</div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-white/60 text-xl max-w-2xl">Insights, research, and practical guides on cross-border payments, compliance, and Africa-Canada trade.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(c => (
              <button key={c} className={`px-4 py-2 rounded-full text-xs font-semibold border-2 ${c === "All" ? "bg-blue-950 text-white border-blue-950" : "border-gray-200 text-gray-600 hover:border-blue-950 hover:text-blue-950"} transition-all`}>{c}</button>
            ))}
          </div>
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="font-bold text-blue-950 text-xl mb-2">Coming Soon</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">We are building our resource library. Subscribe to be notified when new content is published.</p>
            <Link href="/contact" className="btn-navy px-6 py-2.5 text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
