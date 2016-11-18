const eratosthenes = require('./eratosthenes.js');
const table = require('./table.js');
const display = require('./display.js');

var runner = function(n) {
	let primeArr = eratosthenes.getAllPrimes(n);
	let primeTable = table.getTable(primeArr);
	display.print(primeArr, primeTable);
}

module.exports = {
    getTable: runner
} 

