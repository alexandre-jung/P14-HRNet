## Issues

### Storybook setup in PNPM workspaces

- [Using Storybook with Turborepo](https://turbo.build/repo/docs/handbook/tools/storybook)
- [Opt-in MDX2 support](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#opt-in-mdx2-support)
- Update `@storybook/mdx2-csf` to the latest version
- A workaround for fixing hoisting issues:  
  Add `public-hoist-pattern[]=*storybook*` in .npmrc   
  More information on this thread: [Builder breaks with package managers that don't hoist](https://github.com/storybookjs/builder-vite/issues/55)
