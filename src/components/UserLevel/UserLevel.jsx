import { useState, useEffect } from "react";
import styles from "./UserLevel.module.scss";
import { PropTypes } from "prop-types";
import CoinIndicator from "../CoinIndicator/CoinIndicator";

const UserLevel = ({ user }) => {
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);

  const calculateLevelAndProgress = (xp) => {
    let currentLevel = 0;
    let xpToNextLevel = 1;
    while (xp >= xpToNextLevel) {
      xp -= xpToNextLevel;
      currentLevel++;
      xpToNextLevel *= 4;
    }
    const progressPercent = (xp / xpToNextLevel) * 100;
    return { currentLevel, progressPercent };
  };

  useEffect(() => {
    const { currentLevel, progressPercent } = calculateLevelAndProgress(
      user.xp
    );
    setLevel(currentLevel);
    setProgress(progressPercent);
  }, [user.xp]);

  return (
    <div className={styles["user-level"]}>
      <div className={styles["level-coins"]}>
        <p>{`Lvl: ${level}`}</p>
        <CoinIndicator user={user} />
      </div>

      <div className={styles.progress}>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

UserLevel.propTypes = {
  user: PropTypes.shape({
    xp: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserLevel;
