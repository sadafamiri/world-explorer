import CountrySearch from "@/app/component/CountrySearch";

export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    {
      cache: "force-cache",
    },
  );

  const countries = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Countries</h1>

      <CountrySearch countries={countries} />
    </div>
  );
}
