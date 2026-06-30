"use client";
import { useState } from "react";
import Link from "next/link";
import { getAttribution } from "@/lib/attribution";

const ORG_TYPES = [
  "PSP / Fintech", "Bank / Financial Institution", "Compliance / Advisory Firm",
  "Logistics / Trade Operator", "Investor / Board / Executive", "Government / Public Sector", "Other",
];
const CORRIDORS = [
  "Canada \u2194 Ghana", "Canada \u2194 Nigeria", "Canada \u2194 Kenya",
  "Africa \u2194 Canada", "Multi-corridor", "Not sure yet",
];
const INTERESTS = [
  "Corridor readiness", "PSP / partner due diligence", "Shipment tracking",
  "AI compliance reporting", "Audit evidence", "External intelligence governance", "Enterprise platform evaluation",
];
const CONTACT_PREF = ["Email", "Phone", "Video call"];

const DEMO_COVERS: [string, string][] = [
  ["Executive Command Center", "A single board-ready view of corridor risk and readiness."],
  ["Corridor Readiness Score", "Quantified readiness across each active corridor."],
  ["PSP Intelligence", "Exposure and posture for every payment service provider."],
  ["Automated Due Diligence", "Structured partner and counterparty review workflows."],
  ["Shipment Tracking", "Real-time cross-border shipment visibility."],
  ["AI Report Generator", "Board and regulator-ready reports in minutes."],
  ["AI Risk Advisor", "Portfolio risk synthesized into one executive view."],
  ["Audit Evidence", "Searchable, exportable evidence for every AI action."],
  ["Provider Governance", "Controlled activation gates for screening providers."],
];

const AUDIENCE: [string, string][] = [
  ["Banks & PSPs", "Assess corridor and counterparty exposure with evidence."],
  ["Compliance teams", "Run due diligence and produce audit-ready records."],
  ["Corridor operators", "See readiness and risk across active trade lanes."],
  ["Advisory firms", "Deliver corridor compliance programs at scale."],
  ["Investors & executives", "Board-ready visibility into cross-border risk."],
  ["Logistics & trade teams", "Connect shipment visibility to compliance posture."],
];

const TRUST = [
  "Corridor Intelligence", "PSP & Partner Due Diligence", "Shipment Visibility",
  "Audit-Ready Evidence", "Secure AI Gateway", "Provider Governance",
];

const SECURITY_NOTES = [
  "Tenant-scoped architecture",
  "Audit logging on platform actions",
  "Human review workflow for screening",
  "Provider activation gates",
  "No client-side provider secrets",
  "Secure AI gateway",
  "Public tracking uses a safe-data design",
];

