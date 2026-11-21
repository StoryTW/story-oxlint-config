# @storytw/oxlint-config
Oxlint конфиг для Vite и Next.js

## 📌 Требования

Node.js ≥ 24

Oxlint 1.90+

## 🚀 Быстрый старт
1. Установите пакет из npm.

```sh
npm install --save-dev @storytw/oxlint-config
# или

pnpm add -D @storytw/oxlint-config

# или

yarn add -D @storytw/oxlint-config
```

2. В `oxlint.config.ts` импортируйте конфиг

```ts
import storyConfig from '@storytw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig(storyConfig({ framework: 'vite' }));
```

| Параметры                         | Правила                                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `framework: 'vite'`               | React, React Hooks и Fast Refresh с поддержкой экспорта констант и составных компонентов                        |
| `framework: 'next'`               | React, правила Next.js из Core Web Vitals, доступные в Oxlint, и Fast Refresh с разрешёнными экспортами Next.js |
| `framework: 'none'`               | Общий набор React без правил фреймворка                                                                         |
| `framework: 'none', react: false` | JavaScript и TypeScript без правил React                                                                        |

## 📝 Скрипты для линтинга

Пример добавления в `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint .",
    "lint:fix": "oxlint --fix ."
  }
}
```

## Настройка правил

Блоки `javascript`, `typescript`, `import` и `react` включены по умолчанию. 
Укажите `false` для отключения блока или `[true, { rules, plugins }]` для его настройки. `plugins` принимает список встроенных плагинов Oxlint. 
Отдельные конфиги доступны из `@storytw/oxlint-config/configs`.

```ts
import storyConfig from '@storytw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig(
  storyConfig({
    framework: 'vite',
    typescript: [
      true,
      {
        rules: { 'typescript/no-explicit-any': 'warn' },
      },
    ],
    react: [
      true,
      {
        rules: { 'react/exhaustive-deps': 'error' },
      },
    ],
  }),
);
```

## 📦 Настройка папки .vscode -> settings.json 

```sh
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "oxc.enable.oxlint": true,
  "oxc.enable.oxfmt": true,
  "oxc.lint.run": "onType",
  "editor.codeActionsOnSave": {
    "source.fixAll.oxc": "always"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "oxc.oxc-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter"
  }
}
```
