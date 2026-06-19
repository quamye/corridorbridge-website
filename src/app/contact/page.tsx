"use client";
import { useState } from "react";
import { getAttribution } from "@/lib/attribution";

const CORRIDORS = ["Canada ↔ Ghana", "Canada ↔ Nigeria", "Canada ↔ Kenya", "Canada ↔ Other Africa", "USA ↔ Africa", "Europe ↔ Africa", "Multiple corridors"];
const INTENTS = [
  { value: "demo_request", label: "Request a Demo" },
  { value: "book_consultation", label: "Book a Consultation" },
  { value: "free_trial", label: "Start Free Trial" },
  { value: "contact", label: "General Enquiry" },
];
const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", corridor: "", message: "", intent: "demo_request", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const attr = getAttribution();
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...attr }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ firstName: "", lastName: "", email: "", company: "", corridor: "", message: "", intent: "demo_request", website: "" });
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Contact Us</div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">Let&apos;s Build Your Corridor</h1>
          <p className="text-white/60 text-xl max-w-2xl">Request a demo, book a consultation, or ask us anything about cross-border operations between Africa and Canada.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            {[
              { label: "Headquarters", value: "Canada (global corridors)", icon: "📍" },
              { label: "Email", value: "hello@corridorbridge.com", icon: "✉️" },
              { label: "Response Time", value: "Within 1 business day", icon: "⏱" },
              { label: "Platform", value: "app.corridorbridge.com", icon: "🖥️" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                <div>
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">{label}</div>
                  <div className="text-sm font-semibold text-blue-950">{value}</div>
                </div>
              </div>
            ))}
            <div className="bg-blue-950 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2 text-sm">Corridors We Serve</h3>
              {["Africa ↔ Canada", "Africa ↔ USA", "Africa ↔ Europe", "Africa ↔ UK"].map(c => (
                <div key={c} className="text-white/60 text-sm py-1.5 border-b border-white/10 last:border-0">{c}</div>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">{DISCLAIMER}</p>
          </div>

          <div className="md:col-span-3 bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="font-display text-xl font-bold text-blue-950 mb-6">Send us a message</h2>
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-blue-950 text-xl mb-2">Message received</h3>
                <p className="text-gray-500 mb-6">We will be in touch within 1 business day.</p>
                <button onClick={() => setStatus("idle")} className="btn-navy px-6 py-2.5 text-sm">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="website" value={form.website} onChange={e => update("website", e.target.value)} className="hidden" tabIndex={-1} autoComplete="off"/>
                <div>
                  <label className="block text-xs font-bold text-blue-950 mb-1.5 uppercase tracking-wide">I want to</label>
                  <div className="grid grid-cols-2 gap-2">
                    {INTENTS.map(({ value, label }) => (
                      <button key={value} type="button" onClick={() => update("intent", value)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all ${form.intent === value ? "border-blue-950 bg-blue-950 text-white" : "border-gray-200 text-gray-600 hover:border-blue-950"}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-950 mb-1.5">First Name *</label>
                    <input value={form.firstName} onChange={e => update("firstName", e.target.value)} required placeholder="Ronald" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-950 mb-1.5">Last Name</label>
                    <input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Henry" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-950 mb-1.5">Work Email *</label>
                  <input type="email" value={form.email} onChange={e => update("email", e.target.value)} required placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-950 mb-1.5">Company</label>
                  <input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Your company" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-950 mb-1.5">Payment Corridor</label>
                  <select value={form.corridor} onChange={e => update("corridor", e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50 text-gray-700">
                    <option value="">Select your corridor</option>
                    {CORRIDORS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-950 mb-1.5">Message *</label>
                  <textarea value={form.message} onChange={e => update("message", e.target.value)} required rows={4} placeholder="Tell us about your cross-border operation..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-950 bg-gray-50 resize-none"/>
                </div>
                {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Email us directly at hello@corridorbridge.com</p>}
                <button type="submit" disabled={status === "sending"} className="w-full btn-primary justify-center py-4 disabled:opacity-50">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
