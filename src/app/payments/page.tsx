"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Animated payment flow diagram
function PaymentFlow({ inView }: { inView: boolean }) {
  const steps = [
    { label: "Invoice Created", icon: "📄", color: "#C5A059" },
    { label: "Approval Routing", icon: "✅", color: "#3b82f6" },
    { label: "AML Screening", icon: "🛡️", color: "#8b5cf6" },
    { label: "Partner Execution", icon: "🏦", color: "#10b981" },
    { label: "Settlement", icon: "💸", color: "#f59e0b" },
    { label: "Reconciliation", icon: "📊", color: "#C5A059" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">Payment Workflow — Africa ↔ Canada</div>
      <div className="space-y-3">
        {steps.map(({ label, icon, color }, i) => (
          <div key={label} className="flex items-center gap-3 transition-all duration-500"
            style={{opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)", transitionDelay: `${i * 150}ms`}}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{background: `${color}20`, border: `1px solid ${color}40`}}>
              {icon}
            </div>
            <div className="flex-1 h-10 rounded-xl flex items-center px-4 text-sm font-medium text-white/80"
              style={{background: `${color}10`, border: `1px solid ${color}20`}}>
              {label}
            </div>
            <div className="w-16 text-right">
              <div className="w-2 h-2 rounded-full ml-auto" style={{background: color}}>
                <div className="w-2 h-2 rounded-full animate-ping" style={{background: color, opacity: 0.5}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-white/30 text-xs">Avg settlement time</span>
        <span className="text-emerald-400 text-xs font-bold">1–3 business days</span>
      </div>
    </div>
  );
}

const CAPABILITIES = [
  { title: "Multi-Currency Support", desc: "Handle transactions across CAD, GHS, NGN, KES, USD, EUR, and GBP with real-time exchange rate awareness and settlement tracking.", icon: "💱", color: "#C5A059" },
  { title: "Approval Routing", desc: "Multi-level approval matrices with configurable thresholds, delegated authority, and full segregation of duties controls.", icon: "✅", color: "#10b981" },
  { title: "AML Integration", desc: "Anti-money laundering screening embedded at payment initiation — transaction monitoring, threshold alerts, and suspicious activity flagging.", icon: "🛡️", color: "#8b5cf6" },
  { title: "Settlement Tracking", desc: "Real-time visibility into payment status from initiation to settlement confirmation, with automated alerts on delays or exceptions.", icon: "📍", color: "#3b82f6" },
  { title: "FINTRAC Reporting", desc: "Automated generation of required FINTRAC reports — Large Cash Transaction Reports, Electronic Funds Transfer Reports, and STRs.", icon: "📋", color: "#f59e0b" },
  { title: "Audit Trail", desc: "Complete, tamper-evident audit trail for every payment — who initiated, who approved, what screening was done, and what the outcome was.", icon: "🔍", color: "#ef4444" },
  { title: "Partner Integration", desc: "Connect your licensed payment partners, banks, and gateways to a unified workflow — no need to switch between systems.", icon: "🔗", color: "#06b6d4" },
  { title: "Reconciliation Tools", desc: "Automated reconciliation workflows matching payments to invoices, flagging discrepancies, and generating reconciliation reports.", icon: "📊", color: "#ec4899" },
];

const CORRIDORS = [
  { from: "Canada", to: "Ghana", currency: "CAD → GHS", desc: "One of West Africa's most stable payment corridors with Bank of Ghana oversight.", color: "#C5A059" },
  { from: "Canada", to: "Nigeria", currency: "CAD → NGN", desc: "Africa's largest economy with active fintech ecosystem and CBN regulatory framework.", color: "#10b981" },
  { from: "Canada", to: "Kenya", currency: "CAD → KES", desc: "East Africa's financial hub with mobile money leadership and CBK governance.", color: "#3b82f6" },
  { from: "Canada", to: "Other Africa", currency: "CAD → Multiple", desc: "Togo, Benin, Guinea, Liberia, and other West and Central African corridors.", color: "#8b5cf6" },
];

const COMPLIANCE = [
  { label: "FINTRAC Aligned", desc: "All payment workflows designed to meet FINTRAC reporting and record-keeping obligations." },
  { label: "AML Controls", desc: "Transaction monitoring and suspicious activity detection at every payment step." },
  { label: "KYC Verified", desc: "Counterparty KYC verification before payment execution." },
  { label: "PIPEDA Compliant", desc: "All payment data handled in accordance with Canadian privacy legislation." },
  { label: "Audit Ready", desc: "Complete evidence packages for regulatory audits available on demand." },
  { label: "Licensed Partners Only", desc: "All payment execution through properly licensed and vetted providers." },
];

export default function PaymentsPage() {
  const heroSection = useInView(0.1);
  const capabilitiesSection = useInView();
  const corridorSection = useInView();
  const complianceSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Cross-Border Payments</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Multi-Currency Payment<br/>
                <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                  Infrastructure for Africa
                </span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Design, govern, and execute cross-border payment workflows through licensed partners — with AML, KYC, and FINTRAC compliance embedded at every step.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Start Free Trial
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {[
                  { value: "4+", label: "Active corridors" },
                  { value: "8", label: "Currencies supported" },
                  { value: "100%", label: "Audit trail coverage" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl font-bold text-amber-400">{value}</div>
                    <div className="text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <PaymentFlow inView={heroSection.inView} />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Capabilities</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">End-to-End Payment Infrastructure</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Eight capabilities covering every dimension of cross-border payment operations.</p>
          </div>
          <div ref={capabilitiesSection.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map(({ title, desc, icon, color }, i) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: capabilitiesSection.inView ? 1 : 0,
                  transform: capabilitiesSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${i * 60}ms`,
                  borderTop: `3px solid ${color}`,
                }}>
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="font-bold text-blue-950 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Payment Corridors</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Active Payment Corridors</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Corridor-specific payment expertise — licensed partners, regulatory alignment, and workflow design for each trade lane.</p>
          </div>
          <div ref={corridorSection.ref} className="grid md:grid-cols-2 gap-5">
            {CORRIDORS.map(({ from, to, currency, desc, color }, i) => (
              <div key={`${from}-${to}`} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300"
                style={{
                  opacity: corridorSection.inView ? 1 : 0,
                  transform: corridorSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${i * 100}ms`,
                }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm">{from}</span>
                    <span className="text-amber-400 text-lg">↔</span>
                    <span className="text-white font-bold text-sm">{to}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{background: `${color}20`, color}}>{currency}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
                <Link href="/contact" className="text-xs font-semibold flex items-center gap-1 transition-colors hover:opacity-80" style={{color}}>
                  Discuss this corridor
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Compliance</div>
            <h2 className="font-display text-4xl font-bold text-blue-950 mb-4">Compliance Built Into Every Payment</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Not compliance as an afterthought — compliance as the foundation of every payment workflow we design.</p>
          </div>
          <div ref={complianceSection.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE.map(({ label, desc }, i) => (
              <div key={label} className="flex gap-4 p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md hover:border-amber-200 transition-all"
                style={{
                  opacity: complianceSection.inView ? 1 : 0,
                  transform: complianceSection.inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.4s ease ${i * 80}ms`,
                }}>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-blue-950 text-sm mb-1">{label}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to build your payment corridor?</h2>
          <p className="text-white/60 mb-8 text-lg">Talk to our team about your specific corridor, volume, and compliance requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Request Demo
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              View Advisory Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



