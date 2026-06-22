function Hourly() {
  return (
    <section className="hourly-display">
      <h2>Hourly Forecast</h2>
      <select>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
      <div>10AM</div>
      <div>11AM</div>
      <div>12AM</div>
      <div>1PM</div>
    </section>
  );
}

export default Hourly;
