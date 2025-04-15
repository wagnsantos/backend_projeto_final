import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string
}

class CreateCustomerServices {
    async execute({name}: CreateCustomerProps){
        if(!name){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name, 
                status: true
            }
        })

        return customer

    }
}

export {CreateCustomerServices}