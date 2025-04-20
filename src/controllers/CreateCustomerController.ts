import {FastifyRequest, FastifyReply} from "fastify";
import { CreateCustomerServices } from '../services/CreateCustomerServices'

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, type} = request.body as {name: string, type: string}
        console.log(name, type)

        const customerService = new CreateCustomerServices()

        const customer = await customerService.execute({name, type})

        reply.send(customer)
    }
}

export {CreateCustomerController}