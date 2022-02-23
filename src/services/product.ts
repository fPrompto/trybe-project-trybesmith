import productModel from '../models/product';

import Error from '../interfaces/Error';
import Product from '../interfaces/Product';
import StatusCode from '../enums/StatusCode';

async function create(body: Product, authorization: string): Promise<any> {
  const { name, amount } = body;

  if (!authorization) {
    return {
      status: StatusCode.NOT_FOUND,
      message: { error: 'Token not found' }
    };
  }
}