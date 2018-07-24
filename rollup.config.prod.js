import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  input: './index.js',
  output: {
    file: './dist/main.min.js',
    format: 'umd',
    name: 'PageDebug'
  },

  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    json(),
    // uglify({}),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}