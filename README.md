# @storytw/oxlint-config

Общий конфиг Oxlint для JavaScript, TypeScript и React с пресетами для Vite и Next.js. Требуется Node.js 24+ и Oxlint 1.90+ в ветке 1.x.

## Подключение

Установите пакет из npm.

```sh
pnpm add -D oxlint@^1.90.0 @storytw/oxlint-config
```

Для локальной проверки можно выполнить `npm pack` в этом репозитории после установки зависимостей и установить полученный архив в проект.

Создайте `oxlint.config.ts` в корне проекта.

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

Пресет Next.js исключает `.next`, `out`, `build` и `next-env.d.ts`. Oxlint также учитывает `.gitignore`.

```json
{
  "scripts": {
    "lint": "oxlint .",
    "lint:fix": "oxlint --fix ."
  }
}
```

## Настройка правил

Блоки `javascript`, `typescript`, `import` и `react` включены по умолчанию. Укажите `false` для отключения блока или `[true, { rules, plugins }]` для его настройки. `plugins` принимает список встроенных плагинов Oxlint. Отдельные конфиги доступны из `@storytw/oxlint-config/configs`.

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
        rules: { 'react/exhaustive-deps': 'warn' },
      },
    ],
  }),
);
```

## Отличия от story-eslint-config

- `no-unused-vars` предупреждает также о неиспользуемых импортах. Автоудаление выключено, префикс `_` для переменных и аргументов по-прежнему учитывается.
- В React правило `react/jsx-key` заменяет `react-x/no-missing-key`. Для React Compiler и Next.js используются встроенные правила. Из исходного пресета пропущены `react-hooks/config`, `react-hooks/gating` и `@next/next/no-location-assign-relative-destination`.
- Блок `import` проверяет пустую строку после импортов. Oxfmt форматирует код и сортирует импорты через отдельный `oxfmt.config.ts`.

## Форматирование через Oxfmt

Установите Oxfmt в проект. Пресет проверен с версией 0.79.0.

```sh
pnpm add -D oxfmt@^0.79.0
```

Создайте `oxfmt.config.ts` в корне проекта.

```ts
import { oxfmtConfig } from '@storytw/oxlint-config/configs';
import { defineConfig } from 'oxfmt';

export default defineConfig(oxfmtConfig);
```

Добавьте команды в `package.json`.

```json
{
  "scripts": {
    "format": "oxfmt --write .",
    "format:check": "oxfmt --check ."
  }
}
```

`pnpm format` применяет форматирование, а `pnpm format:check` проверяет его в CI.
