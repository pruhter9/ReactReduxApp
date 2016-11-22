var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/db_name');
var modelsPath = __dirname + '/../models';

/* Loop over all files in the model folder and pull in all javascript files */
fs.readdirSync(modelsPath).forEach(function(file) {
	if (file.indexOf('.js') > 0) {
		require(modelsPath + '/' + file);
	}
});