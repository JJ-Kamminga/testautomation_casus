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
    project: 'tsconfig.json',
    tsconfigRootDir: 'v1/e2e',
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
