# Modal

React modal for the HRNet application's UI.

## Requirements

- [NodeJS](https://nodejs.org/en/) 18+
- [pnpm](https://pnpm.io/fr/) 7+

## 🚀 Getting started

```shell
pnpm dev-standalone  # Serves the package's demo application
```

```shell
pnpm install
pnpm build
```

## Notes

### This package is experimenting the [Vite's library mode](https://vitejs.dev/guide/build.html#library-mode).

For now, it is meant to be developed with its standalone application, served by Vite.

This leads to:

➕ way simpler configuration  
➕ faster reload on source file changes    
➖ Storybook in monorepo won't refresh alone

#### Reason

You will be able to get HMR while serving the app in dev mode, but this won't update the `dist/` directory.  
This means that the Storybook in the monorepo won't update when modifying this package source files.

#### Temporary workaround

Develop the package with the standalone dev command.

If you want to let the Storybook update at some point, you can still run the build command.  
As soon as the build ends, Storybook will reload the components.

> This might or might not change in the future, depending on whether we are happy with this behavior.
