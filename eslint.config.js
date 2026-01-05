import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // Added this
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier'; // Added this
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'build']),
  {
    files: ['**/*.{js,jsx}'],
    // Use the plugins as objects
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detects React version
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off", // ADD THIS LINE to silence the error
      "react/react-in-jsx-scope": "off",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // SQUELLET™ Custom Rules
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]', // Keeps your CAPITALIZED_CONSTANTS and Components safe
        argsIgnorePattern: '^_' 
      }],
      'react/jsx-no-target-blank': 'error', // Security for external links (important for research refs)
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Keeps production code clean
      'prefer-const': 'error', // Enforces immutability where possible
    },
  },
  prettierConfig, // MUST BE LAST: It disables rules that conflict with Prettier
]);