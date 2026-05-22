import CountryCard from "@/component/CountryCard";

export default function CountriesPage() {
    const res = await fetch ("https://restcountries.com/v3.1/all", {
        cache : "force-cache",
});

const countries = await res.json();
}