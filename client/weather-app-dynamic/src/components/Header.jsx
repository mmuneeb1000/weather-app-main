import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";
import { useState, useRef } from "react";

function Header({ units, onUnitChange }) {
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
    <header>
      <img src={logo} alt="Logo" />
      <button
        className="settings-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa-solid fa-gear"></i>
        <span>Units</span>
        <i className="fa-solid fa-angle-down"></i>
      </button>

      {open && (
        <ul className="unit-menu">
          <li
            onClick={() => {
              onUnitChange("metric");
              setOpen(false);
            }}
          >
            <strong>Metric</strong>
            <span>°C • km/h • mm</span>
          </li>

          <li
            onClick={() => {
              onUnitChange("imperial");
              setOpen(false);
            }}
          >
            <strong>Imperial</strong>
            <span>°F • mph • in</span>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
