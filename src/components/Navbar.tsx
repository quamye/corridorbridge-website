"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV = {
  Platform: [
    { label: "Platform Overview", href: "/platform", desc: "One platform for cross-border operations" },
    { label: "Payments", href: "/payments", desc: "Multi-currency cross-border payments" },
    { label: "Shipment Tracking", href: "/shipment-tracking", desc: "Real-time logistics visibility" },
    { label: "Compliance Hub", href: "/compliance", desc: "KYC, AML, and regulatory management" },
  ],
  Solutions: [
    { label: "SMEs", href: "/solutions#smes", desc: "Small and medium enterprises" },
    { label: "Importers & Exporters", href: "/solutions#importers", desc: "Trade operators" },
    { label: "Fintechs", href: "/solutions#fintechs", desc: "Financial technology companies" },
    { label: "Financial Institutions", href: "/solutions#financial-institutions", desc: "Banks and lenders" },
    { label: "Government Agencies", href: "/solutions#government", desc: "Public sector organizations" },
    { label: "Logistics Providers", href: "/solutions#logistics", desc: "Freight and logistics companies" },
  ],
  Corridors: [
    { label: "Africa ↔ Canada", href: "/corridors/africa-canada", desc: "Primary corridor" },
    { label: "Ghana ↔ Canada", href: "/corridors/ghana-canada", desc: "Ghana trade lane" },
    { label: "Nigeria ↔ Canada", href: "/corridors/nigeria-canada", desc: "Nigeria trade lane" },
    { label: "Kenya ↔ Canada", href: "/corridors/kenya-canada", desc: "Kenya trade lane" },
  ],
  Company: [
    { label: "About", href: "/about", desc: "Our mission and story" },
    { label: "Leadership", href: "/leadership", desc: "Meet the leadership team" },
    { label: "Trust Center", href: "/trust", desc: "Security, compliance and privacy" },
    { label: "Partners", href: "/partners", desc: "Our partner ecosystem" },
    { label: "Security", href: "/security", desc: "Enterprise security framework" },
    { label: "Blog", href: "/blog", desc: "Insights and resources" },
    { label: "Case Studies", href: "/case-studies", desc: "Customer success stories" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-blue-950/98 backdrop-blur-md shadow-2xl" : "bg-blue-950/95 backdrop-blur-sm"
    } border-b border-amber-500/10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-900 border border-amber-500/20 flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                <line x1="8" y1="24" x2="12" y2="11" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                <line x1="24" y1="24" x2="20" y2="11" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 24 Q16 4 24 24" stroke="#C5A059" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <line x1="5" y1="24" x2="27" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight tracking-wide">CorridorBridge</div>
              <div className="text-amber-400 text-[9px] tracking-widest uppercase leading-tight font-medium">Infrastructure</div>
            </div>
          </Link>

          {/* Desktop mega menu */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(NAV).map(([key, items]) => (
              <div key={key} className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}>
                <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  activeMenu === key ? "text-amber-400" : "text-white/75 hover:text-white"
                }`}>
                  {key}
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeMenu === key ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {activeMenu === key && (
                  <div className="absolute top-full left-0 pt-2 z-50"
                    style={{minWidth: key === "Company" ? "280px" : "260px"}}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden">
                      {items.map(({ label, href, desc }) => (
                        <Link key={href} href={href} onClick={() => setActiveMenu(null)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-blue-950 group-hover:bg-amber-500 transition-colors"/>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-blue-950">{label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/services" className="px-3 py-2 rounded-lg text-sm font-medium text-white/75 hover:text-white transition-colors">Services</Link>
            <Link href="/pricing" className="px-3 py-2 rounded-lg text-sm font-medium text-white/75 hover:text-white transition-colors">Pricing</Link>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://app.corridorbridge.com/signin"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors px-3 py-2">
              Platform Login
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-amber-500 text-blue-950 hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5">
              Request Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 pt-4 space-y-1">
            {[
              { href: "/platform", label: "Platform" },
              { href: "/solutions", label: "Solutions" },
              { href: "/corridors/africa-canada", label: "Corridors" },
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/leadership", label: "Leadership" },
              { href: "/trust", label: "Trust Center" },
              { href: "/partners", label: "Partners" },
              { href: "/security", label: "Security" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-white/75 hover:text-amber-400 font-medium transition-colors">
                {label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 px-3">
              <Link href="https://app.corridorbridge.com/signin"
                className="text-white/60 text-sm border border-white/20 rounded-xl px-4 py-2.5 font-medium">
                Login
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs bg-amber-500 text-blue-950 hover:bg-amber-400 transition-all">
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
