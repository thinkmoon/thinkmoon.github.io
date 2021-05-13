module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true,
  },
  plugins: [
    'html',
  ],
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-multiple-empty-lines': [1, { 'max': 1 }],
    'padded-blocks': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
