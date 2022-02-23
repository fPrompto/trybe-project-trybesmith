import connection from './connection';

import User from '../interfaces/User';

async function create(body: User): Promise <any> {
  const { username, classe, level, password } = body;

  const result = await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  return result;
}

export default { create };
