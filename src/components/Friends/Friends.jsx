import PropTypes from "prop-types";
import styles from "./Friends.module.scss";

const Friends = ({ friends }) => {
  return (
    <div className={styles.friends}>
      {friends.map((friend) => (
        <div key={friend.id}>
          <div>
            <img src={friend.avatar} alt={friend.username} />
            <p>{friend.username}</p>
          </div>
          <p>удалить</p>
        </div>
      ))}
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Friends;
