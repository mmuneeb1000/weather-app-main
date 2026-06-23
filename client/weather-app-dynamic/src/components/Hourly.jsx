import { WEATHER_CODES } from "../services/weatherCodes";

function Hourly({ hourly }) {
  const hours = hourly.time.slice(0, 24);
  const weekdays = [
    ...new Set(
      hourly.time.map((time) =>
        new Date(time).toLocaleDateString("en-US", {
          weekday: "long",
        }),
      ),
    ),
  ];
  return (
    <section className="hourly-display">
      <div className="hourly-selector">
        <h2>Hourly Forecast</h2>

        <select>
          {weekdays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="hourly">
        {hours.slice(0, 8).map((hour, index) => {
          const code = hourly.weather_code[index];

          const weather = WEATHER_CODES[code] ?? WEATHER_CODES[0];

          return (
            <div key={hour}>
              <p>{new Date(hour).getHours()}:00</p>

              <img
                className="hourly-icon"
                src={weather.day}
                alt={weather.label}
              />

              <p>{Math.round(hourly.temperature_2m[index])}°</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hourly;
