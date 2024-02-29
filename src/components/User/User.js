import "./User.scss";
import UserPicture from "../../assets/images/default-profile-no-background.png";

function User() {
  return <img className="userprofile" src={UserPicture} alt="userprofile" />;
}

export default User;
