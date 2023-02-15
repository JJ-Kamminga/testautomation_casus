module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['.ts'],
      rules: {
        indent: ['warn', 4],
        'space-before-function-paren': 'off',
        '@typescript-eslint/indent': 'off'
      }
    }
  ],
  parserOptions: {
    project: '**/tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    rules: {
      indent: ['warn', 4],
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/indent': 'off'
    }
  }
}
