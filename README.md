# Next.js TypeScript Template

> A template for quickly starting a Next.js-based project.

## Features

1. TypeScript-enabled. Check out the [TypeScript](./tsconfig.json)
   configuration
2. ESLint-enabled
3. a grid-based Default Layout
4. Switch between dark and light themes
5. Loader

## ESLint Rules

- Style Guide: `airbnb-typescript`
- `no-use-before-define`: `off`,
- `@typescript-eslint/no-use-before-define`: `[error]`,
- `react/jsx-filename-extension`: `[1, { extensions: [".tsx"] }]`,
- `import/no-default-export`: `[2]`,
- `import/prefer-default-export`: `off`,
- `react/jsx-props-no-spreading`: `off`,
- `react/destructuring-assignment`: `[1, never]`

## Helper Scripts

- to generate a new component, run `yarn gc component-name`
