enum Username {
  IS_REQUIRED = 'Username is required',
  STRING = 'Username must be a string',
  SHORT = 'Username must be longer than 2 characters',
}

enum Classe {
  IS_REQUIRED = 'Classe is required',
  STRING = 'Classe must be a string',
  SHORT = 'Classe must be longer than 2 characters',
}

enum Level {
  IS_REQUIRED = 'Level is required',
  NUMBER = 'Level must be a number',
  NOOB = 'Level must be greater than 0',
}

enum Password {
  IS_REQUIRED = 'Password is required',
  STRING = 'Password must be a string',
  SHORT = 'Password must be longer than 7 characters',
}

export default { Username, Classe, Level, Password };
