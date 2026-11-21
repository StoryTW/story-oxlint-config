import { defineConfig } from 'oxlint';

import storyConfig from './src/index.ts';

export default defineConfig(
  storyConfig({
    framework: 'none',
    react: false,
  }),
);
