import Fastify from 'fastify'
import { routes } from './router'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message }) // Corrigi "massege" → "message"
})

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    await app.listen({ port: 3333, host: '0.0.0.0' }) // <- necessário para o Render
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
