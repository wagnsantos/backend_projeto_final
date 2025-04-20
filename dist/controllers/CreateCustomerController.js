"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const CreateCustomerServices_1 = require("../services/CreateCustomerServices");
class CreateCustomerController {
    async handle(request, reply) {
        const { name, type } = request.body;
        console.log(name, type);
        const customerService = new CreateCustomerServices_1.CreateCustomerServices();
        const customer = await customerService.execute({ name, type });
        reply.send(customer);
    }
}
exports.CreateCustomerController = CreateCustomerController;
