var add = require('../../lib/cjs/math-cjs').add;
var multiply = require('../../lib/cjs/math-cjs').multiply;
// import { multiply } from '../../lib/es6/math-es6.mjs';

var sum = add(2,3);
var mult = multiply(2, 3);
console.log(`Sum: ${sum}, Mult: ${mult}`);
