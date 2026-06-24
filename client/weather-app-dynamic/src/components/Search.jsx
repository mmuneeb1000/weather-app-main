import { useState } from "react";
import { useEffect } from "react";
import { searchCities } from "../services/api";

function Search({ onSearch, query, setQuery, suggestions, searchCities }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      searchCities(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, searchCities]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  }
  return (
    <section className="search">
      <h1>How's the sky looking today?</h1>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city, e.g., New York"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>

        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((city) => (
              <li
                key={`${city.latitude}-${city.longitude}`}
                onClick={() => {
                  setQuery(city.name);
                  onSearch(city.name);
                }}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
}

export default Search;
