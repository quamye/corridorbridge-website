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

// ─── Demo Shipment Data ─────────────────────────────────────────────────────
const DEMO_SHIPMENTS: Record<string, {
  id: string; origin: string; destination: string; cargo: string;
  corridor: string; carrier: string; vessel: string;
  eta: string; payment: string; stages: { label: string; status: string; time: string; done: boolean; active: boolean }[];
}> = {
  "CB-2026-0847": {
    id: "CB-2026-0847", origin: "Accra, Ghana", destination: "Montreal, Canada",
    cargo: "General Merchandise", corridor: "Ghana ↔ Canada",
    carrier: "Maersk Line", vessel: "Maersk Helsinki", eta: "June 24, 2026",
    payment: "Settled — CAD 42,500",
    stages: [
      { label: "Origin — Accra, Ghana", status: "Departed", time: "Jun 12, 09:14", done: true, active: false },
      { label: "Port of Tema — Export", status: "Customs Cleared", time: "Jun 13, 14:30", done: true, active: false },
      { label: "Atlantic Ocean Transit", status: "In Transit", time: "Jun 14 – Jun 21", done: false, active: true },
      { label: "Port of Montreal — Arrival", status: "Pending Arrival", time: "Est. Jun 22", done: false, active: false },
      { label: "Canada Customs Clearance", status: "Pending", time: "Est. Jun 23", done: false, active: false },
      { label: "Destination — Montreal, QC", status: "Pending Delivery", time: "Est. Jun 24", done: false, active: false },
    ],
  },
  "CB-2026-1203": {
    id: "CB-2026-1203", origin: "Lagos, Nigeria", destination: "Toronto, Canada",
    cargo: "Industrial Equipment", corridor: "Nigeria ↔ Canada",
    carrier: "MSC", vessel: "MSC Anastasia", eta: "July 3, 2026",
    payment: "In Transit — CAD 118,000",
    stages: [
      { label: "Origin — Lagos, Nigeria", status: "Departed", time: "Jun 10, 07:00", done: true, active: false },
      { label: "Apapa Port — Export", status: "Customs Cleared", time: "Jun 11, 16:45", done: true, active: false },
      { label: "Atlantic Ocean Transit", status: "In Transit", time: "Jun 12 – Jul 1", done: false, active: true },
      { label: "Port of Halifax — Arrival", status: "Pending Arrival", time: "Est. Jul 2", done: false, active: false },
      { label: "Canada Customs Clearance", status: "Pending", time: "Est. Jul 2", done: false, active: false },
      { label: "Destination — Toronto, ON", status: "Pending Delivery", time: "Est. Jul 3", done: false, active: false },
    ],
  },
  "CB-2026-0521": {
    id: "CB-2026-0521", origin: "Nairobi, Kenya", destination: "Vancouver, Canada",
    cargo: "Agricultural Products — Tea", corridor: "Kenya ↔ Canada",
    carrier: "CMA CGM", vessel: "CMA CGM Palais Royal", eta: "June 30, 2026",
    payment: "Settled — CAD 28,750",
    stages: [
      { label: "Origin — Nairobi, Kenya", status: "Departed", time: "Jun 5, 06:30", done: true, active: false },
      { label: "Port of Mombasa — Export", status: "Customs Cleared", time: "Jun 6, 11:20", done: true, active: false },
      { label: "Indian Ocean → Suez → Atlantic", status: "In Transit", time: "Jun 7 – Jun 28", done: false, active: true },
      { label: "Port of Vancouver — Arrival", status: "Pending Arrival", time: "Est. Jun 29", done: false, active: false },
      { label: "Canada Customs Clearance", status: "Pending", time: "Est. Jun 29", done: false, active: false },
      { label: "Destination — Vancouver, BC", status: "Pending Delivery", time: "Est. Jun 30", done: false, active: false },
    ],
  },
};

const DEMO_CODES = Object.keys(DEMO_SHIPMENTS);

