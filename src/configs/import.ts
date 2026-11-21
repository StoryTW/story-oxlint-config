import type { OxlintConfig } from 'oxlint';

export const importConfig: OxlintConfig = {
  plugins: ['import'],
  rules: {
    'import/newline-after-import': ['warn', { count: 1 }],
  },
};
