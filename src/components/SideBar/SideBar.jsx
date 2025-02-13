import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>Freak School</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
