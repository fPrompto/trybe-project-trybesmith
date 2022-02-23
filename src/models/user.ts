import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import User from '../interfaces/User';

async function create(body: User): Promise<User> {
  const { username, classe, level, password } = body;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;
  const user: User = { id, username, classe, level, password };
  return user;
  // return result;
}

export default { create };
