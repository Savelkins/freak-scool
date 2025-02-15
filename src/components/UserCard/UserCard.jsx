import UserLevel from "../UserLevel/UserLevel";
import styles from "./UserCard.module.scss";
import PropTypes from "prop-types";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div className={styles.userCard}>
      <div className={styles["user-avatar-container"]}>
        <img src={user.avatar} />
        <p>{user.username}</p>
        <UserLevel user={user} />
      </div>
      <div className={styles["user-info"]}>
        <div>
          <p>{user.role}</p>
        </div>

        <button>Редактировать</button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default UserCard;
