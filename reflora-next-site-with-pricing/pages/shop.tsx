import Image from 'next/image';
import Link from 'next/link';

const LINKS = {
  focusOneTime: "https://checkout.stripe.com/c/pay_FOCUS_ONETIME_PLACEHOLDER",
  relaxOneTime: "https://checkout.stripe.com/c/pay_RELAX_ONETIME_PLACEHOLDER",
  singleSub: "https://checkout.stripe.com/c/pay_SINGLE_SUB_PLACEHOLDER",
  dualSub: "https://checkout.stripe.com/c/pay_DUAL_SUB_PLACEHOLDER"
};

export default function Shop() {
  return (
    <main className="min-h-screen p-6 sm:p-10 bg-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between mb-8">
          <Link href="/" className="text-sm text-slate-600 hover:underline">← Back</Link>
          <h1 className="text-3xl font-bold">Shop Reflora</h1>
          <div />
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Re-Focus */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="relative h-56 w-full mb-4">
              <Image src="/refocus.png" alt="Reflora Re-Focus" fill className="object-contain" />
            </div>
            <h2 className="text-xl font-semibold">Reflora Re‑Focus</h2>
            <p className="text-slate-600">30‑day supply • Focus & clarity</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-slate-700 space-y-1">
              <li>100mg CBG per gummy (non‑intoxicating)</li>
              <li>L‑Theanine + Lion’s Mane</li>
              <li>Manufactured in cGMP facilities</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <a target="_blank" rel="noreferrer" href={LINKS.focusOneTime} className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500">Buy — $60</a>
              <a target="_blank" rel="noreferrer" href={LINKS.singleSub} className="px-4 py-2 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50">Subscribe — $50/mo</a>
            </div>
          </div>

          {/* Relax */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="relative h-56 w-full mb-4">
              <Image src="/relax.png" alt="Reflora Relax" fill className="object-contain" />
            </div>
            <h2 className="text-xl font-semibold">Reflora Relax</h2>
            <p className="text-slate-600">30‑day supply • Calm & unwind</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-slate-700 space-y-1">
              <li>CBG + calming adaptogens</li>
              <li>Vegan • low sugar</li>
              <li>Third‑party tested</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <a target="_blank" rel="noreferrer" href={LINKS.relaxOneTime} className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500">Buy — $60</a>
              <a target="_blank" rel="noreferrer" href={LINKS.singleSub} className="px-4 py-2 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50">Subscribe — $50/mo</a>
            </div>
          </div>
        </section>

        {/* Bundle */}
        <section className="mt-10 border rounded-2xl p-6 bg-emerald-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Dual Subscription Bundle</h3>
              <p className="text-slate-700 text-sm">30‑day supply of both Relax and Re‑Focus</p>
            </div>
            <a target="_blank" rel="noreferrer" href={LINKS.dualSub} className="px-5 py-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-600 w-full sm:w-auto text-center">Subscribe — $80/mo</a>
          </div>
        </section>

        <p className="text-xs text-slate-500 mt-4">
          Tip: Replace the placeholder Stripe links in <code>pages/shop.tsx</code> to start accepting payments.
        </p>
      </div>
    </main>
  );
}
