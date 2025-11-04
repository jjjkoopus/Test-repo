import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic],
  plugins: { '@stylistic': stylistic },
  rules: {
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/indent': ['error', 2]
  }
});
