# Icons

React icon components.

## 🚀 Getting started

```shell
pnpm install
pnpm run build
```

## Create new icons

Just add an SVG file in `assets/` and build.

In order for the icons to get the current text color (or the color we give it through the `color` property),  
SVG elements have their following property values replaced with `currentColor`,  
so make sure that the icon color already is `currentColor` or pure black at first:

- `#000`
- `#000000`

### Resources for new icons

- [Phosphor](https://phosphoricons.com/) is a nice place to get SVG icons.
- [Lucide](https://lucide.dev/) also have a good choice.

### Notes about SVG files

*Phosphor* and *Lucide* icons should work out of the box.

## Notes

There is no `src/` directory, as it is generated at build time.
