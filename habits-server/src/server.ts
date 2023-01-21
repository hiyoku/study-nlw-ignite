import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

const port = 3333;

app.get('/habits', async () => {
  return prisma.habit.findMany();
})

app.get('/', async () => {
  return "Hello World!!";
})

app.listen({
  port: port
}).then(() => console.log(`server running on ${port} port`));