export default function RequestDemoPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", role: "",
    orgType: "", corridor: "", interest: "", problem: "", contactPref: "Email",
    intent: "demo_request", website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const attr = getAttribution();
      // Fold demo-specific fields into the message body so the existing
      // /api/contact handler captures them without any API change.
      const composedMessage = [
        form.problem && `What they're trying to solve: ${form.problem}`,
        form.role && `Role/Title: ${form.role}`,
        form.orgType && `Organization type: ${form.orgType}`,
        form.interest && `Primary interest: ${form.interest}`,
        form.contactPref && `Preferred contact: ${form.contactPref}`,
      ].filter(Boolean).join("\n");

      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        company: form.company,
        corridor: form.corridor,
        message: composedMessage || "Demo request",
        intent: "demo_request",
        website: form.website, // honeypot
        page_source: "/request-demo",
        ...attr,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({
          firstName: "", lastName: "", email: "", company: "", role: "",
          orgType: "", corridor: "", interest: "", problem: "", contactPref: "Email",
          intent: "demo_request", website: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-blue-950 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all";
  const labelCls = "block text-xs font-semibold text-blue-950 mb-1.5";

  return (
    <main className="bg-white">
      {/* ── Hero + form ─────────────────────────────────────────────── */}
      <section className="relative bg-blue-950 overflow-hidden">
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 10%, rgba(197,160,89,0.16), transparent 45%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-36 lg:pb-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-amber-400">CorridorBridge Ops&trade; Demo</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              See corridor intelligence, compliance risk, and audit evidence in one command platform.
            </h1>
            <p className="text-base lg:text-lg text-blue-100/80 leading-relaxed mb-6 max-w-xl">
              Request a guided walkthrough of CorridorBridge Ops&trade; for corridor readiness, PSP exposure, shipment visibility, due diligence, AI reporting, provider governance, and audit-ready evidence.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-100/70 mb-8">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Built for regulated cross-border corridor operations.
            </div>
            {/* trust strip */}
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[12px] text-blue-100/80">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-7">
            {status === "ok" ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-2">Request received</h3>
                <p className="text-gray-500 text-sm">Thank you. Our team will be in touch within one business day to arrange your walkthrough.</p>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-blue-950 text-xl mb-1">Request your demo</h2>
                <p className="text-gray-500 text-sm mb-6">Tell us about your corridor operations and we&rsquo;ll tailor the walkthrough.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* honeypot */}
                  <input type="text" name="website" value={form.website} onChange={(e) => update("website", e.target.value)}
                    className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>First name *</label>
                      <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Last name</label>
                      <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Work email *</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required className={inputCls} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Company</label>
                      <input value={form.company} onChange={(e) => update("company", e.target.value)} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Role / title</label>
                      <input value={form.role} onChange={(e) => update("role", e.target.value)} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Organization type</label>
                      <select value={form.orgType} onChange={(e) => update("orgType", e.target.value)} className={inputCls}>
                        <option value="">Select</option>
                        {ORG_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Corridor focus</label>
                      <select value={form.corridor} onChange={(e) => update("corridor", e.target.value)} className={inputCls}>
                        <option value="">Select</option>
                        {CORRIDORS.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Primary interest</label>
                    <select value={form.interest} onChange={(e) => update("interest", e.target.value)} className={inputCls}>
                      <option value="">Select</option>
                      {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>What are you trying to solve?</label>
                    <textarea value={form.problem} onChange={(e) => update("problem", e.target.value)} rows={3} className={inputCls} />
                  </div>

                  <div>
                    <label className={labelCls}>Preferred contact method</label>
                    <div className="flex gap-2">
                      {CONTACT_PREF.map((c) => (
                        <button key={c} type="button" onClick={() => update("contactPref", c)}
                          className={`flex-1 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
                            form.contactPref === c ? "border-amber-500 bg-amber-50 text-blue-950" : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-lg transition-all disabled:opacity-60">
                    {status === "sending" ? "Sending\u2026" : "Request Demo"}
                  </button>

                  {status === "error" && (
                    <p className="text-xs text-red-600 text-center">Something went wrong. Please email us directly at hello@corridorbridge.com</p>
                  )}
                  <p className="text-[11px] text-gray-400 text-center">By requesting a demo you agree to be contacted about CorridorBridge Ops&trade;.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── What the demo covers ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-amber-600 mb-2">What the demo covers</div>
          <h2 className="font-serif text-3xl font-bold text-blue-950" style={{ fontFamily: "'Playfair Display', serif" }}>A guided tour of the command platform</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEMO_COVERS.map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <h3 className="font-bold text-blue-950 text-sm mb-1">{title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who it's for ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-amber-600 mb-2">Who it&rsquo;s for</div>
            <h2 className="font-serif text-3xl font-bold text-blue-950" style={{ fontFamily: "'Playfair Display', serif" }}>Built for regulated corridor operations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUDIENCE.map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-blue-950 text-sm mb-1">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise trust & security ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-amber-600 mb-2">Enterprise trust &amp; security</div>
            <h2 className="font-serif text-3xl font-bold text-blue-950 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Security and control built into the platform</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              CorridorBridge Ops&trade; is designed around tenant isolation, auditability, and controlled intelligence workflows. Screening output is treated as reviewable evidence &mdash; the human reviewer decision remains the system of record.
            </p>
            <p className="text-[12px] text-gray-400 leading-relaxed">
              CorridorBridge provides technology, advisory, and operational enablement. It does not provide legal, banking, or regulated financial services unless expressly licensed or partnered with authorized providers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {SECURITY_NOTES.map((n) => (
              <div key={n} className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
                <svg className="w-4 h-4 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span className="text-[13px] text-blue-950 font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to see CorridorBridge Ops&trade; in action?
          </h2>
          <p className="text-blue-100/80 text-base mb-8 max-w-2xl mx-auto">
            Request a walkthrough tailored to your corridors, partners, and compliance workflows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-lg transition-all">
              Request Demo
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



