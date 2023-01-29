import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

const MODE = 'prod';

// Avoid including external files in the final bundle.
const externalModules = [
  'jest',
  'tslib',
  '@alexandre-jung/hrnet-icons',
];

/**
 * Configuration that generates a bundle with ES modules, preserved structure and type definitions.
 */
const esmConfig = getBuildConfig({
  format: 'esm',
  outDirFromDist: 'esm',
});

/**
 * Configuration that generates a bundle with CommonJS modules, preserved structure and type definitions.
 */
const cjsConfig = getBuildConfig({
  format: 'cjs',
  outDirFromDist: 'cjs',
});

/**
 * Configuration that generates the type definitions at the root of the dist/ folder.
 *
 * It should be included last.
 */
const rootTypeDefinitionsConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.d.ts',
    },
  ],
  plugins: [dts()], // Roll-up the .d.ts definition files.
  external: [
    ...externalModules,
    /^.*.scss$/,
  ],
};

export default [
  cjsConfig,
  esmConfig,
  rootTypeDefinitionsConfig,
];

function getBuildConfig ({ format, outDirFromDist }) {
  return {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format,
        sourcemap: MODE === 'dev',
        preserveModules: true,
        // To output CSS one level up: https://github.com/rollup/rollup/issues/3507#issuecomment-616634947
        entryFileNames: `${outDirFromDist}/[name].js`,
      },
    ],
    external: externalModules,
    plugins: [
      peerDepsExternal(), // prevents bundling peerDependencies
      resolve(), // resolves package entry points
      commonjs(),
      postcss({
        // https://www.npmjs.com/package/rollup-plugin-postcss
        // https://stackoverflow.com/a/59034076
        extract: true, // Extract to an external CSS file.
        minimize: MODE !== 'dev', // Minify the resulting CSS.
        // sourceMap: MODE === 'dev',
        modules: {
          generateScopedName: false, // Do not prefix class names with the module name.
        },
        plugins: [],
      }),
      typescript({ compilerOptions: { outDir: `dist/${outDirFromDist}` } }),
      terser(), // Minify the bundle.
    ],
  };
}
