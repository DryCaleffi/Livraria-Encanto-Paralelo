import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';

export class AuthController {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;
        const user = await this.userModel.findUser(username, password);

        if (user) {
            req.session.userId = user.id;
            res.redirect('/tabela1'); // Redireciona para a página da tabela1 após login
        } else {
            res.status(401).render('auth/login', { error: 'Credenciais inválidas' });
        }
    }

    public logout(req: Request, res: Response): void {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Erro ao encerrar sessão');
            }
            res.redirect('/auth/login'); // Redireciona para a página de login
        });
    }
}