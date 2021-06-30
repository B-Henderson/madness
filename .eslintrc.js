module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended'
  ],
};