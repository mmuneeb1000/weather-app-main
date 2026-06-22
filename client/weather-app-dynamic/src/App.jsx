import { useState } from "react";
import { getWeatherByCity } from "./services/api";
import { useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNight, setIsNight] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState("");

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

      <Search onSearch={searchWeather} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weather && (
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
