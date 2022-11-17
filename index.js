const fastify = require('fastify')({ logger: true });
const userRoutes = require('./routes/users.routes');

fastify.get('/', (request, response) => {
    response.send('hola');
});

userRoutes.forEach((lista) => {
    fastify.route(lista);
});

const runServer = async () => {
    await fastify.listen(4202);
    fastify.log.info('run server')
}

runServer();