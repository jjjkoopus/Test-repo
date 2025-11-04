import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,ts}'],
        languageOptions: { globals: globals.node },
        plugins: { '@stylistic': stylistic },
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        rules: {
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/indent': ['error', 2],
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn'
        }
    }
]);
