import { Router } from 'express';
import { Tabela1Controller } from '../controllers/tabela1Controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const tabela1Controller = new Tabela1Controller();

router.use(authMiddleware); // Protege todas as rotas abaixo com autenticação

router.post('/tabela1/cadastrar', tabela1Controller.cadastrar);
router.get('/tabela1', tabela1Controller.listar);

export default router;