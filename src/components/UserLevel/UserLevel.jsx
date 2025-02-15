import { useState, useEffect } from "react";
import styles from "./UserLevel.module.scss";

const LevelProgress = (props) => {
  const { user } = props;

  // Начальные значения для уровня и прогресса
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);

  // Вычисляем уровень на основе XP и прогресс
  const calculateLevelAndProgress = (xp) => {
    let currentLevel = 0;
    let xpToNextLevel = 1; // Стартовое количество XP для уровня

    // Находим уровень и оставшийся прогресс
    while (xp >= xpToNextLevel) {
      xp -= xpToNextLevel;
      currentLevel++;
      xpToNextLevel *= 4; // XP увеличивается с каждым уровнем
    }

    // Вычисляем прогресс для текущего уровня
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
    <div>
      <div>{`Lvl: ${level}`}</div>
      <div className={styles.progress}>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LevelProgress;
