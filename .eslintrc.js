module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [

  ],
  plugins: ['prettier'],
  'rules': {
    'semi': ['error', 'always'],
    'no-multi-spaces': 'error',
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', {'max': 2, 'maxEOF': 1}],
    'comma-dangle': ['error', 'always-multiline'],
    'array-element-newline': ["error", "consistent"],
    'object-curly-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
  },
};