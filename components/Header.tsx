import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Header() {
  return (
    <header className="bg-[#690639] text-white">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center gap-2 no-underline">
          <img
            src="/images/logo.png"
            alt="ASWASC Logo"
            className="h-24 w-24 rounded-full border-2 border-white object-cover"
          />
          <span className="text-2xl font-bold text-white">A.S.W.A.S.C.</span>
        </Link>
        <p className="text-pink-200 text-sm mt-1">
          Anambra State Women Association of Southern California
        </p>
      </div>
      <nav className="bg-[#4c0026]">
        <ul className="mx-auto max-w-5xl flex flex-wrap justify-center gap-x-1 gap-y-1 px-2 py-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 rounded hover:bg-[#690639] transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
