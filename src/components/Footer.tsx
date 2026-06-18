import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white/60 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <line x1="8" y1="24" x2="12" y2="12" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="24" x2="20" y2="12" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 24 Q16 6 24 24" stroke="#C5A059" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <line x1="6" y1="24" x2="26" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">CorridorBridge</div>
                <div className="text-amber-400 text-[9px] tracking-widest uppercase">Advisory</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/40">
              Trusted cross-border payment enablement between Africa, Canada, and the World.
            </p>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Readiness Assessment", "Partner Selection", "Workflow Design", "Controls Advisory", "Vendor Risk Review", "Fintech Readiness"].map(s => (
                <li key={s}><Link href="/services" className="hover:text-amber-400 transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Platform Login", href: "https://app.corridorbridge.com" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Privacy Policy", href: "https://app.corridorbridge.com/privacy" },
                { label: "Terms of Service", href: "https://app.corridorbridge.com/terms" },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="hover:text-amber-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Corridors</h4>
              <p className="text-xs text-white/40 leading-relaxed">Africa ↔ Canada ↔ USA ↔ Europe</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© 2025 CorridorBridge Advisory Inc. All rights reserved. Incorporated in Canada.</p>
          <div className="flex gap-6 text-xs">
            <Link href="https://app.corridorbridge.com/privacy" className="text-white/30 hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="https://app.corridorbridge.com/terms" className="text-white/30 hover:text-amber-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
