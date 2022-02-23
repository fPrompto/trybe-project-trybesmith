import { Request, Response } from 'express';
import userService from '../services/user';
import validation from '../middlewares/userValidations';

import StatusCode from '../enums/StatusCode';

async function create(req: Request, res: Response): Promise<Response> {
  const { username, classe, level, password } = req.body;
  const usernameV = await validation.usernamee(username);
  const classeV = await validation.classee(classe);
  const levelV = await validation.levell(level);
  const passwordV = await validation.passwordd(password);

  if (usernameV) return res.status(usernameV.status).json(usernameV.message);
  if (classeV) return res.status(classeV.status).json(classeV.message);
  if (levelV) return res.status(levelV.status).json(levelV.message);
  if (passwordV) return res.status(passwordV.status).json(passwordV.message);

  const creat = await userService.create(req.body);
  return res.status(creat.status).json(creat.message);
}

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const usernameV = await validation.usernamee(username);
  const passwordV = await validation.passwordd(password);

  if (usernameV) return res.status(usernameV.status).json(usernameV.message);
  if (passwordV) return res.status(passwordV.status).json(passwordV.message);

  const log = await userService.login(req.body);

  if (log.status === 401) {
    return res.status(StatusCode.NOT_FOUND).json(
      { error: 'Username or password invalid' },
    );
  }

  return res.status(log.status).json(log.message);
}

export default { create, login };
