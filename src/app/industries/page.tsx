import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Industries", description: "CorridorBridge serves fintechs, logistics providers, importers, exporters, government agencies, and financial institutions across Africa-Canada corridors." };
const INDUSTRIES = [
  { name: "Fintech", href: "/industries/fintech", desc: "Payment and financial technology companies." },
  { name: "Logistics", href: "/industries/logistics", desc: "Freight, shipping, and logistics providers." },
  { name: "Import & Export", href: "/industries/import-export", desc: "Importers and exporters across corridors." },
  { name: "Government", href: "/industries/government", desc: "Government agencies and public sector." },
  { name: "Financial Institutions", href: "/industries/financial-institutions", desc: "Banks and financial institutions." },
];
export default function IndustriesPage() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Industries</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Built for Your Industry</h1>
          <p className="text-white/60 text-xl max-w-2xl">Cross-border infrastructure solutions tailored to each industry's regulatory, operational, and compliance requirements.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(({ name, href, desc }) => (
            <Link key={name} href={href} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all block">
              <h3 className="font-bold text-blue-950 text-xl mb-3">{name}</h3>
              <p className="text-gray-500 text-sm mb-4">{desc}</p>
              <span className="text-amber-600 text-xs font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
