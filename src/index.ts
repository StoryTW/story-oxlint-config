import { importConfig, javascriptConfig, reactBaseConfig, reactNextConfig, reactViteConfig, typescriptConfig } from './configs/index.ts';

import type { OxlintConfig } from 'oxlint';

export type ConfigOption = boolean | [enabled: boolean, overrides: Pick<OxlintConfig, 'rules' | 'plugins'>];

export interface StoryOptions {
  framework: 'vite' | 'next' | 'none';
  javascript?: ConfigOption;
  typescript?: ConfigOption;
  import?: ConfigOption;
  react?: ConfigOption;
}

function resolveConfig(config: OxlintConfig, option: ConfigOption = true): OxlintConfig | undefined {
  if (option === false) {
    return undefined;
  }

  if (option === true) {
    return config;
  }

  const [enabled, custom] = option;

  if (!enabled) {
    return undefined;
  }

  const plugins = [...(config.plugins ?? []), ...(custom.plugins ?? [])];

  if (config.overrides) {
    return {
      ...config,
      plugins,
      overrides: config.overrides.map((override) => ({
        ...override,
        rules: { ...override.rules, ...custom.rules },
      })),
    };
  }

  return {
    ...config,
    plugins,
    rules: { ...config.rules, ...custom.rules },
  };
}

export default function storyConfig(options: StoryOptions): OxlintConfig {
  if (!options || !['vite', 'next', 'none'].includes(options.framework)) {
    throw new TypeError('storyConfig: framework must be "vite", "next" or "none".');
  }

  const frameworkConfigs = {
    vite: reactViteConfig,
    next: reactNextConfig,
    none: undefined,
  };
  const frameworkConfig = frameworkConfigs[options.framework];

  const configs = [
    resolveConfig(javascriptConfig, options.javascript),
    resolveConfig(typescriptConfig, options.typescript),
    resolveConfig(importConfig, options.import),
    resolveConfig(reactBaseConfig, options.react),
    frameworkConfig && resolveConfig(frameworkConfig, options.react),
  ].filter((config): config is OxlintConfig => config !== undefined);

  return {
    categories: { correctness: 'off' },
    plugins: [...new Set<NonNullable<OxlintConfig['plugins']>[number]>(['eslint', ...configs.flatMap((config) => config.plugins ?? [])])],
    env: Object.assign({}, ...configs.map((config) => config.env)),
    rules: Object.assign({}, ...configs.map((config) => config.rules)),
    overrides: configs.flatMap((config) => config.overrides ?? []),
    ignorePatterns: configs.flatMap((config) => config.ignorePatterns ?? []),
  };
}
