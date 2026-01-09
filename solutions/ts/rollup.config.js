import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json' with { type: 'json' }
const input = 'src/index.ts'

export default [
  {
    input,
    output: { file: pkg.main, format: 'umd', name: 'itten-color' },
    plugins: [resolve(), typescript()],
  },
  {
    input,
    output: { file: pkg.module, format: 'es' },
    plugins: [typescript()],
  },
]
