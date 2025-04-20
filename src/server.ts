import Fastify from 'fastify'
import { routes } from './router'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

async function build() {
  await app.register(cors)
  await app.register(routes)
}

build()

export default app
