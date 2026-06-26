import { WEATHER_CODES } from "./weatherCodes";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const REVERSE_GEO_URL = "https://geocoding-api.open-meteo.com/v1/reverse";
export async function searchCities(query) {
  if (query.length < 2) return [];

  const response = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(query)}&count=5`,
  );

  const data = await response.json();

  return data.results || [];
}

export async function getWeatherByCity(city, units = "metric") {
  const unitParams =
    units === "imperial"
      ? "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
      : "&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm";
  const geoResponse = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`,
  );

  if (!geoResponse.ok) {
    throw new Error("Failed to find city");
  }

  const geoData = await geoResponse.json();

  if (!geoData.results?.length) {
    throw new Error("City not found");
  }

  const location = geoData.results[0];

  const weatherResponse = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min&timezone=auto${unitParams}`,
  );

  if (!weatherResponse.ok) {
    throw new Error("Failed to fetch weather");
  }

  const weatherData = await weatherResponse.json();

  const sunrise = new Date(weatherData.daily.sunrise[0]);
  const sunset = new Date(weatherData.daily.sunset[0]);
  const now = new Date();

  const isNight = now < sunrise || now > sunset;

  const currentCode = weatherData.current.weather_code;

  const currentWeather = WEATHER_CODES[currentCode] ?? {
    day: "/icons/unknown.svg",
    night: "/icons/unknown.svg",
    label: "Unknown",
  };

  return {
    location,
    weather: weatherData,
    isNight,
    weatherInfo: {
      code: currentCode,
      label: currentWeather.label,
      icon: isNight ? currentWeather.night : currentWeather.day,
    },
  };
}
export async function getCityFromCoords(latitude, longitude) {
  const response = await fetch(
    `${REVERSE_GEO_URL}?latitude=${latitude}&longitude=${longitude}&count=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to determine location");
  }

  const data = await response.json();

  if (!data.results?.length) {
    throw new Error("Location not found");
  }

  return data.results[0].name;
}
