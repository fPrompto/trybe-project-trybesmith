import userModel from '../models/user';
import token from './token';

import User from '../interfaces/User';
import ServiceResponse from '../interfaces/ServiceResponse';
import Login from '../interfaces/Login';

import StatusCode from '../enums/StatusCode';

async function create(body: User): Promise <ServiceResponse> {
  const c = await userModel.create(body);
  const tok = await token.generate(c);

  return {
    status: StatusCode.CREATED,
    message: { token: tok },
  };
}

async function login(body: Login): Promise<ServiceResponse> {
  const l = await userModel.login(body);
  
  if (!l) {
    return { status: StatusCode.NOT_FOUND,
      message: { error: 'Username or password invalid' },
    };
  }

  const tok = await token.generate(l);

  return {
    status: StatusCode.OK,
    message: { token: tok },
  };
}

export default { create, login };
