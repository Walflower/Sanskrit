import "./Logo.scss";
import sanksritLogo from "../../assets/logo/sanskrit.png";
//TODO a logo design

function Logo() {
  return (
    <>
      <img className="header__logo" src={sanksritLogo} alt="website logo" />
    </>
  );
}
export default Logo;
