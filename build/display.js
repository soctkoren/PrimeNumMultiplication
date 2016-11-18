const Table = require('cli-table');

var displayTable = function(primeArr, primeTable){
	
	// Need to add white space to front for header
	var header = primeArr.slice();
	header.unshift('');

	var table = new Table({
    head: header
	});

	// Create row objects with heading and value
	for (let i = 0; i < primeTable.length; i++) {
		let rowHead = primeArr[i]
		let value = primeTable[i]
		let row = {}
		row[rowHead] = value
		table.push(row)
	}

	console.log(table.toString());
}

module.exports = {
    print: displayTable
} 
