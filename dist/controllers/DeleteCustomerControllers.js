"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerControllers = void 0;
const DeleteCustomerService_1 = require("../services/DeleteCustomerService");
class DeleteCustomerControllers {
    async handle(request, reply) {
        const { id } = request.query;
        const customerService = new DeleteCustomerService_1.DeleteCustomerService();
        const customer = await customerService.execute({ id });
        reply.send(customer);
    }
}
exports.DeleteCustomerControllers = DeleteCustomerControllers;
