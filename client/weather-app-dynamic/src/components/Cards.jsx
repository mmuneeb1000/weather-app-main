function Cards({ current, location, weatherInfo }) {
  const now = new Date();
  const currentDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="weather-display">
      <div className="primary-display">
        <div>
          <h2 className="location">
            {location.name}, {location.country}
          </h2>
          <p>{currentDate}</p>
        </div>
        <img
          className="current-icon"
          src={weatherInfo.icon}
          alt={weatherInfo.label}
        />
        <h2 className="temperature">{Math.round(current.temperature_2m)}°</h2>
      </div>
      <div className="secondary-display">
        <div>
          Feels Like
          <p>{current.apparent_temperature}°</p>
        </div>
        <div>
          Humidity <p>{current.relative_humidity_2m}%</p>
        </div>
        <div>
          Wind <p>{current.wind_speed_10m} km/h</p>
        </div>
        <div>
          Precipitation <p>{current.precipitation} mm</p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
