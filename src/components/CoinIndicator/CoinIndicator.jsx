import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./CoinIndicator.module.scss";

const CoinIndicator = ({ user }) => {
  const [coins, setCoins] = useState(user.coins || 0);

  useEffect(() => {
    setCoins(user.coins);
  }, [user]);

  return (
    <div className={styles["coin-indicator"]}>
      <img
        src="/src/components/CoinIndicator/coinIcon/free-icon-coin-7782334.png"
        alt="Coin Icon"
      />
      <p>{coins}</p>
    </div>
  );
};

CoinIndicator.propTypes = {
  user: PropTypes.shape({
    coins: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinIndicator;
