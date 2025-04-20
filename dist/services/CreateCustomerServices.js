"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerServices = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateCustomerServices {
    async execute({ name, type }) {
        if (!name || !type) {
            throw new Error("Preencha todos os campos");
        }
        const customer = await prisma_1.default.customer.create({
            data: {
                name,
                type,
                status: true
            }
        });
        return customer;
    }
}
exports.CreateCustomerServices = CreateCustomerServices;
