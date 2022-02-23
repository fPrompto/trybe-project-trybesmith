import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

import User from '../interfaces/User';
import Login from '../interfaces/Login';

async function create(body: User): Promise<User> {
  const { username, classe, level, password } = body;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;
  const user: User = { id, username, classe, level, password };
  return user;
}

async function login(body: Login): Promise<any> {
  const { username, password } = body;

  const [[result]] = await connection.query<RowDataPacket[][]>(
    'SELECT id, username, password FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  return result;
  // https://stackoverflow.com/questions/54583950/using-typescript-how-do-i-strongly-type-mysql-query-results
}

export default { create, login };
