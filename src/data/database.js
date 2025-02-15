const database = {
  users: [
    {
      id: 1,
      username: "angel",
      role: "Пользователь",
      xp: 1000,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      technology: ["ReactJS", "JavaScript", "Java"],
    },
  ],

  addUser(user) {
    this.users.push(user);
  },
  getUser(id) {
    return this.users.find((user) => user.id === id);
  },
};
export default database;
