import "./Header.scss";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import Sound from "../Sound/Sound.js";

function Header() {
  return (
    <header className="Header">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Sound />
    </header>
  );
}
export default Header;
