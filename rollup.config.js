import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: [],
};
