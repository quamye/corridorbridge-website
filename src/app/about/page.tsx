"use client";
import { useEffect, useRef, useState } from "react";
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

const PILLARS = [
  { icon: "🛡️", label: "Trust", desc: "Secure and credible payment operations built on documented evidence and governed controls." },
  { icon: "✅", label: "Compliance", desc: "Disciplined, well-governed practices aligned to FINTRAC, AML, KYC, and African regulatory obligations." },
  { icon: "⚡", label: "Efficiency", desc: "Streamlined workflows that improve speed, clarity, and operational reliability across corridors." },
  { icon: "🎯", label: "Control", desc: "Structures that strengthen accountability, approvals, and risk management at every step." },
  { icon: "🌍", label: "Connection", desc: "Stronger commercial and financial linkages between Africa and North America." },
];

const TIMELINE = [
  { year: "2023", title: "Founded in Canada", desc: "CorridorBridge Advisory Inc. incorporated in Canada with a mandate to bridge the cross-border infrastructure gap between Africa and Canada." },
  { year: "2024", title: "Platform Development", desc: "Development of the CorridorBridge compliance and operations platform begins, combining advisory expertise with enterprise technology." },
  { year: "2025", title: "Platform Launch", desc: "CorridorBridge Ops launched at app.corridorbridge.com — covering due diligence, policies, controls, incidents, and advisory workflows." },
  { year: "2025", title: "Corridor Expansion", desc: "Active corridors expanded to cover Ghana, Nigeria, and Kenya trade lanes with Canada, with additional corridors in development." },
  { year: "2026", title: "Enterprise Platform", desc: "Full enterprise platform released covering payments, logistics, compliance, analytics, risk management, and advisory services." },
];

const TEAM_VALUES = [
  { title: "We are independent", desc: "CorridorBridge is not affiliated with any specific payment provider, bank, or logistics company. Our independence means our advice serves your interests — not ours." },
  { title: "We are evidence-based", desc: "Every recommendation we make is backed by documentation, risk analysis, and regulatory research — not gut feel or vendor relationships." },
  { title: "We are enterprise-grade", desc: "We apply enterprise architecture, cybersecurity, and governance thinking to every engagement — regardless of client size." },
  { title: "We are corridor-focused", desc: "We focus exclusively on Africa-Canada cross-border operations. Depth over breadth. We know this corridor better than anyone." },
];

const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";

