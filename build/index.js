const eratosthenes = require('./eratosthenes.js');
const table = require('./table.js');
const display = require('./display.js');

var runner = function(n) {

	// Estimate nth prime number, using prime number theorem. 
	// Added 2x padding for estimation error

	let nEst = n * Math.log(n) * 2.0
	let tempArr = eratosthenes.getAllPrimes(nEst);
	let primeArr = tempArr.splice(0, n);
	let primeTable = table.getTable(primeArr);
	display.print(primeArr, primeTable);
}

module.exports = {
    getTable: runner
} 

