import express from 'express';

import userController from './controllers/user';

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

export default app;
