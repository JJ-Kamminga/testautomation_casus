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
      parserOptions: {
        project: '**/tsconfig.json'
      },
      rules: {
        quotes: ['error', 'single']
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
