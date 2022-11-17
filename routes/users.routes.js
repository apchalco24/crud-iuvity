const methodUsers = [
    {
        url: '/users',
        method: 'GET',
        handler: (request, response) => {
            response.send('usuarios')
        }
    },
    {
        url: '/users/:email',
        method: 'GET',
        handler: (request, response) => {
            response.send('usuarios')
        }
    },
    {
        url: '/users/create',
        method: 'POST',
        handler: (request, response) => {
            response.send('usuarios')
        }
    },
    {
        url: '/users/delete/:email',
        method: 'DELETE',
        handler: (request, response) => {
            response.send('usuarios')
        }
    },
    {
        url: '/users/update/:email',
        method: 'PUT',
        handler: (request, response) => {
            response.send('usuarios')
        }
    }
]

module.exports = methodUsers;