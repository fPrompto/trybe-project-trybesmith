import Error from '../interfaces/Error';

import StatusCode from '../enums/StatusCode';
import jwtoken from '../services/token';

function namee(name: string): Error | void {
  const { BAD_REQUEST, ERROR } = StatusCode;

  if (!name) {
    return { status: BAD_REQUEST, message: { error: 'Name is required' } };
  }

  if (typeof name !== 'string') {
    return { status: ERROR, message: { error: 'Name must be a string' } };
  }

  if (name.length <= 2) {
    return {
      status: ERROR,
      message: { error: 'Name must be longer than 2 characters' },
    };
  }
}

function amountt(amount: string): Error | void {
  const { BAD_REQUEST, ERROR } = StatusCode;

  if (!amount) {
    return {
      status: BAD_REQUEST,
      message: { error: 'Amount is required' },
    };
  }

  if (typeof amount !== 'string') {
    return {
      status: ERROR,
      message: { error: 'Amount must be a string' },
    };
  }

  if (amount.length <= 2) {
    return { status: ERROR,
      message: { error: 'Amount must be longer than 2 characters' },
    };
  }
}

function tokenn(token: string): Error | void {
  const test = jwtoken.verify(token);
  console.log('auth1', token);

  // if (!token) {
  //   return {
  //     status: BAD_REQUEST,
  //     message: { error: 'Token not found' },
  //   };
  // }

  if (test === false) {
    return {
      status: 401,
      message: { error: 'Invalid token' },
    };
  }
}

export default { namee, amountt, tokenn };