export default function AboutPage() {
  const timelineSection = useInView();
  const valuesSection = useInView();
  const pillarSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">About CorridorBridge</div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              The Trusted Bridge<br/>Between Business and<br/>
              <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                Cross-Border Infrastructure
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              CorridorBridge Advisory Inc. is incorporated in Canada, focused exclusively on enabling secure, compliant, and efficient cross-border operations between Africa and Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Work With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                View Services
              </Link>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "Canada", label: "Incorporated" },
              { value: "Africa-First", label: "Market Focus" },
              { value: "8", label: "Advisory Services" },
              { value: "2023", label: "Founded" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-amber-400">{value}</div>
                <div className="text-xs text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-lg hover:border-amber-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Vision</div>
              <p className="font-display text-2xl font-bold text-blue-950 leading-snug">
                To become the trusted cross-border infrastructure platform for secure, compliant, and efficient operations between Africa and North America.
              </p>
            </div>
            <div className="bg-blue-950 rounded-2xl p-10 text-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Mission</div>
              <p className="font-display text-2xl font-bold leading-snug">
                To enable businesses and institutions to operate confidently across borders through trusted partners, strong controls, and reliable infrastructure.
              </p>
            </div>
          </div>

          {/* What we are / are not */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-emerald-200 bg-emerald-50 rounded-2xl p-8">
              <div className="text-emerald-600 text-xs font-bold tracking-widest uppercase mb-4">What CorridorBridge Is</div>
              <ul className="space-y-3">
                {[
                  "A cross-border infrastructure platform for Africa-Canada operations",
                  "An advisory firm specializing in payment readiness and governance",
                  "A technology platform for compliance, due diligence, and controls",
                  "An independent advisor not affiliated with any payment provider",
                  "A Canadian-incorporated enterprise with African market expertise",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-8">
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">What CorridorBridge Is Not</div>
              <ul className="space-y-3">
                {[
                  "A bank, payment company, or money services business",
                  "A licensed money transmitter or regulated financial institution",
                  "A legal or regulatory compliance law firm",
                  "A freight forwarder or licensed logistics operator",
                  "An agent or representative of any specific payment provider",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">{DISCLAIMER}</p>
          </div>
        </div>
      </section>

      {/* Three-layer model */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Our Model</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">We Enable.<br/>We Do Not Replace.</h2>
              <p className="text-white/60 leading-relaxed mb-4 text-lg">
                CorridorBridge does not move money. We do not transmit funds or operate payment rails. We help organizations choose the right licensed partners, build the governance frameworks, and design the workflows that make every cross-border transaction defensible.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our strength lies in combining enterprise architecture, cybersecurity and controls, governance and policy, vendor assessment, and Africa-Canada commercial understanding in a single advisory engagement — connected to a live platform.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Layer 1 — The Money Movers", title: "Licensed PSPs, Banks & Gateways", sub: "Registered MSBs, Canadian PSPs, Ghana-licensed providers, SWIFT corridors", bg: "rgba(197,160,89,0.12)", border: "rgba(197,160,89,0.3)", color: "#C5A059" },
                { label: "Layer 2 — The Enabler", title: "CorridorBridge Advisory Inc.", sub: "Partner selection · Workflow design · Controls · Compliance · Advisory · Platform", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", color: "#10b981" },
                { label: "Layer 3 — The Operators", title: "Businesses & Institutions", sub: "Importers, exporters, SMEs, fintechs, NGOs, government agencies", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.12)", color: "white" },
              ].map(({ label, title, sub, bg, border, color }, i) => (
                <div key={label}>
                  {i > 0 && <div className="text-center text-amber-400/50 text-lg my-1">↕</div>}
                  <div className="rounded-2xl p-5" style={{background: bg, border: `1.5px solid ${border}`}}>
                    <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{color}}>{label}</div>
                    <div className="font-bold text-white">{title}</div>
                    <div className="text-white/40 text-xs mt-1 leading-relaxed">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Journey</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Building the Corridor</h2>
          </div>
          <div ref={timelineSection.ref} className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-300 to-gray-200"/>
              <div className="space-y-8">
                {TIMELINE.map(({ year, title, desc }, i) => (
                  <div key={i} className="flex gap-6 transition-all duration-500"
                    style={{opacity: timelineSection.inView ? 1 : 0, transform: timelineSection.inView ? "translateX(0)" : "translateX(-20px)", transitionDelay: `${i * 120}ms`}}>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-blue-950 flex items-center justify-center text-amber-400 font-bold text-xs shadow-lg z-10 relative">{year}</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 hover:shadow-md hover:border-amber-200 transition-all">
                      <h3 className="font-bold text-blue-950 mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Values</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">How We Work</h2>
          </div>
          <div ref={valuesSection.ref} className="grid md:grid-cols-2 gap-6">
            {TEAM_VALUES.map(({ title, desc }, i) => (
              <div key={title} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300"
                style={{opacity: valuesSection.inView ? 1 : 0, transform: valuesSection.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.4s ease ${i * 100}ms`}}>
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-amber-500"/>
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Core Principles</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">Five Pillars of Everything We Do</h2>
          </div>
          <div ref={pillarSection.ref} className="grid md:grid-cols-5 gap-4">
            {PILLARS.map(({ icon, label, desc }, i) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:border-amber-200 transition-all duration-300"
                style={{opacity: pillarSection.inView ? 1 : 0, transform: pillarSection.inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.4s ease ${i * 80}ms`}}>
                <div className="text-3xl mb-4">{icon}</div>
                <div className="font-bold text-blue-950 mb-2">{label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/60 mb-8 text-lg">Start with a 30-day free trial or book a discovery call to discuss your corridor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Start Free Trial
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



