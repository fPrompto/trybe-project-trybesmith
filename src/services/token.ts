import jwt from 'jsonwebtoken';
import Token from '../interfaces/Token';

const secret = 'triss';

function generate(body: Token): string {
  const { id, username } = body;

  const token = jwt.sign(
    { id, username },
    secret as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  return token;
}

function verify(data: string): boolean {
  try {
    jwt.verify(
      data,
      secret as string,
    );
    return true;
  } catch (_e) {
    return false;
  }
}

export default { generate, verify };
