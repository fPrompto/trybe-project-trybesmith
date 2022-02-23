import Error from '../interfaces/Error';

import StatusCode from '../enums/StatusCode';
import ErrorMessage from '../enums/UserErrorMessages';

function usernamee(username: string): Error | void {
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

function classee(classe: string): Error | void {
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

function levell(level: number): Error | void {
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

function passwordd(password: string): Error | void {
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
