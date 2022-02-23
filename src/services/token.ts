import jwt from 'jsonwebtoken';
import Token from '../interfaces/Token';

function generate(body: Token): string {
  const { id, username } = body;
  const secret = 'triss';

  const token = jwt.sign(
    { id, username },
    secret as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  return token;
}

export default { generate };