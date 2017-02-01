var js1 = require('./js1');

function save() {

	js1.letters.forEach(function(item) {

		console.log("item: " + item);	
	});
}


module.exports = {
	letters: js1.letters,
	save: save,
	val: js1.obs,
	val2: js1.obs.map(function (a) { return a * 2; })
};