import { nodeResolve } from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import {terser} from 'rollup-plugin-terser';

export default {
  input: [
     './node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox.js',
     './node_modules/@vaadin/vaadin-button/vaadin-button.js',
   ],
  output: {
    file: './vaadin-components.js',
    format: 'esm',
    name: 'vaadin'
  },
  plugins: [
    nodeResolve(),
    multi(),
    terser({output:{comments: false}})
  ]
};
