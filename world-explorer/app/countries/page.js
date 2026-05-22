// This page can be statically rendered and cached.

import CountryCard from "@/component/CountryCard";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    {
      cache: "force-cache",
    }
  );

  const countries = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Countries
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}