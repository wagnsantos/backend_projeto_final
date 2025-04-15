import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomersService = new ListCustomersService()

        const costumers = await listCustomersService.excute()

        reply.send(costumers)
    }
}

export {ListCustomersController}