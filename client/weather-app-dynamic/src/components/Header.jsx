import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";
function Header() {
  return (
    <header>
      <img src={logo} />
      <select className="unit-selector">
        <option>Celsius - km/h</option>
        <option>Farhenhait - mph</option>
      </select>
    </header>
  );
}

export default Header;
