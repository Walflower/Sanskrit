import "./User.scss";
import UserPicture from "../../assets/images/default-profile-no-background.png";

function User() {
  return <img className="userProfile" src={UserPicture} alt="userprofile" />;
}

export default User;
