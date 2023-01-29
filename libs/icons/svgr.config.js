// https://react-svgr.com/docs/options/

module.exports = {
  outDir: 'src',  // -d, --out-dir
  icon: true,  // --icon [value] value: boolean | string | number. Default: `false` or `1rem` if `true`
  typescript: true,  // --typescript
  jsxRuntime: 'automatic',  // --jsx-runtime=automatic
  titleProp: true,  // --title-prop
  svgProps: {
    // Example:
    // fill: 'currentColor',  // --svg-props fill=currentColor
  },
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
  },
  index: true,
};
