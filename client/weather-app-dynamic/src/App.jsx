import { useState } from "react";
import { getWeatherByCity, searchCities } from "./services/api";
import { useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";
import Loading from "./components/Loading";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNight, setIsNight] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function handleCitySearch(value) {
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      const results = await searchCities(value);
      setSuggestions(results || []);
    } catch {
      setSuggestions([]);
    }
  }

  async function searchWeather(city) {
    try {
      setLoading(true);
      setError("");

      const data = await getWeatherByCity(city);

      setWeather(data.weather);
      setLocation(data.location);
      setWeatherInfo(data.weatherInfo);
      setIsNight(data.isNight);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    searchWeather("Arlington");
  }, []);

  return (
    <>
      <Header />

      <Search
        onSearch={searchWeather}
        query={query}
        setQuery={handleCitySearch}
        suggestions={suggestions}
      />

      {loading && <Loading />}

      {error && <p>{error}</p>}

      {!loading && weather && (
        <main>
          <Cards
            current={weather.current}
            location={location}
            weatherInfo={weatherInfo}
            isNight={isNight}
          />

          <Hourly hourly={weather.hourly} />

          <Daily daily={weather.daily} />
        </main>
      )}

      <Footer />
    </>
  );
}

export default App;
