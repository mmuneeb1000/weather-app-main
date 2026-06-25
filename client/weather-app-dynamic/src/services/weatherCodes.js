import sunny from "../assets/images/icon-sunny.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import fog from "../assets/images/icon-fog.webp";
import rain from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import storm from "../assets/images/icon-storm.webp";

export const WEATHER_CODES = {
  0: {
    day: sunny,
    night: sunny,
    label: "Clear sky",
  },
  1: {
    day: partlyCloudy,
    night: partlyCloudy,
    label: "Mainly clear",
  },
  2: {
    day: partlyCloudy,
    night: partlyCloudy,
    label: "Partly cloudy",
  },
  3: {
    day: drizzle,
    night: drizzle,
    label: "Overcast",
  },
  45: {
    day: fog,
    night: fog,
    label: "Fog",
  },
  48: {
    day: fog,
    night: fog,
    label: "Depositing rime fog",
  },
  51: {
    day: drizzle,
    night: drizzle,
    label: "Light drizzle",
  },
  53: {
    day: drizzle,
    night: drizzle,
    label: "Moderate drizzle",
  },
  55: {
    day: drizzle,
    night: drizzle,
    label: "Dense drizzle",
  },
  61: {
    day: rain,
    night: rain,
    label: "Slight rain",
  },
  63: {
    day: rain,
    night: rain,
    label: "Moderate rain",
  },
  65: {
    day: rain,
    night: rain,
    label: "Heavy rain",
  },
  71: {
    day: snow,
    night: snow,
    label: "Slight snow",
  },
  73: {
    day: snow,
    night: snow,
    label: "Moderate snow",
  },
  75: {
    day: snow,
    night: snow,
    label: "Heavy snow",
  },
  80: {
    day: storm,
    night: storm,
    label: "Rain showers",
  },
  81: {
    day: storm,
    night: storm,
    label: "Moderate rain showers",
  },
  82: {
    day: storm,
    night: storm,
    label: "Violent rain showers",
  },
  95: {
    day: storm,
    night: storm,
    label: "Thunderstorm",
  },
  96: {
    day: storm,
    night: storm,
    label: "Thunderstorm with hail",
  },
  99: {
    day: storm,
    night: storm,
    label: "Severe thunderstorm with hail",
  },
};
