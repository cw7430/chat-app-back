// eslint.config.mjs
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import os from 'os';

export default tseslint.defineConfig([
  {
    ignores: ['eslint.config.mjs'],
  },

  // 기본 ESLint recommended
  eslint.configs.recommended,

  // TypeScript recommended (type-aware)
  ...tseslint.configs.recommendedTypeChecked,

  // Prettier recommended
  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // OS 별 줄바꿈 자동 맞춤
      'linebreak-style': ['error', os.EOL === '\r\n' ? 'windows' : 'unix'],

      // Prettier
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
]);
