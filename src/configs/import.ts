import type { OxlintConfig } from 'oxlint';

export const importConfig: OxlintConfig = {
  plugins: ['import'],
  rules: {
    'import/newline-after-import': ['warn', { count: 1 }],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        fix: { imports: 'off', variables: 'off' },
      },
    ],
  },
};
