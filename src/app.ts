import express from 'express';

import userController from './controllers/user';
import productController from './controllers/product';

const app = express();
app.use(express.json());

app.post(
  '/users',
  userController.create,
);

app.post(
  '/login',
  userController.login,
);

app.post('/products', productController.create);

export default app;
