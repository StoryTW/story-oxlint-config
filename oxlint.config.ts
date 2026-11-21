import { defineConfig } from 'oxlint';

import { storyOxlintConfig } from './src/index.ts';

export default defineConfig(
  storyOxlintConfig({
    framework: 'none',
    react: false,
  }),
);
