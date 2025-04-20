"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersController = void 0;
const ListCustomersService_1 = require("../services/ListCustomersService");
class ListCustomersController {
    async handle(request, reply) {
        const listCustomersService = new ListCustomersService_1.ListCustomersService();
        const costumers = await listCustomersService.excute();
        reply.send(costumers);
    }
}
exports.ListCustomersController = ListCustomersController;
