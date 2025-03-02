const database = {
  users: [
    {
      id: 1,
      username: "Angel",
      role: "Пользователь",
      xp: 1000,
      coins: 312,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["ReactJS", "JavaScript"],
        backend: ["Java"],
      },
      friends: [2, 3, 4, 5, 6, 7],
    },
    {
      id: 2,
      username: "8888",
      role: "Пользователь",
      xp: 1220,
      coins: 4532,
      avatar: "/src/data/usersAvatar/8888.gif",
      skills: {
        frontend: ["ReactJS", "JavaScript"],
      },
      friends: [1],
    },
    {
      id: 3,
      username: "Angel2",
      role: "Пользователь",
      xp: 1000,
      coins: 312,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["ReactJS", "JavaScript"],
        backend: ["Java"],
      },
      friends: [1],
    },
    {
      id: 4,
      username: "ShadowX",
      role: "Пользователь",
      xp: 1200,
      coins: 500,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["VueJS", "JavaScript"],
        backend: ["Node.js"],
      },
      friends: [3],
    },
    {
      id: 5,
      username: "Luna",
      role: "Администратор",
      xp: 2000,
      coins: 1500,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["ReactJS", "TypeScript"],
        backend: ["Python", "Django"],
      },
      friends: [3, 4],
    },
    {
      id: 6,
      username: "Neon",
      role: "Пользователь",
      xp: 800,
      coins: 220,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["Angular", "JavaScript"],
        backend: ["Go"],
      },
      friends: [5],
    },
    {
      id: 7,
      username: "Neon",
      role: "Пользователь",
      xp: 800,
      coins: 220,
      avatar: "/src/data/usersAvatar/xNoName.gif",
      skills: {
        frontend: ["Angular", "JavaScript"],
        backend: ["Go"],
      },
      friends: [5],
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
