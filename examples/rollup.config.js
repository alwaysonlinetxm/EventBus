import html from 'rollup-plugin-fill-html';
// import commonjs from 'rollup-plugin-commonjs';
// import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle-[hash].js',
    format: 'iife',
  },
  plugins: [
    // resolve(),
    // commonjs(),
    html({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
