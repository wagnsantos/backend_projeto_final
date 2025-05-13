import express from 'express';
import {
  getEquipamentos,
  getEquipamento,
  createEquipamento,
  updateEquipamento,
  deleteEquipamento
} from '../controllers/equipamentoControllers';

const router = express.Router();

router.get('/', getEquipamentos);
router.get('/:id', getEquipamento);
router.post('/', createEquipamento);
router.put('/:id', updateEquipamento);
router.delete('/:id', deleteEquipamento);

export default router;
