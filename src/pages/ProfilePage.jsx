import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserFriends, loginUser } from "../store/UsersSlice";
import UserCard from "../components/UserCard/UserCard";

import styles from "./ProfilePage.module.scss";
import UserSkills from "../components/UserSkills/UserSkills";
import UserFriendsCard from "../components/UserFriendsCard/UserFriendsCard";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { currentUser, friends, error, status } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(loginUser("Angel"));
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      dispatch(getUserFriends());
    }
  }, [dispatch, currentUser]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!currentUser) return <p>Пользователь не найден</p>;

  return (
    <>
      <div className={styles["user-info"]}>
        <div>
          <UserCard user={currentUser} />
          <button className={styles["edit-btn"]}>Редактировать профиль</button>
        </div>
        <UserSkills user={currentUser} />
      </div>
      <div className={styles["user-friends"]}>
        <UserFriendsCard friends={friends} />
      </div>
    </>
  );
};

export default ProfilePage;
