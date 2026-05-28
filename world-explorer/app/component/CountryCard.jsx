import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        
        <h2 className="text-2xl font-bold mb-4">
          {country.name.common}
        </h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0]}
          </p>

          <p>
            <span className="font-semibold">Region:</span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-5 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}