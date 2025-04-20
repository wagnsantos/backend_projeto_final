import Fastify from 'fastify'
import { routes } from './router'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

const setup = async () => {
  await app.register(cors)
  await app.register(routes)
  await app.ready()
}

setup()

export default async (req: any, res: any) => {
  app.server.emit('request', req, res)
}
