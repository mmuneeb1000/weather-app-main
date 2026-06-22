function Daily({ daily }) {
  return (
    <section className="daily-display">
      <h2>7-Day Forecast</h2>
      <div>
        {daily.time.map((day, index) => (
          <article key={day}>
            <p>
              {new Date(day).toLocaleDateString("en-US", { weekday: "long" })}
            </p>

            <p>
              {Math.round(daily.temperature_2m_max[index])}° /
              {Math.round(daily.temperature_2m_min[index])}°
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Daily;
