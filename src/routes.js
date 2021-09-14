const userController = require("./controllers/users.controller");

module.exports = [
  {
    path: "/users",
    method: "GET",
    handler: userController.listUsers,
  },
  {
    path: "/users/:id",
    method: "GET",
    handler: userController.getUserById,
  },
  {
    path: "/users",
    method: "POST",
    handler: userController.createUser,
  },
  {
    path: "/users/:id",
    method: "PUT",
    handler: userController.updateUser,
  },
  {
    path: "/users/:id",
    method: "DELETE",
    handler: userController.deleteUser,
  },
];
