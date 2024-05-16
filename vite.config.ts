import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const entries = ['src/index.ts', 'src/jsx-runtime.ts'];

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
    },
    outDir: 'dist',
  },
  plugins: [
    dts({
      include: entries,
    }),
  ],
});
