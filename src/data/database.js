const database = {
  users: [],

  addUser(user) {
    this.users.push(user);
  },

  getUser(id) {
    return this.users.find((user) => user.id === id);
  },
};
export default database;
