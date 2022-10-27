import pkg from '../../lib/cjs/math-cjs.js';
const { multiply } = pkg;

import { add } from '../../lib/es6/math-es6.mjs';

var sum = add(2,3);
var mult = multiply(2,3);
console.log(`Sum: ${sum}, Mult: ${mult}`);
