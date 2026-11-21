import type { OxfmtConfig } from 'oxfmt';

export const oxfmtConfig = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: false,
  objectWrap: 'preserve',
  experimentalOperatorPosition: 'start',
  endOfLine: 'lf',
  insertFinalNewline: true,
  printWidth: 200,
  sortPackageJson: false,
  sortImports: {
    internalPattern: ['@/'],
    order: 'asc',
    ignoreCase: true,
    newlinesBetween: true,
    sortSideEffects: false,
    customGroups: [
      {
        groupName: 'react-value',
        elementNamePattern: ['react'],
        modifiers: ['value'],
      },
    ],
    groups: ['value-builtin', 'react-value', { newlinesBetween: false }, 'value-external', 'value-internal', 'value-parent', 'value-sibling', 'value-index', 'type-import', 'unknown'],
  },
} satisfies OxfmtConfig;
