import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: [{
    file: pkg['main'],
    format: 'cjs'
  }, {
    file: pkg['module'],
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true
    })
  ]
};
