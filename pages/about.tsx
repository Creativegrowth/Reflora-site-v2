import Nav from '../components/Nav';

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <section className="mx-auto max-w-4xl p-10">
        <h1 className="text-4xl font-bold mb-6">About Reflora</h1>
        <p className="max-w-2xl text-slate-700">
          Reflora is a clinical‑luxury wellness brand focused on clean, high‑purity CBG products
          that support calm and focus. Our patent‑pending lemongrass extraction enables consistent potency
          and PR‑safe sourcing.
        </p>
      </section>
    </main>
  );
}
