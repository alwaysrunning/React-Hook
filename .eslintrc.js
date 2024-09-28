module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-misused-promises': 0,
    'operator-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': 0,
  },
};
