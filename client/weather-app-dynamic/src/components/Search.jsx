import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!city.trim()) return;
    Onsearch(city);
  }
  return (
    <section className="search">
      <h1>How's the sky looking today?</h1>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city, e.g., New York Search Feels like"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Search</button>
      </form>
    </section>
  );
}

export default Search;
