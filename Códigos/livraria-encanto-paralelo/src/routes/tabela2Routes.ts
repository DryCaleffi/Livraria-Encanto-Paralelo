import { Router } from 'express';
import Tabela2Controller from '../controllers/tabela2Controller';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();
const tabela2Controller = new Tabela2Controller();

router.use(authMiddleware); // Protege todas as rotas abaixo com autenticação

router.post('/tabela2/cadastro', tabela2Controller.cadastrar);
router.get('/tabela2', tabela2Controller.listar);

export default router;