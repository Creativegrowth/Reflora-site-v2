import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="flex items-center gap-3 mb-6">
        <Image src="/logo.png" width={120} height={36} alt="Reflora logo" />
        <span className="text-sm opacity-70">clinical‑luxury wellness</span>
      </div>
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
    </main>
  );
}
