import loadingIcon from "../assets/images/icon-loading.svg";
import "../loading.css";

function Loading() {
  return (
    <main className="loading-state">
      <div className="skeleton-current">
        <div className="loading-primary-display">
          <img src={loadingIcon} /> <span>Loading...</span>
        </div>
        <div className="second-display">
          <div>
            Feels Like
            <p>—</p>
          </div>
          <div>
            Humidity <p>—</p>
          </div>
          <div>
            Wind <p>—</p>
          </div>
          <div>
            Precipitation <p>—</p>
          </div>
        </div>
      </div>

      <div className="skeleton-daily">
        <h3>7-Day Forecast</h3>
        <div className="daily-container">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="daily-element"></div>
          ))}
        </div>
      </div>

      <div className="skeleton-hourly">
        <div className="hourly-selector">
          <h3>Hourly Forecast</h3>

          <button className="day-trigger">
            — <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>

        <div className="hourly-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="hourly-element"></div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Loading;
