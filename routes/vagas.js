import express from 'express';
import { adicionarVaga, listarVagas, buscarVagaPorId, atualizarVaga, deletarVaga, filtrarPorCargo, filtrarPorCidade } from '../controllers/vagas.js';

const router = express.Router();

router.post('/vagas', adicionarVaga);
router.get('/vagas', listarVagas);
router.get('/vagas/:id', buscarVagaPorId);
router.put('/vagas/:id', atualizarVaga);
router.delete('/vagas/:id', deletarVaga);
router.get('/cargo/:cargo', filtrarPorCargo);
router.get('/localizacao/:cidade', filtrarPorCidade);

export default router;
