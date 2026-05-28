import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-14 max-w-3xl text-center">
        
        <h1 className="text-5xl font-bold mb-8">
          World Explorer
        </h1>

        <p className="text-lg text-gray-600 leading-9 mb-10">
          Explore countries around the world and discover
          information about capitals, regions, populations,
          and flags using real API data with Next.js.
        </p>

        <Link
          href="/countries"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
        >
          Explore Countries
        </Link>

      </div>
    </div>
  );
}