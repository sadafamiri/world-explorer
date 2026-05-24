import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">World Explorer</h1>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore countries around the world, discover capitals, populations,
        regions, and more using real API data.
      </p>

      <Link
        href="/countries"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Explore Countries
      </Link>
    </div>
  );
}
