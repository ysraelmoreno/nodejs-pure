const userController = require("./controllers/users.controller")

module.exports = [
    {
        method: 'GET',
        path: '/users',
        handler: userController.listUsers
    },
    {
        method: 'POST',
        path: '/users',
    },
]
