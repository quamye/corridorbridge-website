"use client";
import { useState } from "react";
import Link from "next/link";

const PLANS = [
  {
    tier: "Starter",
    name: "Individual",
    desc: "For solo compliance consultants getting started.",
    monthly: 59, annual: 49,
    annualTotal: 590,
    features: ["1 user", "Up to 5 active clients", "10 engagements per year", "Due diligence, policies, controls", "Incident management", "5 GB document storage", "Email support"],
    cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup", popular: false,
  },
  {
    tier: "Professional",
    name: "Boutique Firm",
    desc: "For 2–10 person compliance advisory firms managing multiple client corridors.",
    monthly: 149, annual: 124,
    annualTotal: 1490,
    features: ["Unlimited clients", "Unlimited engagements", "Multi-user team access", "Partner network management", "Custom report templates", "50 GB storage per user", "Priority support + live chat"],
    cta: "Start Free Trial", href: "https://app.corridorbridge.com/signup", popular: true,
  },
  {
    tier: "Enterprise",
    name: "Large Firms",
    desc: "For in-house compliance teams, large advisory firms, and regulated institutions.",
    monthly: null, annual: null,
    annualTotal: null,
    features: ["10+ users", "Dedicated account manager", "99.9% uptime SLA", "Custom integrations", "White-label option", "French Canadian support", "Dedicated infrastructure"],
    cta: "Contact Sales", href: "/contact", popular: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Pricing</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Transparent pricing for every stage</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Start free for 30 days. No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!annual ? "text-blue-950" : "text-gray-400"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)}
              className="w-12 h-6 rounded-full relative transition-colors duration-200"
              style={{background: annual ? "#0A1E3F" : "#d1d5db"}}>
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${annual ? "translate-x-6" : ""}`}/>
            </button>
            <span className={`text-sm font-medium ${annual ? "text-blue-950" : "text-gray-400"}`}>Annual</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">Save 17%</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map(plan => (
              <div key={plan.tier} className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "text-white shadow-2xl"
                  : "bg-white border border-gray-200"
              }`} style={plan.popular ? {background: "linear-gradient(135deg, #0A1E3F, #122952)"} : {}}>
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <div className={`text-xs font-semibold tracking-widest uppercase mb-2 ${plan.popular ? "text-amber-400" : "text-amber-500"}`}>{plan.tier}</div>
                <div className={`font-serif text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-blue-950"}`}>{plan.name}</div>
                <div className={`text-sm mb-6 leading-relaxed ${plan.popular ? "text-white/60" : "text-gray-500"}`}>{plan.desc}</div>

                <div className="mb-2">
                  {plan.monthly ? (
                    <div className="flex items-end gap-1">
                      <span className={`font-serif text-4xl font-bold ${plan.popular ? "text-white" : "text-blue-950"}`}>
                        ${annual ? plan.annual : plan.monthly}
                      </span>
                      <span className={`text-sm mb-1.5 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                        CAD / {plan.tier === "Starter" ? "month" : "user / month"}
                      </span>
                    </div>
                  ) : (
                    <div className={`font-serif text-4xl font-bold ${plan.popular ? "text-white" : "text-blue-950"}`}>Custom</div>
                  )}
                </div>
                <div className={`text-xs mb-6 ${plan.popular ? "text-white/40" : "text-gray-400"}`}>
                  {plan.monthly
                    ? annual ? `Billed annually ($${plan.annualTotal}/yr)` : "Billed monthly"
                    : "Starts at $5,000 CAD/month"}
                </div>

                <hr className={`mb-6 ${plan.popular ? "border-white/15" : "border-gray-100"}`}/>

                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                        stroke={plan.popular ? "#C5A059" : "#10b981"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm block transition-all ${
                    plan.popular
                      ? "bg-amber-500 text-blue-950 hover:bg-amber-400"
                      : "bg-blue-950 text-white hover:bg-blue-900"
                  }`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">All plans include a 30-day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </>
  );
}
