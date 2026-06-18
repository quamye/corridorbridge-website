"use client";
import { useState } from "react";

const CORRIDORS = [
  "Canada ↔ Ghana",
  "Canada ↔ Nigeria",
  "Canada ↔ Liberia",
  "Canada ↔ Togo / Benin / Guinea",
  "Canada ↔ Other Africa",
  "USA ↔ Africa",
  "Europe ↔ Africa",
  "Multiple corridors",
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", corridor: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", company: "", corridor: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Get in Touch</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s talk about your corridor</h1>
          <p className="text-white/60 text-lg max-w-2xl">Whether you are a Canadian SME, a Ghanaian fintech entering Canada, or a compliance advisory firm — we want to hear from you.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              {[
                { label: "Headquarters", value: "Canada (serving global corridors)", icon: "📍" },
                { label: "Email", value: "hello@corridorbridge.com", icon: "✉️" },
                { label: "Response Time", value: "Within 1 business day", icon: "⏱" },
                { label: "Corridors Served", value: "Africa ↔ Canada ↔ USA ↔ Europe", icon: "🌐" },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{background: "#f5ecd8"}}>{icon}</div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">{label}</div>
                    <div className="text-sm font-semibold text-blue-950">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3 bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="font-serif text-xl font-bold text-blue-950 mb-6">Send us a message</h2>

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-bold text-blue-950 text-lg mb-2">Message received</h3>
                  <p className="text-gray-500">We will be in touch within 1 business day.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 btn-navy text-sm px-6 py-2.5">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-blue-950 mb-1.5">First Name *</label>
                      <input value={form.firstName} onChange={e => update("firstName", e.target.value)} required placeholder="Ronald"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-blue-950 mb-1.5">Last Name</label>
                      <input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Henry"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-1.5">Work Email *</label>
                    <input type="email" value={form.email} onChange={e => update("email", e.target.value)} required placeholder="you@company.com"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-1.5">Company</label>
                    <input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Your company name"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-1.5">Payment Corridor</label>
                    <select value={form.corridor} onChange={e => update("corridor", e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50 text-gray-700">
                      <option value="">Select your corridor</option>
                      {CORRIDORS.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-1.5">How can we help? *</label>
                    <textarea value={form.message} onChange={e => update("message", e.target.value)} required rows={4}
                      placeholder="Tell us about your payment challenge or compliance concern..."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-950 bg-gray-50 resize-none"/>
                  </div>
                  {status === "error" && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button type="submit" disabled={status === "sending"} className="w-full btn-gold justify-center py-3.5 disabled:opacity-50">
                    {status === "sending" ? "Sending..." : "Send Message"}
                    {status !== "sending" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
