"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded w-full mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
