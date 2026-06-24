import { useMemo } from "react";
import { WEATHER_CODES } from "../services/weatherCodes";

function Hourly({ hourly, selectedDay, setSelectedDay, daily }) {
  const dayKey = selectedDay ? new Date(selectedDay).toDateString() : null;
  const now = new Date();
  const filteredHours = useMemo(() => {
    if (!hourly?.time || !selectedDay) return [];

    return hourly.time
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => {
        return new Date(t).toDateString() === dayKey;
      });
  }, [hourly, selectedDay]);
  const startIndex = useMemo(() => {
    if (!filteredHours.length) return 0;

    const isToday = new Date().toDateString() === dayKey;

    if (!isToday) return 0;

    return filteredHours.findIndex(({ t }) => new Date(t) >= now);
  }, [filteredHours, dayKey]);
  const safeStart = startIndex === -1 ? 0 : startIndex;

  const next8 = filteredHours.slice(safeStart, safeStart + 8);

  return (
    <section className="hourly-display">
      <div className="hourly-selector">
        <h3>Hourly Forecast</h3>

        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {daily.time.map((day) => (
            <option key={day} value={day}>
              {new Date(day).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </option>
          ))}
        </select>
      </div>
      <div className="hourly">
        {next8.map(({ t, i }) => {
          const code = hourly.weather_code[i];
          const weather = WEATHER_CODES[code] ?? WEATHER_CODES[0];

          return (
            <div key={t}>
              <p>{new Date(t).getHours()}:00</p>
              <img
                className="hourly-icon"
                src={weather.day}
                alt={weather.label}
              />
              <p>{Math.round(hourly.temperature_2m[i])}°</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hourly;
