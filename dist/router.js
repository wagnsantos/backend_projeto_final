"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateCustomerController_1 = require("./controllers/CreateCustomerController");
const ListCustomersController_1 = require("./controllers/ListCustomersController");
const DeleteCustomerControllers_1 = require("./controllers/DeleteCustomerControllers");
async function routes(fastify, options) {
    fastify.get('/teste', async (request, reply) => {
        return { ok: true };
    });
    fastify.post("/customer", async (request, reply) => {
        return new CreateCustomerController_1.CreateCustomerController().handle(request, reply);
    });
    fastify.get("/customers", async (request, reply) => {
        return new ListCustomersController_1.ListCustomersController().handle(request, reply);
    });
    fastify.delete("/customer", async (request, reply) => {
        return new DeleteCustomerControllers_1.DeleteCustomerControllers().handle(request, reply);
    });
}
