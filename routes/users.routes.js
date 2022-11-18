const listUsers = require('./../user/listUser');
const createUser = require('./../user/createUser');
const deleteUser = require('./../user/deleteUser');
const updateUser = require('./../user/updateUser');
const methodUsers = [
    {
        url: '/users',
        method: 'GET',
        handler: async (request, response) => {
            const users = await listUsers.listUsers();
            response.send(users)
        }
    },
    {
        url: '/users/search/:email',
        method: 'GET',
        handler: (request, response) => {
            response.send('usuarios')
        }
    },
    {
        url: '/users/create',
        method: 'POST',
        handler: async (request, response) => {
            const users = await createUser.createUser(request);
            response.send(users)
        }
    },
    {
        url: '/users/delete/:id',
        method: 'DELETE',
        handler: async (request, response) => {
            const users = await deleteUser.deleteUser(request);
            response.send(users)
        }
    },
    {
        url: '/users/update',
        method: 'PUT',
        handler: async (request, response) => {
            const users = await updateUser.updateUser(request);
            response.send(users)
        }
    }
]

module.exports = methodUsers;