import { useState, useEffect } from "react";
import { getWeatherByCity, searchCities } from "./services/api";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNight, setIsNight] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [units, setUnits] = useState("metric");
  const [selectedDay, setSelectedDay] = useState(null);

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

  async function searchWeather(city, selectedUnits = units) {
    try {
      setLoading(true);
      setError("");
      setNoResults(false);
      setSuggestions([]);
      const data = await getWeatherByCity(city, selectedUnits);
      if (!data?.weather || !data?.location) {
        setWeather(null);
        setLocation(null);
        setWeatherInfo(null);
        setIsNight(false);
        setNoResults(true);
        return;
      }

      setWeather(data.weather);
      setLocation(data.location);
      setWeatherInfo(data.weatherInfo);
      setIsNight(data.isNight);
    } catch (err) {
      setWeather(null);
      setLocation(null);
      setWeatherInfo(null);
      setIsNight(false);
      setNoResults(true);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  function handleUnitChange(newUnits) {
    setUnits(newUnits);

    if (location?.name) {
      searchWeather(location.name, newUnits);
    }
  }
  useEffect(() => {
    searchWeather("Arlington", units);
  }, []);

  useEffect(() => {
    if (weather?.daily?.time?.length) {
      setSelectedDay(weather.daily.time[1]);
    }
  }, [weather]);

  return (
    <>
      <Header units={units} onUnitChange={handleUnitChange} />

      <Search
        onSearch={searchWeather}
        query={query}
        setQuery={setQuery}
        handleCitySearch={handleCitySearch}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />

      {loading && <Loading />}

      {error && <Error />}

      {noResults && !loading && <h2>No Search Results Found</h2>}

      {!loading && weather && !noResults && (
        <main>
          <Cards
            current={weather.current}
            location={location}
            weatherInfo={weatherInfo}
            isNight={isNight}
            units={units}
          />

          <Hourly
            hourly={weather.hourly}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            daily={weather.daily}
          />

          <Daily daily={weather.daily} />
        </main>
      )}

      <Footer />
    </>
  );
}

export default App;
