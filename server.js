
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/livros', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createlivros(body);
    return reply.status(201).send();
})

// READE
server.get('/livros', async () => {
    const Livros = await databasePostgres.listlivros();
    return Livros;
});

// UPDATE
server.put('/livros/:id', async (request, reply) => {
    const LivrosID = request.params.id;
    const body = request.body;
    await databasePostgres.updatelivros(LivrosID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/livros/:id', async (request, reply) => {
    const LivrosID = request.params.id;
    await databasePostgres.deletelivros(LivrosID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
