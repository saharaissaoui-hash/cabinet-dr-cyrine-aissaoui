import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight text-gray-900">
          Dr Cyrine Aissaoui
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <Link href="/#treatments" className="hover:text-gray-900">
            Soins
          </Link>
          <Link href="/#about" className="hover:text-gray-900">
            À propos
          </Link>
          <Link href="/#contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <Link
          href="/#booking"
          className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Prendre RDV
        </Link>
      </div>
    </header>
  );
}