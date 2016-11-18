// Takes in a arr and creates a two by two table
var createTable = function (arr) {
	let table = [];
	let row = [];

	if (!arr) {
		return table;
	}

	for (let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr.length; j++) {
			row.push(arr[i] * arr[j])
		}
		table.push(row);
		row = [];
	}

	return table;
}

module.exports = {
    getTable: createTable
} 
