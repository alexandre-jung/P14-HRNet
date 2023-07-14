# HRNet

**Monorepo of the HRNet application.**

It contains the following packages:

- `apps/front` the front-end of HRNet


- `lib/data-table` a table react component for displaying data
- `lib/date-picker` a table react component for selecting dates
- `lib/icons` the icon library for HRNet
- `lib/modal` a modal component for react
- `lib/select` a select component for react
- `lib/ui` the UI library containing the most common components
- `lib/utils` general utility functions

## 🪧 Table of contents

1. [Requirements](#requirements)
2. [🔥 Getting started](#-getting-started)
    - [🔧 Build](#-build)
    - [👷 Development](#-development)
    - [🚀 Publish](#-publish)

## Requirements

- [NodeJS](https://nodejs.org/en/) 18+
- [pnpm](https://pnpm.io/fr/) 8+

## 🔥 Getting started

```shell
pnpm install
pnpm build:all  # required only after pnpm install
```

### 👷 Development

```shell
pnpm dev:front  # run the development mode
```

Visit http://localhost:5173/.

> **_Warning_**  
> Since it is a monorepo, development involves many tasks,  
> therefore you may have to wait a bit and refresh the page before viewing it without errors.  
> _This does not apply to build mode._

> **_Note_**  
> The `icons` package does not have a watch mode yet.  
> If you make changes to it, remember to restart the development server.

### 🔧 Build

```shell
pnpm build:front
# Or
pnpm build:all
```

Then preview the built application:

```shell
pnpm preview:front
```

Visit http://localhost:4173/.

## 🚀 Publish

```shell
pnpm changeset
pnpm run publish-packages
```
