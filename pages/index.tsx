import Link from 'next/link';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white px-6">
        <h1 className="text-5xl font-semibold text-center max-w-3xl leading-tight">
          Focus & calm without the jitters.
        </h1>
        <p className="mt-4 text-slate-300 text-center max-w-2xl">
          Reflora Relax and Re‑Focus — clean CBG blends designed for steady calm and deep work.
        </p>
        <div className="mt-8 flex gap-4">
          <Link className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium" href="/shop">Shop</Link>
          <Link className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10" href="/about">About</Link>
        </div>
      </section>
    </main>
  );
}
