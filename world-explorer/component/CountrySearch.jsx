"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}