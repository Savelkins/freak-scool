import styles from "./UserCard.module.scss";
import UserLevel from "../UserLevel/UserLevel";
import { PropTypes } from "prop-types";
const UserCard = ({ user }) => {
  return (
    <div className={styles["user-card"]}>
      <div className={styles["avatar-container"]}>
        <img src={user.avatar} />
      </div>
      <div className={styles["info-container"]}>
        <p>{user.username}</p>
        <UserLevel user={user} />
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
