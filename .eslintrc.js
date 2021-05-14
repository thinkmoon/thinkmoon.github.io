module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['html'],
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'padded-blocks': 0,
    'max-len': ['error', { 'code': 120 }],
    // Vue的特殊配置
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 5,
        'allowFirstLine': true,
      },
      'multiline': {
        'max': 5,
        'allowFirstLine': true,
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/max-len': ['error', {
      'code': 120,
      'template': 120,
      'tabWidth': 2,
      'comments': 120,
      'ignorePattern': '',
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
      'ignoreHTMLAttributeValues': false,
      'ignoreHTMLTextContents': false,
    }],
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
};
