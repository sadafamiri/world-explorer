import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          World Explorer
        </Link>

        <div className="flex gap-6 text-lg">
          <Link
            href="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            href="/countries"
            className="hover:text-gray-300 transition"
          >
            Countries
          </Link>

          <Link
            href="/search"
            className="hover:text-gray-300 transition"
          >
            Search
          </Link>

          <Link
            href="/about"
            className="hover:text-gray-300 transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}