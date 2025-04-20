import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string
    type: string
}

class CreateCustomerServices {
    async execute({name, type}: CreateCustomerProps){
        if(!name || !type){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                type,
                status: true
            }
        })

        return customer

    }
}

export {CreateCustomerServices}