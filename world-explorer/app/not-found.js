import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        404
      </h1>

      <p className="text-lg mb-8">
        Page not found
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>
    </div>
  );
}