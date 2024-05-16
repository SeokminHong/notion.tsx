import { defineConfig } from 'vite';

const entries = ['src/index.ts', 'src/jsx-runtime.ts'];

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
    },
    outDir: 'dist',
  },
});
