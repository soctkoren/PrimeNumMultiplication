#!/usr/bin/env node

const runner = require('./build/index.js');

let input = parseInt(process.argv[2], 10);
// check input handles less than 1 numbers and nums greater than 100,000,000
if (input <= 1) {
	console.log('Number was too small to generate a prime table');
} else if (input > Number.MAX_SAFE_INTEGER || input >= 100000000) {
	console.log('Number is too big to generate a prime table');
} else {
	runner.getTable(input);
}