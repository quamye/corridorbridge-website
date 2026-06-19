import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Cross-Border Payments", description: "Design, govern, and optimize cross-border payment workflows through licensed partners with full compliance, visibility, and control.", keywords: "cross-border payments Africa Canada, multi-currency payments, payment workflow design" };
export default function Page() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Cross-Border Payments</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">Multi-Currency Payment Infrastructure for Africa-Canada Corridors</h1>
          <p className="text-white/60 text-xl max-w-2xl">Design, govern, and optimize cross-border payment workflows through licensed partners with full compliance, visibility, and control.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Request Demo</Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-8 py-3.5">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-4">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div key="Multi-Currency Support" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Multi-Currency Support</h3><p className="text-gray-500 text-sm leading-relaxed">Handle transactions across CAD, GHS, NGN, KES, USD, and other currencies.</p></div>
            <div key="Payment Workflow Design" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Payment Workflow Design</h3><p className="text-gray-500 text-sm leading-relaxed">End-to-end workflows from invoice approval to settlement reconciliation.</p></div>
            <div key="Settlement Tracking" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Settlement Tracking</h3><p className="text-gray-500 text-sm leading-relaxed">Real-time visibility into payment status, settlement, and confirmation.</p></div>
            <div key="Approval Routing" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Approval Routing</h3><p className="text-gray-500 text-sm leading-relaxed">Multi-level approval matrices with segregation of duties controls.</p></div>
            <div key="Compliance Integration" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Compliance Integration</h3><p className="text-gray-500 text-sm leading-relaxed">AML, KYC, and FINTRAC compliance embedded into every payment workflow.</p></div>
            <div key="Audit Readiness" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Audit Readiness</h3><p className="text-gray-500 text-sm leading-relaxed">Full transaction history and documentation for regulatory audit support.</p></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8">Talk to our team about your specific corridor requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Request Demo</Link>
            <Link href="/services" className="btn-outline px-8 py-3.5">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
