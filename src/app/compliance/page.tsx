import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Compliance Hub", description: "Unified compliance management covering KYC, AML, FINTRAC, and risk screening for every Africa-Canada corridor transaction.", keywords: "cross-border compliance, KYC AML FINTRAC, Africa Canada compliance hub" };
export default function Page() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Compliance Hub</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">KYC, AML, and Regulatory Compliance for Cross-Border Operations</h1>
          <p className="text-white/60 text-xl max-w-2xl">Unified compliance management covering KYC, AML, FINTRAC, and risk screening for every Africa-Canada corridor transaction.</p>
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
            <div key="KYC Management" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">KYC Management</h3><p className="text-gray-500 text-sm leading-relaxed">Know Your Customer verification and ongoing monitoring workflows.</p></div>
            <div key="AML Controls" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">AML Controls</h3><p className="text-gray-500 text-sm leading-relaxed">Anti-money laundering screening and transaction monitoring.</p></div>
            <div key="FINTRAC Compliance" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">FINTRAC Compliance</h3><p className="text-gray-500 text-sm leading-relaxed">Financial Transactions and Reports Analysis Centre alignment.</p></div>
            <div key="Risk Screening" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Risk Screening</h3><p className="text-gray-500 text-sm leading-relaxed">Sanctions lists, PEP screening, and adverse media monitoring.</p></div>
            <div key="Governance Framework" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Governance Framework</h3><p className="text-gray-500 text-sm leading-relaxed">Policy documentation, approval workflows, and control testing.</p></div>
            <div key="Audit Support" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Audit Support</h3><p className="text-gray-500 text-sm leading-relaxed">Complete audit trails, evidence packages, and regulatory reporting.</p></div>
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
