export default function CountryCard({ country }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-4">{country.name.common}</h2>
      <p>
        <span className="font-semibold">Capital:</span> {country.capital?.[0]}
      </p>
      <p>
        <span className="font-semibold">Region:</span> {country.region}
      </p>

      <p>
        <span className="font-semibold">Population:</span>{" "}
        {country.population.toLocaleString()}
      </p>

      <Link
        href={`/countries/${country.cca3}`}
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
