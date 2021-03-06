import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import Product from '../interfaces/Product';

async function create(body: Product): Promise<any> {
  const { name, amount } = body;

  const [result] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  console.log('aaaaaaaaaa', result.insertId);
  return result;
}

async function getAll(): Promise<any> {
  const [result] = await connection.query<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Products',
  );
  console.log('result get all products', result);

  return result;
}

export default { create, getAll };
