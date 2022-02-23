import Error from '../interfaces/Error';
import User from '../interfaces/User';

import StatusCode from '../enums/StatusCode';
import ErrorMessage from '../enums/UserErrorMessages';

function usernamee(body: User): Error | void {
  const { username } = body;
  const { BAD_REQUEST, ERROR } = StatusCode;
  const { Username } = ErrorMessage;

  if (!username) {
    return { status: BAD_REQUEST, message: { error: Username.IS_REQUIRED } };
  }

  if (typeof username !== 'string') {
    return { status: ERROR, message: { error: Username.STRING } };
  }

  if (username.length <= 2) {
    return { status: ERROR, message: { error: Username.SHORT } };
  }
}

function classee(body: User): Error | void {
  const { classe } = body;
  const { BAD_REQUEST, ERROR } = StatusCode;
  const { Classe } = ErrorMessage;

  if (!classe) {
    return { status: BAD_REQUEST, message: { error: Classe.IS_REQUIRED } };
  }

  if (typeof classe !== 'string') {
    return { status: ERROR, message: { error: Classe.STRING } };
  }

  if (classe.length <= 2) {
    return { status: ERROR, message: { error: Classe.SHORT } };
  }
}

function levell(body: User): Error | void {
  const { level } = body;
  const { BAD_REQUEST, ERROR } = StatusCode;
  const { Level } = ErrorMessage;

  if (level < 1) {
    return { status: ERROR, message: { error: Level.NOOB } };
  }

  if (!level) {
    return { status: BAD_REQUEST, message: { error: Level.IS_REQUIRED } };
  }

  if (typeof level !== 'number') {
    return { status: ERROR, message: { error: Level.NUMBER } };
  }
}

function passwordd(body: User): Error | void {
  const { password } = body;
  const { BAD_REQUEST, ERROR } = StatusCode;
  const { Password } = ErrorMessage;

  if (!password) {
    return { status: BAD_REQUEST, message: { error: Password.IS_REQUIRED } };
  }

  if (typeof password !== 'string') {
    return { status: ERROR, message: { error: Password.STRING } };
  }

  if (password.length <= 7) {
    return { status: ERROR, message: { error: Password.SHORT } };
  }
}

export default { usernamee, classee, levell, passwordd };
