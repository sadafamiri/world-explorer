// This page fetches fresh data every time.

export default async function CountryDetailsPage({ params }) {

  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const country = data[0];

  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6 mb-4">
        {country.name?.common}
      </h1>

      <div className="space-y-3 text-lg">
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0]}
        </p>

        <p>
          <span className="font-semibold">Region:</span>{" "}
          {country.region}
        </p>

        <p>
          <span className="font-semibold">Subregion:</span>{" "}
          {country.subregion}
        </p>

        <p>
          <span className="font-semibold">Population:</span>{" "}
          {country.population?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}