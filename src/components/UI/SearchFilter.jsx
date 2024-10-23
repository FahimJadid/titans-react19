
const SearchFilter = ({search, setSearch, filter, setFilter, sortCountries}) => {

    const handleInputChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    }

    const handleSelectContinent = (e) => {
        e.preventDefault()
        setFilter(e.target.value);
    }


  return (
    <section className="section-searchFilter container">
      <div>
        <input type="text" placeholder="search" value={search} onChange={handleInputChange} />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select className="select-section" value={filter} onChange={handleSelectContinent}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
