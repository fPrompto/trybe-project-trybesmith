import { Request, Response } from 'express';
import userService from '../services/user';
import validation from '../middlewares/userValidations';

async function create(req: Request, res: Response): Promise<Response> {
  const usernameV = await validation.usernamee(req.body);
  const classeV = await validation.classee(req.body);
  const levelV = await validation.levell(req.body);
  const passwordV = await validation.passwordd(req.body);

  if (usernameV) {
    return res.status(usernameV.status).json(usernameV.message);
  }

  if (classeV) {
    return res.status(classeV.status).json(classeV.message);
  }

  if (levelV) {
    return res.status(levelV.status).json(levelV.message);
  }

  if (passwordV) {
    return res.status(passwordV.status).json(passwordV.message);
  }

  const creat = await userService.create(req.body);

  return res.status(creat.status).json(creat.message) as Response;
}

export default { create };
