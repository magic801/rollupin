import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './index.js',
  output: {
    file: './dist/main.js',
    name: 'PageDebug',
    format: 'iife',
    sourcemap: true
  },

  plugins: [
    resolve(),
    json()
  ]
}