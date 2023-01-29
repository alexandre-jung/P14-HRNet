// https://github.com/svg/svgo

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          // https://github.com/svg/svgo/blob/main/plugins/removeUnknownsAndDefaults.js
          removeUnknownsAndDefaults: {
            defaultAttrs: false,
          },
        },
      },
    },
  ],
};
