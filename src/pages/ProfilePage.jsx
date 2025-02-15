import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  loginUser } from "../store/UsersSlice";

import UserCard from "../components/UserCard/UserCard";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { currentUser, error, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loginUser("angel"));
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!currentUser) return <p>Пользователь не найден</p>;

  return (
    <div>
      <UserCard user={currentUser} />
    </div>
  );
};

export default ProfilePage;
