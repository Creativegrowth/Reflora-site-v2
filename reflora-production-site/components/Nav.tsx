import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={32} height={32} alt="Reflora" />
          <span className="font-semibold">Reflora</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
