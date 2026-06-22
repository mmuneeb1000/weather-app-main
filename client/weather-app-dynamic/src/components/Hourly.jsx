import { WEATHER_CODES } from "../services/weatherCodes";

function Hourly({ hourly }) {
  const hours = hourly.time.slice(0, 24);

  return (
    <section>
      <h2>Hourly Forecast</h2>

      <div className="hourly">
        {hours.slice(0, 10).map((hour, index) => {
          const code = hourly.weather_code[index];

          const weather = WEATHER_CODES[code] ?? WEATHER_CODES[0];

          return (
            <div key={hour}>
              <p>{new Date(hour).getHours()}:00</p>

              <img
                className="card-icon"
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
