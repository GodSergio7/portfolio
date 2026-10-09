// Configuración de ESLint (la mínima de Vite para React).
// Se ejecuta con `npm run lint` y en GitHub Actions en cada push.
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'dist-ssr']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // Año del build, definido en vite.config.js
        __BUILD_YEAR__: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Funciones auxiliares que se exportan junto a un componente
      'react-refresh/only-export-components': [
        'error',
        { allowExportNames: ['getSocialIcon', 'openCookiePolicy'] },
      ],
    },
  },
  // Scripts y configuración que se ejecutan en Node
  {
    files: ['scripts/**/*.mjs', 'vite.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
