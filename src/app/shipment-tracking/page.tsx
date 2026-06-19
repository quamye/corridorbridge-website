import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Shipment Tracking", description: "Monitor, manage, and optimize cross-border shipments with real-time tracking, exception management, and operational intelligence.", keywords: "shipment tracking Africa Canada, cross-border logistics, trade tracking platform" };
export default function Page() {
  return (
    <>
      <section className="bg-blue-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Shipment Tracking</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">Real-Time Logistics Visibility Across Africa-Canada Trade Lanes</h1>
          <p className="text-white/60 text-xl max-w-2xl">Monitor, manage, and optimize cross-border shipments with real-time tracking, exception management, and operational intelligence.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Request Demo</Link>
            <Link href="https://app.corridorbridge.com/signup" className="btn-outline px-8 py-3.5">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-blue-950 mb-4">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div key="Real-Time Status" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Real-Time Status</h3><p className="text-gray-500 text-sm leading-relaxed">Live shipment status updates across all Africa-Canada trade lanes.</p></div>
            <div key="Exception Management" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Exception Management</h3><p className="text-gray-500 text-sm leading-relaxed">Proactive alerts and exception handling for delays and disruptions.</p></div>
            <div key="Document Management" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Document Management</h3><p className="text-gray-500 text-sm leading-relaxed">Shipping documents, customs paperwork, and compliance certificates.</p></div>
            <div key="Route Analytics" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Route Analytics</h3><p className="text-gray-500 text-sm leading-relaxed">Performance analytics across corridors and logistics providers.</p></div>
            <div key="Partner Integration" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Partner Integration</h3><p className="text-gray-500 text-sm leading-relaxed">Connect with freight forwarders, customs brokers, and logistics partners.</p></div>
            <div key="Compliance Linking" className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:border-amber-200 transition-all"><h3 className="font-bold text-blue-950 mb-2">Compliance Linking</h3><p className="text-gray-500 text-sm leading-relaxed">Connect shipment data to payment workflows and compliance documentation.</p></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8">Talk to our team about your specific corridor requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3.5">Request Demo</Link>
            <Link href="/services" className="btn-outline px-8 py-3.5">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
