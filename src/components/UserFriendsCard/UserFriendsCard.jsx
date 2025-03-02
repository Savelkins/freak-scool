import PropTypes from "prop-types";
import Friends from "./../Friends/Friends";
import styles from "./UserFriendsCard.module.scss";

const UserFriendsCard = ({ friends }) => {
  return (
    <div className={styles["friends-card"]}>
      <p>Друзья</p>
      <div className={styles["friend-actions"]}>
        <button>Запросы в друзья</button>
        <img src="/src/components/UserFriendsCard/4115230-cancel-close-cross-delete_114048.svg" />
      </div>
      <div className={styles["friends-container"]}>
        <Friends friends={friends} />
      </div>
    </div>
  );
};

UserFriendsCard.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default UserFriendsCard;
