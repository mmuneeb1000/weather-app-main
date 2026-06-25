import { useMemo, useState, useRef } from "react";
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

  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <section className="hourly-display">
      <div className="hourly-selector">
        <h3>Hourly Forecast</h3>

        <div className="day-selector">
          <button
            className="day-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {selectedDay
              ? new Date(selectedDay).toLocaleDateString("en-US", {
                  weekday: "long",
                })
              : "Select Day"}
            <i className="fa-solid fa-angle-down"></i>
          </button>

          {open && (
            <ul className="day-menu">
              {daily.time.map((day) => (
                <li
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setOpen(false);
                  }}
                >
                  {new Date(day).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="hourly">
        {filteredHours.map(({ t, i }) => {
          const code = hourly.weather_code[i];
          const weather = WEATHER_CODES[code] ?? WEATHER_CODES[0];

          return (
            <div key={t}>
              <p className="time-hourly">
                <img
                  className="hourly-icon"
                  src={weather.day}
                  alt={weather.label}
                />
                {new Date(t).getHours()}:00
              </p>

              <p className="hourly-temp">
                {Math.round(hourly.temperature_2m[i])}°
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hourly;
