import productModel from '../models/product';

import Product from '../interfaces/Product';
import ServiceResponse from '../interfaces/ServiceResponse';

async function create(body: Product): Promise<ServiceResponse> {
  const { name, amount } = body;
  const c = await productModel.create(body);

  return {
    status: 201,
    message: {
      item: {
        id: c.insertId,
        name,
        amount,
      },
    },
  };
}

export default { create };