function ShipmentResult({ data }: { data: typeof DEMO_SHIPMENTS[string] }) {
  const completedCount = data.stages.filter(s => s.done).length;
  const progress = Math.round((completedCount / data.stages.length) * 100);

  return (
    <div className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
      {/* Header */}
      <div className="bg-blue-950 px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">Shipment Found</div>
            <div className="font-bold text-white text-lg">{data.id}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end mb-1">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"/>
              <span className="text-amber-400 text-xs font-bold">In Transit</span>
            </div>
            <div className="text-white/40 text-xs">{data.corridor}</div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-amber-400 transition-all duration-1000" style={{width: `${progress}%`}}/>
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-white/30 text-[10px]">{data.origin}</span>
          <span className="text-white/30 text-[10px]">{progress}% complete</span>
          <span className="text-white/30 text-[10px]">{data.destination}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Key info grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {[
            { label: "Cargo", value: data.cargo },
            { label: "Carrier", value: data.carrier },
            { label: "Vessel", value: data.vessel },
            { label: "ETA", value: data.eta },
            { label: "Payment Status", value: data.payment },
            { label: "Corridor", value: data.corridor },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-3">
              <div className="text-gray-400 text-[10px] uppercase tracking-wide font-medium mb-1">{label}</div>
              <div className="text-blue-950 text-xs font-semibold leading-snug">{value}</div>
            </div>
          ))}
        </div>

        {/* Stages */}
        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Shipment Progress</div>
        <div className="space-y-0">
          {data.stages.map(({ label, status, time, done, active }, i) => (
            <div key={label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                  done ? "bg-emerald-500 text-white" : active ? "bg-amber-500 text-white ring-4 ring-amber-200" : "bg-gray-100 text-gray-300"
                }`}>
                  {done ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : active ? (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"/>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300"/>
                  )}
                </div>
                {i < data.stages.length - 1 && (
                  <div className={`w-0.5 flex-1 my-1 ${done ? "bg-emerald-200" : "bg-gray-100"}`} style={{minHeight: "16px"}}/>
                )}
              </div>
              <div className={`pb-4 flex-1 ${i < data.stages.length - 1 ? "" : ""}`}>
                <div className={`text-sm font-semibold ${done ? "text-blue-950" : active ? "text-amber-600" : "text-gray-300"}`}>{label}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-[11px] font-bold ${done ? "text-emerald-500" : active ? "text-amber-500" : "text-gray-300"}`}>{status}</span>
                  <span className="text-[11px] text-gray-300">{time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="flex-1 text-center py-3 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 transition-all">
            Track Your Shipment
          </Link>
          <Link href="/shipment-tracking" className="flex-1 text-center py-3 rounded-xl font-semibold text-sm border-2 border-gray-200 text-gray-600 hover:border-blue-950 hover:text-blue-950 transition-all">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function DemoTracker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<typeof DEMO_SHIPMENTS[string] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);
    const code = input.trim().toUpperCase();
    setTimeout(() => {
      if (DEMO_SHIPMENTS[code]) {
        setResult(DEMO_SHIPMENTS[code]);
      } else {
        setError(`No shipment found for "${code}". Try one of the demo codes below.`);
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
      <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Live Demo</div>
      <h3 className="font-display text-2xl font-bold text-blue-950 mb-2">Track a Shipment</h3>
      <p className="text-gray-500 text-sm mb-6">Enter a CorridorBridge tracking number to see real-time shipment status across Africa-Canada corridors.</p>

      <form onSubmit={handleTrack} className="flex gap-3 mb-4">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="e.g. CB-2026-0847"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-white font-mono transition-all"/>
        <button type="submit" disabled={!input.trim() || loading}
          className="px-6 py-3 rounded-xl font-semibold text-sm bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-50 transition-all flex items-center gap-2">
          {loading ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          )}
          Track
        </button>
      </form>

      {/* Demo codes */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-gray-400">Demo codes:</span>
        {DEMO_CODES.map(code => (
          <button key={code} onClick={() => { setInput(code); setError(""); setResult(null); }}
            className="text-xs px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-blue-950 font-mono font-semibold hover:border-amber-400 hover:bg-amber-50 transition-all">
            {code}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm mb-4">{error}</div>
      )}

      {result && <ShipmentResult data={result} />}
    </div>
  );
}

// ─── Existing page capabilities / corridors content ──────────────────────
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
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.4s ease forwards; }
      `}</style>

      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div ref={heroSection.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
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

            {/* Demo tracker in hero */}
            <div className={`transition-all duration-700 delay-300 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <DemoTracker />
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
                  <div key={step} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: color}}/>
                    <div className="flex-1 text-xs font-bold text-blue-950">{step}</div>
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
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



