import { WEATHER_CODES } from "../services/weatherCodes";

function Daily({ daily }) {
  return (
    <section className="daily-display">
      <h2>7-Day Forecast</h2>

      <div className="daily">
        {daily.time.map((day, index) => {
          const code = daily.weather_code[index];

          const weather = WEATHER_CODES[code] ?? WEATHER_CODES[0];

          return (
            <article key={day}>
              <p>
                {new Date(day).toLocaleDateString("en-US", { weekday: "long" })}
              </p>

              <img
                className="card-icon"
                src={weather.day}
                alt={weather.label}
              />

              <p>
                {Math.round(daily.temperature_2m_max[index])}° /
                {Math.round(daily.temperature_2m_min[index])}°
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Daily;
