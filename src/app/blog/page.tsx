"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Payments", "Compliance", "Logistics", "Advisory", "Trade Intelligence", "Fintech"];

const FEATURED = {
  title: "Understanding FINTRAC Obligations for Cross-Border Payments Between Africa and Canada",
  category: "Compliance",
  date: "June 2026",
  readTime: "8 min read",
  excerpt: "Canadian businesses making or receiving cross-border payments involving Africa face specific FINTRAC reporting and record-keeping obligations. This guide breaks down what you need to know — and what CorridorBridge can do to help.",
  color: "#C5A059",
};

const ARTICLES = [
  { title: "How to Choose a Licensed Payment Partner for Africa-Canada Corridors", category: "Payments", date: "May 2026", readTime: "6 min", color: "#10b981" },
  { title: "KYC Requirements for Cross-Border Business in Canada: A Practical Guide", category: "Compliance", date: "May 2026", readTime: "7 min", color: "#8b5cf6" },
  { title: "Ghana-Canada Trade: What Importers Need to Know in 2026", category: "Trade Intelligence", date: "April 2026", readTime: "5 min", color: "#3b82f6" },
  { title: "Building a Cross-Border Payment Governance Framework from Scratch", category: "Advisory", date: "April 2026", readTime: "9 min", color: "#f59e0b" },
  { title: "AML Controls for African Fintech Companies Entering Canada", category: "Fintech", date: "March 2026", readTime: "8 min", color: "#ef4444" },
  { title: "Shipment Tracking Best Practices for Africa-Canada Logistics Providers", category: "Logistics", date: "March 2026", readTime: "5 min", color: "#06b6d4" },
  { title: "The State of Cross-Border Payments Between Africa and Canada: 2026 Report", category: "Trade Intelligence", date: "February 2026", readTime: "12 min", color: "#C5A059" },
  { title: "Nigeria-Canada Payment Corridors: Regulatory Landscape and Opportunities", category: "Payments", date: "February 2026", readTime: "7 min", color: "#10b981" },
  { title: "Third-Party Risk Management for Cross-Border Payment Operations", category: "Advisory", date: "January 2026", readTime: "6 min", color: "#8b5cf6" },
];

const RESOURCES = [
  { title: "Cross-Border Payment Readiness Checklist", type: "Checklist", desc: "A practical checklist for assessing your readiness for Africa-Canada cross-border payments.", icon: "✅" },
  { title: "FINTRAC Compliance Guide for Businesses", type: "Guide", desc: "Plain-language guide to FINTRAC obligations for Canadian businesses with African payment corridors.", icon: "📋" },
  { title: "Africa-Canada Trade Intelligence Report 2026", type: "Report", desc: "Data and analysis on bilateral trade flows, payment trends, and market opportunities.", icon: "📊" },
  { title: "KYC & AML Policy Template", type: "Template", desc: "Customizable policy template for cross-border payment compliance programmes.", icon: "📄" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, page_source: "/blog" }),
      });
    } catch {}
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "48px 48px"}}/>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(197,160,89,0.5), transparent)"}}/>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Blog & Resources</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Insights on<br/>
                <span style={{background: "linear-gradient(90deg, #C5A059, #e8c97a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                  Cross-Border Trade
                </span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Practical guides, regulatory updates, trade intelligence, and advisory insights on Africa-Canada cross-border payments, compliance, and logistics.
              </p>
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${
                      activeCategory === cat
                        ? "bg-amber-500 border-amber-500 text-blue-950"
                        : "border-white/20 text-white/50 hover:border-white/40 hover:text-white"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Newsletter</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Stay ahead of Africa-Canada trade</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">Monthly insights on payments, compliance, logistics, and market intelligence — delivered directly to your inbox.</p>
              {subscribed ? (
                <div className="flex items-center gap-3 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="font-semibold text-sm">You&apos;re subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-amber-400"/>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                    Subscribe to Newsletter
                  </button>
                </form>
              )}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Payments", "Compliance", "Trade Intelligence"].map(tag => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/30 border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">Featured Article</div>
          <div className="bg-gray-50 border-2 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:border-amber-200 transition-all group"
            style={{borderColor: `${FEATURED.color}30`}}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{background: `${FEATURED.color}15`, color: FEATURED.color}}>{FEATURED.category}</span>
              <span className="text-xs text-gray-400">{FEATURED.date}</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">{FEATURED.readTime}</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-blue-950 mb-4 group-hover:text-amber-700 transition-colors">{FEATURED.title}</h2>
            <p className="text-gray-500 leading-relaxed max-w-3xl mb-6">{FEATURED.excerpt}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
              Read more — contact us for the full guide
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl font-bold text-blue-950">
              {activeCategory === "All" ? "All Articles" : activeCategory}
              <span className="text-gray-400 font-normal text-lg ml-2">({filtered.length})</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.slice(1).map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat === activeCategory ? "All" : cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeCategory === cat ? "bg-blue-950 text-white border-blue-950" : "border-gray-200 text-gray-600 hover:border-blue-950"
                  }`}>{cat}</button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(({ title, category, date, readTime, color }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{background: `${color}15`, color}}>{category}</span>
                    <span className="text-xs text-gray-400">{date}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{readTime}</span>
                  </div>
                  <h3 className="font-bold text-blue-950 leading-snug mb-4 group-hover:text-amber-700 transition-colors">{title}</h3>
                  <div className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                    Coming soon
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-bold text-blue-950 text-xl mb-2">No articles in this category yet</h3>
              <p className="text-gray-500 mb-6">Subscribe to our newsletter to be notified when new content is published.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Resources</div>
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-3">Guides, Templates and Reports</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Practical resources for cross-border payment and compliance professionals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES.map(({ title, type, desc, icon }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="text-2xl mb-4">{icon}</div>
                <div className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-2">{type}</div>
                <h3 className="font-bold text-blue-950 text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{desc}</p>
                <Link href="/contact" className="text-xs font-semibold text-amber-600 flex items-center gap-1 hover:text-amber-700 transition-colors">
                  Request resource
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.08), transparent)"}}/>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Want expert guidance, not just articles?</h2>
          <p className="text-white/60 mb-8 text-lg">Talk to our advisory team about your specific cross-border challenge.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl transition-all">
              Book a Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all">
              View Advisory Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



