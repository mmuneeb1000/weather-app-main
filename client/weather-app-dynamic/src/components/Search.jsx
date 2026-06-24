import { useState } from "react";
import { useEffect } from "react";
import { searchCities } from "../services/api";
import searchIcon from "../assets/images/icon-search.svg";

function Search({
  onSearch,
  query,
  setQuery,
  suggestions,
  setSuggestions,
  handleCitySearch,
}) {
  const [selectedCity, setSelectedCity] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      setSelectedCity(false);
      return;
    }

    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await searchCities(query);
      setSuggestions(results);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    setSuggestions([]);
  }
  return (
    <section className="search">
      <h1>How's the sky looking today?</h1>
      <form className="search-box" onSubmit={handleSubmit}>
        <div>
          <span className="search-icon">
            <img src={searchIcon} />
          </span>
          <input
            type="text"
            placeholder="Search for a city, e.g., New York"
            value={query}
            onChange={(e) => {
              (setQuery(e.target.value), handleCitySearch(e.target.value));
            }}
          />
        </div>
        <button type="submit">Search</button>

        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((city) => (
              <li
                key={`${city.latitude}-${city.longitude}`}
                onClick={() => {
                  setSelectedCity(true);
                  setSuggestions([]);
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
