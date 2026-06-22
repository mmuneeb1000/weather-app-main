import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";
function Header() {
  return (
    <header>
      <img src={logo} />
      <select>
        <option>
          Units <img src={unitsLogo} />
        </option>
        <option>Celsius</option>
        <option>Farhenhait</option>
        <option>mph</option>
        <option>km/h</option>
        <option>milimeters(mm)</option>
        <option>inches(in)</option>
      </select>
    </header>
  );
}

export default Header;
