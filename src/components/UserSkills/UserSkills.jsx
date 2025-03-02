import PropTypes from "prop-types";
import styles from "./UserSkills.module.scss";

const UserSkills = ({ user }) => {
  return (
    <div className={styles["user-skills"]}>
      <p>Skills</p>
      <div>
        {user.skills.frontend?.length > 0 && (
          <div className={styles.frontend}>
            <p>Frontend</p>
            <ul>
              {user.skills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {user.skills.backend?.length > 0 && (
          <div className={styles.backend}>
            <p>Backend</p>
            <ul>
              {user.skills.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

UserSkills.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    skills: PropTypes.shape({
      frontend: PropTypes.arrayOf(PropTypes.string),
      backend: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }).isRequired,
};

export default UserSkills;
