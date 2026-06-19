"use client";
import { useState } from "react";
import Link from "next/link";
const PLANS = [
  { tier: "Starter", name: "Individual", desc: "For solo compliance consultants.", monthly: 59, annual: 49, annualTotal: 590, perUnit: "month", features: ["1 user", "Up to 5 active clients", "10 engagements per year", "Due diligence, policies, controls", "Incident management", "5 GB document storage", "Email support"], popular: false, cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup" },
  { tier: "Growth", name: "Boutique Firm", desc: "For 2–10 person advisory firms.", monthly: 149, annual: 124, annualTotal: 1490, perUnit: "user/month", features: ["Unlimited clients", "Unlimited engagements", "Multi-user team access", "Partner network management", "Custom report templates", "50 GB storage per user", "Priority support + live chat"], popular: true, cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup" },
  { tier: "Enterprise", name: "Large Firms", desc: "For large firms and institutions.", monthly: null, annual: null, annualTotal: null, perUnit: "month", features: ["10+ users", "Dedicated account manager", "99.9% uptime SLA", "Custom integrations", "White-label option", "French Canadian support", "Dedicated infrastructure"], popular: false, cta: "Contact Sales", href: "/contact" },
];
export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Pricing</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">Start free for 30 days. No credit card required. Cancel anytime.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-semibold ${!annual ? "text-blue-950" : "text-gray-400"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className="w-12 h-6 rounded-full relative transition-colors duration-200" style={{background: annual ? "#0A1E3F" : "#d1d5db"}}>
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${annual ? "translate-x-6" : ""}`}/>
            </button>
            <span className={`text-sm font-semibold ${annual ? "text-blue-950" : "text-gray-400"}`}>Annual</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Save 17%</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map(plan => (
              <div key={plan.tier} className={`rounded-2xl p-8 relative ${plan.popular ? "text-white shadow-2xl" : "bg-white border border-gray-200"}`}
                style={plan.popular ? {background: "linear-gradient(135deg, #0A1E3F, #122952)"} : {}}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 text-xs font-bold px-5 py-1.5 rounded-full">Most Popular</div>}
                <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${plan.popular ? "text-amber-400" : "text-amber-500"}`}>{plan.tier}</div>
                <div className={`font-display text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-blue-950"}`}>{plan.name}</div>
                <div className={`text-sm mb-6 ${plan.popular ? "text-white/60" : "text-gray-500"}`}>{plan.desc}</div>
                {plan.monthly ? (
                  <div className="mb-1">
                    <span className={`font-display text-4xl font-bold ${plan.popular ? "text-white" : "text-blue-950"}`}>${annual ? plan.annual : plan.monthly}</span>
                    <span className={`text-sm ml-1 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>CAD/{plan.perUnit}</span>
                  </div>
                ) : (
                  <div className={`font-display text-4xl font-bold mb-1 ${plan.popular ? "text-white" : "text-blue-950"}`}>Custom</div>
                )}
                <div className={`text-xs mb-6 ${plan.popular ? "text-white/40" : "text-gray-400"}`}>{plan.monthly ? (annual ? `Billed annually ($${plan.annualTotal}/yr)` : "Billed monthly") : "Starts at $5,000 CAD/month"}</div>
                <hr className={`mb-6 ${plan.popular ? "border-white/15" : "border-gray-100"}`}/>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "#C5A059" : "#10b981"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm block transition-all ${plan.popular ? "bg-amber-500 text-blue-950 hover:bg-amber-400" : "bg-blue-950 text-white hover:bg-blue-900"}`}>{plan.cta}</Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">All plans include a 30-day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </>
  );
}
