const users = [];

const addUser = ({ id, name, room }) => {
  // console.log("Add User",id,name,room);
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  // console.log("Remove User",id);
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => {
  // console.log("Get User",id);
  // console.log("users:",users);
  // console.log("id:",id);
  const foundUser = users.find((user) => user.id === id);
  // console.log(foundUser);
  return foundUser;
}

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };