import userModel from '../models/user';
import token from './token';
import User from '../interfaces/User';

import statusCode from '../enums/StatusCode';

async function create(body: User): Promise <any> {
  const { username, classe, level, password } = body;

  const c = await userModel.create(body);
  console.log(c);

  const id = c.insertdId;

  const tok = await token.generate({ id, username });

  return {
    status: statusCode.CREATED,
    message: { tok },
  };
}

export default { create };
