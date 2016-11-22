"use strict";
/* Include relevant controllers */
let news = require('./../controllers/news.js');

/* Configure the application routes, possibly have two sets if sockets is in use */

 module.exports = (function(app) {
 	/* http request routes */
	app.get('/sources', function (req, res) {
		console.log("hitting the sources route");
		news.retrieveSources(req,res);
	});
	app.get('/articles/:source', function (req, res) {
		console.log("hitting the articles route");
		news.retrieveArticles(req,res);
	})
 });