"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const router_1 = require("./router");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message }); // Corrigi "massege" → "message"
});
const start = async () => {
    await app.register(cors_1.default);
    await app.register(router_1.routes);
    try {
        await app.listen({ port: 3333, host: '0.0.0.0' }); // <- necessário para o Render
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
