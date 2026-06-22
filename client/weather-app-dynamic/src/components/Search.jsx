function Search() {
  return (
    <section className="search">
      <h1>How's the sky looking today?</h1>
      <div className="search-box">
        <input
          itemType="search"
          placeholder="Search for a city, e.g., New York Search Feels like"
        ></input>
        <button>Search</button>
      </div>
    </section>
  );
}

export default Search;
