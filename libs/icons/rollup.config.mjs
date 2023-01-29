import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const cjsConfig = getBuildConfig('cjs');
const esmConfig = getBuildConfig('esm');
const rootTypesDefinitionConfig = {
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.d.ts',
  }],
  plugins: [
    dts(), // Roll-up the .d.ts definition files.
  ],
};

export default [
  cjsConfig,
  esmConfig,
  rootTypesDefinitionConfig,
];

function getBuildConfig (format) {
  return {
    input: 'src/index.ts',
    output: {
      format,
      dir: 'dist',
      preserveModules: true,
      entryFileNames: `${format}/[name].js`,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      resolve(),
      peerDepsExternal(),
      terser(),
    ],
    external: ['tslib'],
  };
}
