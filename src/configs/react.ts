import type { OxlintConfig } from 'oxlint';

const reactFiles = ['**/*.{jsx,tsx}'];

export const reactBaseConfig: OxlintConfig = {
  plugins: ['react'],
  overrides: [
    {
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
      rules: {
        'react/rules-of-hooks': 'error',
        'react/exhaustive-deps': 'off',
        'react/static-components': 'error',
        'react/use-memo': 'error',
        'react/preserve-manual-memoization': 'error',
        'react/incompatible-library': 'warn',
        'react/immutability': 'error',
        'react/globals': 'error',
        'react/refs': 'error',
        'react/set-state-in-effect': 'error',
        'react/error-boundaries': 'error',
        'react/purity': 'error',
        'react/set-state-in-render': 'error',
        'react/unsupported-syntax': 'warn',
      },
    },
    {
      files: reactFiles,
      rules: {
        'react/jsx-key': 'error',
      },
    },
  ],
};

export const reactViteConfig: OxlintConfig = {
  plugins: ['react'],
  overrides: [
    {
      files: reactFiles,
      rules: {
        'react/only-export-components': [
          'error',
          {
            allowConstantExport: true,
            allowCompoundComponents: true,
          },
        ],
      },
    },
  ],
};

export const reactNextConfig: OxlintConfig = {
  plugins: ['react', 'nextjs'],
  ignorePatterns: ['**/.next/**', '**/out/**', '**/build/**', '**/next-env.d.ts'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'nextjs/google-font-display': 'warn',
        'nextjs/google-font-preconnect': 'warn',
        'nextjs/next-script-for-ga': 'warn',
        'nextjs/no-async-client-component': 'warn',
        'nextjs/no-before-interactive-script-outside-document': 'warn',
        'nextjs/no-css-tags': 'warn',
        'nextjs/no-head-element': 'warn',
        'nextjs/no-html-link-for-pages': 'error',
        'nextjs/no-img-element': 'warn',
        'nextjs/no-page-custom-font': 'warn',
        'nextjs/no-styled-jsx-in-document': 'warn',
        'nextjs/no-sync-scripts': 'error',
        'nextjs/no-title-in-document-head': 'warn',
        'nextjs/no-typos': 'warn',
        'nextjs/no-unwanted-polyfillio': 'warn',
        'nextjs/inline-script-id': 'error',
        'nextjs/no-assign-module-variable': 'error',
        'nextjs/no-document-import-in-page': 'error',
        'nextjs/no-duplicate-head': 'error',
        'nextjs/no-head-import-in-document': 'error',
        'nextjs/no-script-component-in-head': 'error',
      },
    },
    {
      files: reactFiles,
      rules: {
        'react/only-export-components': [
          'error',
          {
            allowExportNames: [
              'experimental_ppr',
              'dynamic',
              'dynamicParams',
              'revalidate',
              'fetchCache',
              'runtime',
              'preferredRegion',
              'maxDuration',
              'metadata',
              'generateMetadata',
              'viewport',
              'generateViewport',
              'generateImageMetadata',
              'generateSitemaps',
              'generateStaticParams',
              'instant',
              'contentType',
              'size',
            ],
          },
        ],
      },
    },
  ],
};
