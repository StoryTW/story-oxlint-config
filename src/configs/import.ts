import type { OxlintConfig } from 'oxlint';

export const importConfig: OxlintConfig = {
  plugins: ['import'],
  rules: {
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    'import/first': 'error',
    'import/no-self-import': 'error',
    'import/no-duplicates': [
      'error',
      {
        preferInline: false,
      },
    ],
  },
};
