import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Security", description: "Enterprise-grade security and compliance framework for cross-border operations. ISO 27001 aligned, NIST Cybersecurity Framework, AML, KYC, FINTRAC, and PIPEDA compliant." };
const FRAMEWORKS = [
  { name: "ISO 27001 Alignment", desc: "Information security management aligned to international standards." },
  { name: "NIST Cybersecurity Framework", desc: "Identify, Protect, Detect, Respond, Recover controls." },
  { name: "AML Controls", desc: "Anti-money laundering controls embedded in every workflow." },
  { name: "KYC Processes", desc: "Know Your Customer verification and ongoing monitoring." },
  { name: "FINTRAC Compliance", desc: "Financial Transactions and Reports Analysis Centre alignment." },
  { name: "PIPEDA Data Protection", desc: "Personal Information Protection and Electronic Documents Act." },
  { name: "Bank of Ghana Standards", desc: "Ghana payment and financial sector regulatory alignment." },
  { name: "FATF Recommendations", desc: "Financial Action Task Force 40 Recommendations framework." },
  { name: "Risk Management", desc: "Enterprise risk identification, assessment, and mitigation." },
  { name: "Audit Readiness", desc: "Documentation and evidence supporting regulatory audits." },
  { name: "Incident Response", desc: "Documented incident detection, response, and recovery processes." },
  { name: "Zero Trust Architecture", desc: "Least-privilege access and continuous verification model." },
];
export default function SecurityPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Security & Compliance</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">Security Built Into Every Transaction</h1>
          <p className="text-white/60 text-xl max-w-2xl">Enterprise-grade security and compliance aligned to international standards — protecting every payment, shipment, and data point.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-4">Our Security Framework</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Twelve pillars of enterprise security and compliance covering every dimension of cross-border operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FRAMEWORKS.map(({ name, desc }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-amber-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"/>
                  <h3 className="font-bold text-blue-950 text-sm">{name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Questions about our security?</h2>
          <p className="text-white/60 mb-8">Contact our team to discuss security requirements for your enterprise deployment.</p>
          <Link href="/contact" className="btn-primary px-8 py-3.5">Contact Security Team</Link>
        </div>
      </section>
    </>
  );
}
