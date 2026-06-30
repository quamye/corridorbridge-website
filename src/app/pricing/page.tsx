"use client";
import { useState } from "react";
import Link from "next/link";

const PLANS = [
  {
    tier: "Starter",
    name: "Individual",
    tagline: "For solo compliance consultants",
    monthly: 59,
    annual: 49,
    annualTotal: 590,
    perUnit: "month",
    color: "#C5A059",
    popular: false,
    cta: "Start Free Trial",
    href: "https://ops.corridorbridge.com/login?redirectTo=%2F",
    features: [
      { text: "1 user", included: true },
      { text: "Up to 5 active clients", included: true },
      { text: "10 engagements per year", included: true },
      { text: "Due diligence, policies, controls", included: true },
      { text: "Incident management", included: true },
      { text: "5 GB document storage", included: true },
      { text: "Email support", included: true },
      { text: "Multi-user team access", included: false },
      { text: "Custom report templates", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    tier: "Growth",
    name: "Boutique Firm",
    tagline: "For 2–10 person advisory firms",
    monthly: 149,
    annual: 124,
    annualTotal: 1490,
    perUnit: "user/month",
    color: "#C5A059",
    popular: true,
    cta: "Start Free Trial",
    href: "https://ops.corridorbridge.com/login?redirectTo=%2F",
    features: [
      { text: "Unlimited users", included: true },
      { text: "Unlimited clients", included: true },
      { text: "Unlimited engagements", included: true },
      { text: "Due diligence, policies, controls", included: true },
      { text: "Incident management", included: true },
      { text: "50 GB storage per user", included: true },
      { text: "Priority support + live chat", included: true },
      { text: "Multi-user team access", included: true },
      { text: "Custom report templates", included: true },
      { text: "Partner network management", included: true },
    ],
  },
  {
    tier: "Enterprise",
    name: "Large Firms",
    tagline: "For large firms and institutions",
    monthly: null,
    annual: null,
    annualTotal: null,
    perUnit: "month",
    color: "#10b981",
    popular: false,
    cta: "Contact Sales",
    href: "/contact",
    features: [
      { text: "10+ users", included: true },
      { text: "Unlimited everything", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "99.9% uptime SLA", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated infrastructure", included: true },
      { text: "White-label option", included: true },
      { text: "French Canadian support", included: true },
      { text: "Custom security review", included: true },
      { text: "Executive briefings", included: true },
    ],
  },
];

const FAQS = [
  { q: "Is there really no credit card required?", a: "Correct. You can start your 30-day free trial with just your email address. No payment information required until you decide to subscribe." },
  { q: "What happens after the 30-day trial?", a: "After your trial ends, you can choose a plan and subscribe. If you do not subscribe, your account is paused and your data is retained for 30 days before deletion." },
  { q: "Can I change plans after subscribing?", a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the end of your current billing period." },
  { q: "What is included in the Growth plan per user?", a: "The Growth plan is priced per user per month. Each user gets full access to all platform features, 50 GB of document storage, and priority support." },
  { q: "Does the Enterprise plan include advisory services?", a: "Enterprise plans can be bundled with advisory service retainers. Contact our sales team to discuss a combined platform and advisory package." },
  { q: "Do you offer discounts for NGOs or government agencies?", a: "Yes. We offer special pricing for registered NGOs, non-profits, and government agencies. Contact us to discuss your situation." },
];

const COMPARISON = [
  { feature: "Users", starter: "1", growth: "Unlimited", enterprise: "10+" },
  { feature: "Active clients", starter: "5", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Engagements/year", starter: "10", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Document storage", starter: "5 GB", growth: "50 GB/user", enterprise: "Unlimited" },
  { feature: "Due diligence module", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "Policies module", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "Controls module", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "Incident management", starter: "✓", growth: "✓", enterprise: "✓" },
  { feature: "Multi-user access", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Custom report templates", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Partner network", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Priority support", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Dedicated account manager", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "Custom integrations", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "White-label option", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "99.9% SLA", starter: "—", growth: "—", enterprise: "✓" },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Pricing</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto mb-8">
            Start free for 30 days. No credit card required. Cancel anytime.
          </p>
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!annual ? "text-white" : "text-white/40"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)}
              className="w-14 h-7 rounded-full relative transition-colors duration-300"
              style={{background: annual ? "#C5A059" : "rgba(255,255,255,0.2)"}}>
              <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${annual ? "translate-x-7" : ""}`}/>
            </button>
            <span className={`text-sm font-semibold transition-colors ${annual ? "text-white" : "text-white/40"}`}>Annual</span>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">Save 17%</span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {PLANS.map(plan => (
              <div key={plan.tier} className={`rounded-2xl p-8 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular ? "text-white shadow-xl" : "bg-white border-2 border-gray-200"
              }`} style={plan.popular ? {background: "linear-gradient(135deg, #0A1E3F 0%, #122952 100%)"} : {}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 text-xs font-bold px-5 py-1.5 rounded-full tracking-wide uppercase shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${plan.popular ? "text-amber-400" : "text-amber-500"}`}>
                  {plan.tier}
                </div>
                <div className={`font-display text-2xl font-bold mb-1 ${plan.popular ? "text-white" : "text-blue-950"}`}>
                  {plan.name}
                </div>
                <div className={`text-sm mb-6 ${plan.popular ? "text-white/60" : "text-gray-500"}`}>
                  {plan.tagline}
                </div>

                {/* Price */}
                {plan.monthly ? (
                  <div className="mb-1">
                    <div className="flex items-end gap-1">
                      <span className={`font-display text-5xl font-bold ${plan.popular ? "text-white" : "text-blue-950"}`}>
                        ${annual ? plan.annual : plan.monthly}
                      </span>
                      <span className={`text-sm mb-2 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                        CAD/{plan.perUnit}
                      </span>
                    </div>
                    <div className={`text-xs mb-6 ${plan.popular ? "text-white/40" : "text-gray-400"}`}>
                      {annual ? `Billed annually — $${plan.annualTotal} CAD/yr` : "Billed monthly"}
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className={`font-display text-5xl font-bold mb-1 ${plan.popular ? "text-white" : "text-blue-950"}`}>Custom</div>
                    <div className={`text-xs ${plan.popular ? "text-white/40" : "text-gray-400"}`}>Starts at $5,000 CAD/month</div>
                  </div>
                )}

                <Link href={plan.href} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm block transition-all mb-6 ${
                  plan.popular
                    ? "bg-amber-500 text-blue-950 hover:bg-amber-400"
                    : plan.tier === "Enterprise"
                    ? "bg-emerald-600 text-white hover:bg-emerald-500"
                    : "bg-blue-950 text-white hover:bg-blue-900"
                }`}>
                  {plan.cta}
                </Link>

                <hr className={`mb-5 ${plan.popular ? "border-white/15" : "border-gray-100"}`}/>

                <ul className="space-y-2.5">
                  {plan.features.map(({ text, included }) => (
                    <li key={text} className={`flex items-center gap-2.5 text-sm ${
                      included
                        ? plan.popular ? "text-white/80" : "text-gray-700"
                        : plan.popular ? "text-white/25 line-through" : "text-gray-300 line-through"
                    }`}>
                      {included ? (
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                          stroke={plan.popular ? "#C5A059" : "#10b981"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      )}
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mb-8">
            All plans include a 30-day free trial · No credit card required · Cancel anytime
          </p>

          {/* Compare all features toggle */}
          <div className="text-center">
            <button onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-amber-600 transition-colors">
              {showComparison ? "Hide" : "Compare"} all features
              <svg className={`w-4 h-4 transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          {/* Comparison table */}
          {showComparison && (
            <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-bold text-blue-950">Feature</th>
                    <th className="text-center px-6 py-4 text-sm font-bold text-blue-950">Starter</th>
                    <th className="text-center px-6 py-4 text-sm font-bold text-amber-600 bg-amber-50">Growth</th>
                    <th className="text-center px-6 py-4 text-sm font-bold text-blue-950">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(({ feature, starter, growth, enterprise }, i) => (
                    <tr key={feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-6 py-3 text-sm text-gray-600">{feature}</td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">{starter}</td>
                      <td className="px-6 py-3 text-sm text-center font-semibold text-amber-600 bg-amber-50/30">{growth}</td>
                      <td className="px-6 py-3 text-sm text-center text-emerald-600">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise callout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-950 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">Need a custom enterprise solution?</h2>
              <p className="text-white/60 leading-relaxed">For large advisory firms, financial institutions, and government agencies with specific requirements — we build custom packages combining platform access, advisory services, and dedicated support.</p>
            </div>
            <div className="space-y-3">
              {["Dedicated account manager", "Custom integrations and API access", "99.9% uptime SLA", "White-label platform option", "Combined platform + advisory retainer", "Quarterly executive briefings"].map(f => (
                <div key={f} className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </div>
              ))}
              <Link href="/contact" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                Talk to Sales
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">FAQ</div>
            <h2 className="font-display text-3xl font-bold text-blue-950">Pricing Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-blue-950 text-sm pr-4">{q}</span>
                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
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
          <h2 className="font-display text-4xl font-bold text-white mb-4">Start your free trial today</h2>
          <p className="text-white/60 mb-8 text-lg">30 days free. No credit card. No commitment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://ops.corridorbridge.com/login?redirectTo=%2F" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Start Free Trial
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



