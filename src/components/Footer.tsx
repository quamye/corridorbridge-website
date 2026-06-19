import Link from "next/link";

const DISCLAIMER = "CorridorBridge provides technology, advisory, and operational enablement services. CorridorBridge does not provide legal, banking, money transmission, or regulated financial services unless expressly licensed or partnered with authorized providers.";

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white/50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-900 border border-amber-500/20 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <line x1="8" y1="24" x2="12" y2="11" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="24" x2="20" y2="11" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 24 Q16 4 24 24" stroke="#C5A059" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <line x1="5" y1="24" x2="27" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">CorridorBridge</div>
                <div className="text-amber-400 text-[9px] tracking-widest uppercase font-medium">Infrastructure</div>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-5">
              Cross-border infrastructure connecting Africa and Canada through payments, logistics, compliance, and technology.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/corridorbridge" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <LinkedInIcon />
              </a>
              <a href="https://x.com/corridorbridge" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <TwitterIcon />
              </a>
              <a href="mailto:hello@corridorbridge.com"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
            <div className="flex gap-2 mt-5 flex-wrap">
              {["Africa ↔ Canada", "Canada-Based", "Enterprise Ready"].map(b => (
                <span key={b} className="text-[10px] px-2.5 py-1 rounded-full border border-amber-500/20 text-amber-400/70 font-medium">{b}</span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Security", href: "/security" },
                { label: "Contact", href: "/contact" },
                { label: "Platform Login", href: "https://app.corridorbridge.com" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">Platform</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Overview", href: "/platform" },
                { label: "Payments", href: "/payments" },
                { label: "Shipment Tracking", href: "/shipment-tracking" },
                { label: "Compliance", href: "/compliance" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Solutions", href: "/solutions" },
                { label: "Industries", href: "/industries" },
                { label: "Corridors", href: "/corridors" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal + Corridors */}
          <div>
            <h4 className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">Legal</h4>
            <ul className="space-y-3 text-sm mb-6">
              {[
                { label: "Privacy Policy", href: "https://app.corridorbridge.com/privacy" },
                { label: "Terms of Service", href: "https://app.corridorbridge.com/terms" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <h4 className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Corridors</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Africa ↔ Canada", href: "/corridors/africa-canada" },
                { label: "Africa ↔ USA", href: "/corridors/africa-canada" },
                { label: "Africa ↔ Europe", href: "/corridors/africa-canada" },
                { label: "Africa ↔ UK", href: "/corridors/africa-canada" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors text-xs">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-xs text-white/25 leading-relaxed max-w-4xl">{DISCLAIMER}</p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">© 2025 CorridorBridge Advisory Inc. All rights reserved. Incorporated in Canada.</p>
          <div className="flex gap-6">
            <Link href="https://app.corridorbridge.com/privacy" className="text-xs text-white/25 hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="https://app.corridorbridge.com/terms" className="text-xs text-white/25 hover:text-amber-400 transition-colors">Terms</Link>
            <Link href="/security" className="text-xs text-white/25 hover:text-amber-400 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
