import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";

function Header({ units, onUnitChange }) {
  return (
    <header>
      <img src={logo} />
      <select
        className="unit-select"
        value={units}
        onChange={(e) => onUnitChange(e.target.value)}
      >
        <option value="" disabled>
          Units
        </option>
        <option value="metric">Metric</option>
        <option value="" disabled>
          Celcius
        </option>
        <option value="" disabled>
          km/h
        </option>
        <option value="" disabled>
          mm
        </option>
        <option value="imperial">Imperial</option>
        <option value="" disabled>
          Farhenhait
        </option>
        <option value="" disabled>
          mph
        </option>
        <option value="" disabled>
          inch
        </option>
      </select>
    </header>
  );
}

export default Header;
