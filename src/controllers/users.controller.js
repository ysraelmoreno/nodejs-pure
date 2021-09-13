const users = require('../mocks/users')

module.exports = {
    listUsers(req, res) {
        const { order } = req.query;

        const sortedUsers = users.sort((a, b) => {
            if(order === 'desc') {
                return a.id < b.id ? 1 : -1
            }

            return a.id > b.id ? 1 : -1
        })

        res.send(200, sortedUsers)
    },
    getUserById(req, res) {
        const {id} = req.params;

        const findUser = users.find(user => user.id === Number(id))

        if(!findUser) {
            res.send(400, findUser)
        }

        res.send(200, findUser)
    }
}
