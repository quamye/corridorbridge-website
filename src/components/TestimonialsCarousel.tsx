"use client";
import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "CorridorBridge simplified our expansion into the Ghanaian market. What would have taken months of compliance work was structured and documented in weeks. Our FINTRAC obligations are now fully covered.",
    name: "Sarah Mitchell",
    title: "CFO",
    company: "Northern Trade Partners Inc.",
    sector: "Import & Export",
    corridor: "Canada ↔ Ghana",
    initials: "SM",
    color: "#C5A059",
  },
  {
    quote: "As a Nigerian fintech entering Canada, we needed governance documentation that would satisfy enterprise clients. CorridorBridge delivered a framework that gave us immediate credibility in the Canadian market.",
    name: "Emeka Okonkwo",
    title: "CEO & Founder",
    company: "PayBridge Technologies",
    sector: "Fintech",
    corridor: "Nigeria ↔ Canada",
    initials: "EO",
    color: "#10b981",
  },
  {
    quote: "Our cross-border payment fees dropped from 8% to under 3% after CorridorBridge helped us select a properly licensed payment partner for our Ghana corridor. The advisory engagement paid for itself in the first month.",
    name: "Christine Addo",
    title: "Operations Director",
    company: "Afrocraft Exports Ltd.",
    sector: "SME Exporter",
    corridor: "Ghana ↔ Canada",
    initials: "CA",
    color: "#3b82f6",
  },
  {
    quote: "CorridorBridge reduced our compliance onboarding complexity significantly. Having a platform that connects our shipment tracking to payment workflows has transformed how we manage the Nigeria-Canada corridor.",
    name: "James Oduola",
    title: "Head of Trade Finance",
    company: "Meridian Commerce Bank",
    sector: "Financial Institution",
    corridor: "Nigeria ↔ Canada",
    initials: "JO",
    color: "#8b5cf6",
  },
  {
    quote: "The readiness assessment identified gaps we didn't even know existed. Six weeks later, we had a documented compliance programme, a licensed payment partner, and full audit readiness for our Kenya corridor.",
    name: "Amara Wanjiku",
    title: "Director of Operations",
    company: "EastAfrica Logistics Group",
    sector: "Logistics Provider",
    corridor: "Kenya ↔ Canada",
    initials: "AW",
    color: "#f59e0b",
  },
  {
    quote: "As a government agency managing development programme payments to African partners, we needed a governance framework that met public sector standards. CorridorBridge delivered exactly that.",
    name: "Robert Tremblay",
    title: "Director, International Programmes",
    company: "Canadian Development Agency",
    sector: "Government",
    corridor: "Canada ↔ Africa",
    initials: "RT",
    color: "#06b6d4",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 200);
  };

  const next = () => goTo((active + 1) % TESTIMONIALS.length);
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 6000);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 1px)", backgroundSize: "40px 40px"}}/>
      <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,160,89,0.06), transparent)"}}/>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Cross-Border Operators</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">What businesses, fintechs, and institutions say about working with CorridorBridge.</p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className={`transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>
            {/* Quote card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-8 relative">
              {/* Quote mark */}
              <div className="absolute top-6 left-8 font-display text-7xl text-amber-500/20 leading-none select-none">&ldquo;</div>

              <p className="text-white text-lg md:text-xl leading-relaxed font-light relative z-10 mb-8">
                {t.quote}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`}}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.title}, {t.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{background: `${t.color}20`, color: t.color}}>
                    {t.sector}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/40 font-medium">
                    {t.corridor}
                  </span>
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => { prev(); resetInterval(); }}
              className="w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-amber-400 hover:text-amber-400 transition-all flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => { goTo(i); resetInterval(); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-8 h-2.5 bg-amber-400" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}/>
              ))}
            </div>

            <button onClick={() => { next(); resetInterval(); }}
              className="w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-amber-400 hover:text-amber-400 transition-all flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Side previews — desktop only */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
            active,
            (active + 1) % TESTIMONIALS.length,
          ].map((idx, pos) => {
            const item = TESTIMONIALS[idx];
            const isCenter = pos === 1;
            return (
              <button key={idx} onClick={() => { goTo(idx); resetInterval(); }}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isCenter
                    ? "border-amber-500/40 bg-white/10"
                    : "border-white/10 bg-white/3 opacity-50 hover:opacity-75"
                }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{background: item.color}}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{item.name}</div>
                    <div className="text-white/40 text-[10px]">{item.company}</div>
                  </div>
                </div>
                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">{item.quote.substring(0, 80)}...</p>
              </button>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/20 text-xs mt-8">
          Testimonials represent client experiences. Results may vary based on corridor, volume, and engagement scope.
        </p>
      </div>
    </section>
  );
}



