import { Request, Response } from 'express';
import productValidation from '../middlewares/productValidation';
import productService from '../services/product';

async function create(req: Request, res: Response): Promise<Response> {
  const { name, amount } = req.body;
  const { authorization } = req.headers;
  console.log(' auth0', authorization);
  const valToken = await productValidation.tokenn(authorization as string);
  const valName = await productValidation.namee(name);
  const valAmount = await productValidation.amountt(amount);

  if (!authorization) return res.status(401).json({ error: 'Token not found' });

  if (valToken) return res.status(valToken.status).json(valToken.message);
  if (valName) return res.status(valName.status).json(valName.message);
  if (valAmount) return res.status(valAmount.status).json(valAmount.message);

  const creat = await productService.create(req.body);

  return res.status(creat.status).json(creat.message);
}

export default { create };
