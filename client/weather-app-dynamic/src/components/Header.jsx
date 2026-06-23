import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";
function Header() {
  return (
    <header>
      <img src={logo} />
      <select className="unit-select">
        <option value="" disabled>
          Units
        </option>
        <option>Imperial</option>
        <option value="" disabled>
          Farhenhait
        </option>
        <option value="" disabled>
          mph
        </option>
        <option>Metric</option>
        <option value="" disabled>
          Celcius
        </option>
        <option value="" disabled>
          km/h
        </option>
      </select>
    </header>
  );
}

export default Header;
