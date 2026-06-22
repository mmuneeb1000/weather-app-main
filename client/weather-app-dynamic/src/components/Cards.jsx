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
        <h2>
          {location.name}, {location.country}
        </h2>
        <img
          className="card-icon"
          src={weatherInfo.icon}
          alt={weatherInfo.label}
        />
        <h2>{Math.round(current.temperature_2m)}°</h2>
        <p>{currentDate}</p>
      </div>
      <div className="secondary-display">
        <div>Feels Like {current.apparent_temperature}°</div>
        <div>Humidity {current.relative_humidity_2m}%</div>
        <div> Wind: {current.wind_speed_10m} km/h</div>
        <div>Precipitation {current.precipitation} mm</div>
      </div>
    </section>
  );
}

export default Cards;
