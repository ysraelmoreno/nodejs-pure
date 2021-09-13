const userController = require("./controllers/users.controller")

module.exports = [
    {
        path: '/users',
        method: 'GET',
        handler: userController.listUsers
    },
    {
        path: '/users/:id',
        method: 'GET',
        handler: userController.getUserById
    },
]
