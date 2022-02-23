import userModel from '../models/user';
import token from './token';

import User from '../interfaces/User';
import ServiceResponse from '../interfaces/ServiceResponse';

import statusCode from '../enums/StatusCode';

async function create(body: User): Promise <ServiceResponse> {
  const c = await userModel.create(body);
  console.log('created user', c);

  const tok = await token.generate(c);

  return {
    status: statusCode.CREATED,
    message: { token: tok },
  };
}

export default { create };
