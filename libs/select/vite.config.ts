import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
// https://github.com/qmhc/vite-plugin-dts

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outputDir: 'dist/typings',
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'select',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
