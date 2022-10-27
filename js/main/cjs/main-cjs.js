var add = require('../../lib/cjs/math-cjs').add;
// var multiply = require('../../lib/cjs/math-cjs').multiply;
var multiply = require('./es6-wrapper').multiply;

var sum = add(2,3);
var mult = multiply(2, 3);
console.log(`Sum: ${sum}, Mult: ${mult}`);
