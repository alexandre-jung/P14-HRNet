# HRNet

**Monorepo of the HRNet application.**

It contains the following projects:

- `front` the front-end of the HRNet application
- `icons` all the icons used by HRNet
- `ui` the UI library

## 🪧 Table of contents

1. [Requirements](#requirements)
2. [🔥 Getting started](#-getting-started)
   - [🔧 Build](#-build)
   - [👷 Development](#-development)
   - [🚀 Publish](#-publish)

## Requirements

- [NodeJS](https://nodejs.org/en/) 16+
- [pnpm](https://pnpm.io/fr/) 7+
- [Turborepo](https://turbo.build/repo) 1.7+

## 🔥 Getting started

```shell
pnpm install
```

### 👷 Development

```shell
pnpm dev:front
pnpm dev:storybook
```

> **_Note_**  
> The `icons` package does not have a watch mode yet.  
> If you make changes to it, remember to restart the development server.

### 🔧 Build

```shell
pnpm build:front
pnpm build:storybook
# Or
pnpm build:all
```

Then preview the built applications:

```shell
pnpm preview:front
# Or
pnpm preview:storybook
```

## 🚀 Publish

```shell
pnpm changeset
pnpm run publish-packages
```
