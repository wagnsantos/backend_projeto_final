import {FastifyRequest, FastifyReply} from "fastify";
import { CreateCustomerServices } from '../services/CreateCustomerServices'

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name} = request.body as {name: string}
        console.log(name)

        const customerService = new CreateCustomerServices()

        const customer = await customerService.execute({name})

        reply.send(customer)
    }
}

export {CreateCustomerController}