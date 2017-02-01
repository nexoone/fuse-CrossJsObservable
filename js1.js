var Observable = require('FuseJS/Observable');

var array = Observable('a', 'b', 'c');

 array.add('x');

function add() {

	console.log("addZ");
	array.add('z');
	// console.log("array: " + JSON.stringify(array));
	print();
}


function print() {

	console.log("array: " + JSON.stringify(array));	
}


module.exports = {
	letters: array, 
	add: add,
	obs: Observable(7)
};