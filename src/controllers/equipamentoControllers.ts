import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os "equipamentos" (clientes)
export const getEquipamentos = async (req: Request, res: Response) => {
  const equipamentos = await prisma.customer.findMany();
  res.json(equipamentos);
};

// Buscar por ID (sem converter para número)
export const getEquipamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const equipamento = await prisma.customer.findUnique({
    where: { id }
  });
  res.json(equipamento);
};

// Criar novo
export const createEquipamento = async (req: Request, res: Response) => {
  const data = req.body;
  const novo = await prisma.customer.create({ data });
  res.status(201).json(novo);
};

// Atualizar por ID (sem usar Number)
export const updateEquipamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const atualizado = await prisma.customer.update({
    where: { id },
    data,
  });
  res.json(atualizado);
};

// Deletar por ID (sem usar Number)
export const deleteEquipamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.customer.delete({ where: { id } });
  res.status(204).send();
};
