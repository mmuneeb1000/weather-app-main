function Hourly({ hourly }) {
  const hours = hourly.time.slice(0, 24);
  return (
    <section className="hourly-display">
      <h2>Hourly Forecast</h2>

      <div className="hourly">
        {hours.slice(0, 10).map((hour, index) => (
          <div key={hour}>
            <p>{new Date(hour).getHours()}:00</p>

            <p>{Math.round(hourly.temperature_2m[index])}°</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hourly;
