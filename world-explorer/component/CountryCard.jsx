import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
      
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-3">
          {country.name.common}
        </h2>

        <p className="mb-2">
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0]}
        </p>

        <p className="mb-2">
          <span className="font-semibold">Region:</span>{" "}
          {country.region}
        </p>

        <p className="mb-4">
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}