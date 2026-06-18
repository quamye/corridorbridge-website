"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-blue-950/98 backdrop-blur-md shadow-lg" : "bg-blue-950/95"
    } border-b border-amber-500/10`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                <line x1="8" y1="24" x2="12" y2="12" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                <line x1="24" y1="24" x2="20" y2="12" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 24 Q16 6 24 24" stroke="#C5A059" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <line x1="6" y1="24" x2="26" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">CorridorBridge</div>
              <div className="text-amber-400 text-[9px] tracking-widest uppercase leading-tight">Advisory</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="text-white/70 hover:text-amber-400 text-sm font-medium transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://app.corridorbridge.com/signin"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors px-3 py-2">
              Sign In
            </Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-gold text-xs px-4 py-2">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4 flex flex-col gap-3">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-amber-400 text-sm font-medium py-1">
                {label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="https://app.corridorbridge.com/signin"
                className="text-white/70 text-sm border border-white/20 rounded-lg px-4 py-2">
                Sign In
              </Link>
              <Link href="https://app.corridorbridge.com/signup" className="btn-gold text-xs px-4 py-2">
                Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
