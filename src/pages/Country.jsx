import { useState } from "react";
import useCountry from "../hooks/useCountry";
import CountryCard from "./../components/Layout/CountryCard";
import { Loader } from "./../components/UI/Loader";
import SearchFilter from './../components/UI/SearchFilter';

const Country = () => {
  const { countries, loading, sortCountries } = useCountry();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  if (loading) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } 
    return country;
  }

  const filterByRegion = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  }

  const filteredCountries = countries.filter((country) => searchCountry(country) && filterByRegion(country));

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}  
        sortCountries={sortCountries}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
