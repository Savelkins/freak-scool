import styles from "./BoncingBalls.module.scss";

const BouncingBalls = () => {
  const balls = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 5}s`,
  }));

  return (
    <div className={styles.container}>
      {balls.map((ball) => (
        <div
          key={ball.id}
          className={styles.ball}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: ball.animationDelay,
            animationDuration: ball.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
