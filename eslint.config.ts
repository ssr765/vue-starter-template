import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

import pluginVitest from '@vitest/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import pluginOxlint from 'eslint-plugin-oxlint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Side-effect imports
            ['^\\u0000'],
            // 2. Vue ecosystem packages
            ['^@?vue-?.*', '^pinia$', '^vee-validate$'],
            // 3. Node modules and packages
            ['^@?\\w'],
            // 4. Icons
            ['^lucide-vue-next$', '^@/components/icons(?=/)'],
            // 5. Shadcn UI
            ['^@/components/ui(?=/)'],
            // 6. App components
            ['^@/components(?=/)'],
            // 7. Other absolute imports (utils, stores, etc.)
            ['^@/'],
            // 8. Same folder imports
            ['^\\./'],
            // 9. Parent relative imports
            ['^\\.\\.(?!/?$)', '^\\.\\./'],
            // 10. Static assets
            ['^.+\\.(json|gif|png|jpe?g|svg|webp)$'],
          ],
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,

  // Avoid shadcn-vue single-word components from triggering lint errors.
  {
    files: ['src/components/ui/**/*.{ts,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
