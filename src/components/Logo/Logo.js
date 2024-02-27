import "./Logo.scss";
import sanskritLogo from "../../assets/logo/sanskrit.png";

function Logo() {
  return (
    <>
      <img className="header__logo" src={sanskritLogo} alt="website logo" />
    </>
  );
}
export default Logo;
