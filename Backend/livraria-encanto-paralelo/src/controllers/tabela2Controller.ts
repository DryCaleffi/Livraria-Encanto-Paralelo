import { Request, Response } from 'express';
import Tabela2Model from '../models/tabela2Model';

class Tabela2Controller {
    async cadastrar(req: Request, res: Response) {
        const { campo1, campo2 } = req.body; // Ajuste os campos conforme necessário
        try {
            await Tabela2Model.cadastrar({ campo1, campo2 });
            res.status(201).json({ message: 'Registro cadastrado com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar registro', error });
        }
    }

    async selecionar(req: Request, res: Response) {
        try {
            const registros = await Tabela2Model.selecionar();
            res.status(200).json(registros);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao selecionar registros', error });
        }
    }
}

export default new Tabela2Controller();