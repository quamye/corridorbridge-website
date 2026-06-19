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

function ShipmentTracker({ inView }: { inView: boolean }) {
  const stages = [
    { label: "Origin — Accra, Ghana", status: "Departed", time: "Jun 12, 09:14", done: true },
    { label: "Port of Tema", status: "Cleared Customs", time: "Jun 13, 14:30", done: true },
    { label: "Atlantic Transit", status: "In Transit", time: "Jun 14 – Jun 21", done: false, active: true },
    { label: "Port of Montreal", status: "Pending Arrival", time: "Est. Jun 22", done: false },
    { label: "Customs Clearance — Canada", status: "Pending", time: "Est. Jun 23", done: false },
    { label: "Destination — Toronto, ON", status: "Pending Delivery", time: "Est. Jun 24", done: false },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">Live Shipment — CB-2026-0847</div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"/>
          <span className="text-amber-400 text-xs font-medium">In Transit</span>
        </div>
      </div>
      <div className="space-y-3">
        {stages.map(({ label, status, time, done, active }, i) => (
          <div key={label} className="flex gap-3 transition-all duration-500"
            style={{opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(20px)", transitionDelay: `${i * 120}ms`}}>
            <div className="flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                done ? "bg-emerald-500" : active ? "bg-amber-500 animate-pulse" : "bg-white/10"
              }`}>
                {done ? (
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                ) : active ? (
                  <div className="w-2 h-2 rounded-full bg-white"/>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/30"/>
                )}
              </div>
              {i < stages.length - 1 && <div className={`w-0.5 flex-1 mt-1 ${done ? "bg-emerald-500/40" : "bg-white/10"}`} style={{minHeight: "12px"}}/>}
            </div>
            <div className={`pb-3 flex-1 ${i < stages.length - 1 ? "border-b border-white/5" : ""}`}>
              <div className={`text-xs font-semibold ${done ? "text-white" : active ? "text-amber-400" : "text-white/30"}`}>{label}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] font-bold ${done ? "text-emerald-400" : active ? "text-amber-300" : "text-white/20"}`}>{status}</span>
                <span className="text-[10px] text-white/20">{time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-xl p-3">
          <div className="text-white/30 text-[10px] mb-1">Cargo Type</div>
          <div className="text-white text-xs font-semibold">General Merchandise</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <div className="text-white/30 text-[10px] mb-1">Payment Status</div>
          <div className="text-emerald-400 text-xs font-semibold">Settled ✓</div>
        </div>
      </div>
    </div>
  );
}

const CAPABILITIES = [
  { title: "Real-Time Status", desc: "Live shipment status updates across all Africa-Canada trade lanes — from origin departure to final delivery confirmation.", icon: "📍", color: "#C5A059" },
  { title: "Multi-Modal Tracking", desc: "Track shipments across sea freight, air freight, road, and rail — all in one unified dashboard.", icon: "🚢", color: "#10b981" },
  { title: "Exception Management", desc: "Proactive alerts for delays, customs holds, route deviations, and other exceptions — before they become problems.", icon: "⚠️", color: "#f59e0b" },
  { title: "Document Management", desc: "Bill of lading, commercial invoices, certificates of origin, and customs documentation — stored and linked to each shipment.", icon: "📄", color: "#3b82f6" },
  { title: "Payment Linkage", desc: "Connect shipment milestones to payment triggers — release payment on delivery confirmation, customs clearance, or other events.", icon: "🔗", color: "#8b5cf6" },
  { title: "Partner Integration", desc: "Connect freight forwarders, customs brokers, carriers, and logistics partners to your unified tracking dashboard.", icon: "🤝", color: "#ef4444" },
  { title: "Compliance Documentation", desc: "Auto-generate compliance documentation required for cross-border shipments — customs declarations, regulatory certificates, AML evidence.", icon: "✅", color: "#06b6d4" },
  { title: "Analytics & Reporting", desc: "Shipment performance analytics by corridor, carrier, route, and time period — identify bottlenecks and optimize operations.", icon: "📊", color: "#ec4899" },
];

const CORRIDORS = [
  { route: "Ghana → Canada", mode: "Sea & Air", time: "10–21 days (sea) / 2–4 days (air)", ports: "Tema → Montreal / Halifax" },
  { route: "Nigeria → Canada", mode: "Sea & Air", time: "12–25 days (sea) / 2–4 days (air)", ports: "Apapa → Montreal / Vancouver" },
  { route: "Kenya → Canada", mode: "Sea & Air", time: "18–30 days (sea) / 3–5 days (air)", ports: "Mombasa → Montreal / Halifax" },
  { route: "Canada → Africa", mode: "Sea & Air", time: "10–30 days (sea) / 2–5 days (air)", ports: "Montreal / Vancouver → Multiple" },
];

export default function ShipmentTrackingPage() {
  const heroSection = useInView(0.1);
  const capabilitiesSection = useInView();
  const corridorSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Shipment Tracking</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Real-Time Logistics<br/>
                <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                  Visibility Across Africa
                </span><br/>
                and Canada
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Monitor every shipment from origin to destination with live status updates, exception management, and compliance documentation — connected to your payment workflows.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
                  Start Free Trial
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {[
                  { value: "4+", label: "Active corridors" },
                  { value: "Live", label: "Status updates" },
                  { value: "100%", label: "Document coverage" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl font-bold text-amber-400">{value}</div>
                    <div className="text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <ShipmentTracker inView={heroSection.inView} />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Capabilities</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-950 mb-4">End-to-End Shipment Visibility</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Eight capabilities covering every dimension of cross-border logistics tracking.</p>
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

      {/* Corridor routes */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Trade Lanes</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Active Shipment Corridors</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Corridor-specific logistics knowledge — transit times, ports, and operational requirements for each trade lane.</p>
          </div>
          <div ref={corridorSection.ref} className="grid md:grid-cols-2 gap-5">
            {CORRIDORS.map(({ route, mode, time, ports }, i) => (
              <div key={route} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: corridorSection.inView ? 1 : 0,
                  transform: corridorSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${i * 100}ms`,
                }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-amber-400"/>
                  <h3 className="font-bold text-white">{route}</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Transport Mode", value: mode },
                    { label: "Transit Time", value: time },
                    { label: "Key Ports", value: ports },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4">
                      <span className="text-white/40 text-xs flex-shrink-0">{label}</span>
                      <span className="text-white/80 text-xs text-right font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-5 text-amber-400 text-xs font-semibold flex items-center gap-1 hover:text-amber-300 transition-colors">
                  Track on this corridor
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment + logistics integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Unique Integration</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-950 mb-6">Shipments Connected to Payments</h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-lg">Most platforms treat logistics and payments as separate systems. CorridorBridge connects them — shipment milestones can trigger payment actions, and payment status is visible alongside shipment status.</p>
              <p className="text-gray-500 leading-relaxed mb-6">Release payment on customs clearance. Hold payment on shipment exception. Reconcile automatically on delivery confirmation. All from one dashboard.</p>
              <div className="space-y-3">
                {[
                  "Payment release on customs clearance confirmation",
                  "Payment hold triggered by shipment exception",
                  "Auto-reconciliation on delivery confirmation",
                  "Combined audit trail for shipment and payment",
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-5">Integration Flow</div>
              <div className="space-y-3">
                {[
                  { step: "Shipment Departs", action: "Payment initiated", color: "#C5A059" },
                  { step: "Customs Cleared", action: "Payment approved", color: "#10b981" },
                  { step: "Port Arrival", action: "Settlement triggered", color: "#3b82f6" },
                  { step: "Delivery Confirmed", action: "Auto-reconciliation", color: "#8b5cf6" },
                ].map(({ step, action, color }) => (
                  <div key={step} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: color}}/>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-blue-950">{step}</div>
                    </div>
                    <div className="text-xs font-semibold" style={{color}}>→ {action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to track your corridor?</h2>
          <p className="text-white/60 mb-8 text-lg">Get full visibility into your Africa-Canada shipments — connected to payments and compliance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Request Demo
            </Link>
            <Link href="https://app.corridorbridge.com/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
