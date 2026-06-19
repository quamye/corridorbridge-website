"use client";
import { useState } from "react";
import { getAttribution } from "@/lib/attribution";

const CORRIDORS = [
  "Canada ↔ Ghana",
  "Canada ↔ Nigeria",
  "Canada ↔ Kenya",
  "Canada ↔ Other Africa",
  "USA ↔ Africa",
  "Europe ↔ Africa",
  "Multiple corridors",
];

const INTENTS = [
  { value: "demo_request", label: "Request a Demo", icon: "🎯" },
  { value: "book_consultation", label: "Book a Consultation", icon: "📞" },
  { value: "free_trial", label: "Start Free Trial", icon: "🚀" },
  { value: "contact", label: "General Enquiry", icon: "✉️" },
];

const SERVICES = [
  "Payment Readiness Assessment",
  "Payment Partner Selection",
  "Workflow Design",
  "Governance & Controls",
  "Vendor Risk Review",
  "Fintech Readiness",
  "Cybersecurity Advisory",
  "Executive Advisory",
];

const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    corridor: "", service: "", message: "", intent: "demo_request", website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const attr = getAttribution();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...attr }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ firstName: "", lastName: "", email: "", company: "", corridor: "", service: "", message: "", intent: "demo_request", website: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Contact Us</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-3xl">
            Let&apos;s Build Your<br/>
            <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
              Cross-Border Corridor
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Whether you are a Canadian SME, a Ghanaian fintech entering Canada, or a compliance advisory firm — we want to hear from you.
          </p>
          {/* Quick contact options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {INTENTS.map(({ value, label, icon }) => (
              <button key={value} onClick={() => update("intent", value)}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  form.intent === value
                    ? "bg-amber-500/20 border-amber-500 text-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
                }`}>
                <div className="text-xl mb-2">{icon}</div>
                <div className="text-xs font-semibold">{label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left info column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <h3 className="font-bold text-blue-950 mb-5">Contact Information</h3>
                {[
                  { label: "Headquarters", value: "Canada (serving global corridors)", icon: "📍" },
                  { label: "Email", value: "hello@corridorbridge.com", icon: "✉️" },
                  { label: "Response Time", value: "Within 1 business day", icon: "⏱" },
                  { label: "Platform", value: "app.corridorbridge.com", icon: "🖥️" },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex gap-4 items-start mb-5 last:mb-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">{label}</div>
                      <div className="text-sm font-semibold text-blue-950">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corridors */}
              <div className="bg-blue-950 rounded-2xl p-7 text-white">
                <h3 className="font-bold mb-4 text-sm">Corridors We Serve</h3>
                <div className="space-y-2">
                  {["Africa ↔ Canada", "Africa ↔ USA", "Africa ↔ Europe", "Africa ↔ UK"].map(c => (
                    <div key={c} className="flex items-center gap-2 text-white/60 text-sm py-2 border-b border-white/10 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"/>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services quick list */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <h3 className="font-bold text-blue-950 mb-4 text-sm">Advisory Services</h3>
                <div className="space-y-2">
                  {SERVICES.map((s, i) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-amber-500 font-mono text-xs font-bold">0{i + 1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">{DISCLAIMER}</p>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-blue-950 mb-2">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-8">Fill in the form and we will be in touch within 1 business day.</p>

                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-blue-950 mb-2">Message received</h3>
                    <p className="text-gray-500 mb-6">Our team will be in touch within 1 business day.</p>
                    <button onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-950 hover:bg-blue-900 transition-all">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input type="text" name="website" value={form.website}
                      onChange={e => update("website", e.target.value)}
                      className="hidden" tabIndex={-1} autoComplete="off"/>

                    {/* Intent selector */}
                    <div>
                      <label className="block text-xs font-bold text-blue-950 mb-2 uppercase tracking-wide">I want to</label>
                      <div className="grid grid-cols-2 gap-2">
                        {INTENTS.map(({ value, label }) => (
                          <button key={value} type="button" onClick={() => update("intent", value)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all ${
                              form.intent === value
                                ? "border-blue-950 bg-blue-950 text-white"
                                : "border-gray-200 text-gray-600 hover:border-blue-950"
                            }`}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">First Name *</label>
                        <input value={form.firstName} onChange={e => update("firstName", e.target.value)} required
                          placeholder="Ronald"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-gray-50 transition-all"/>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Last Name</label>
                        <input value={form.lastName} onChange={e => update("lastName", e.target.value)}
                          placeholder="Henry"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-gray-50 transition-all"/>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Work Email *</label>
                      <input type="email" value={form.email} onChange={e => update("email", e.target.value)} required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-gray-50 transition-all"/>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Company</label>
                      <input value={form.company} onChange={e => update("company", e.target.value)}
                        placeholder="Your organization"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-gray-50 transition-all"/>
                    </div>

                    {/* Corridor + Service row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Payment Corridor</label>
                        <select value={form.corridor} onChange={e => update("corridor", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50 text-gray-700 transition-all">
                          <option value="">Select corridor</option>
                          {CORRIDORS.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Service Interest</label>
                        <select value={form.service} onChange={e => update("service", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50 text-gray-700 transition-all">
                          <option value="">Select service</option>
                          {SERVICES.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">Message *</label>
                      <textarea value={form.message} onChange={e => update("message", e.target.value)} required rows={4}
                        placeholder="Tell us about your cross-border operation, payment challenge, or compliance concern..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 bg-gray-50 resize-none transition-all"/>
                    </div>

                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm">
                        Something went wrong. Please email us directly at hello@corridorbridge.com
                      </div>
                    )}

                    <button type="submit" disabled={status === "sending"}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                      {status === "sending" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
