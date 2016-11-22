"use strict";

let request = require('request');
const apiKey = "10572864afa74604affb2aafeb98d894";
const apiUrl = "https://newsapi.org/v1/";

module.exports = (function() {
	return {
		retrieveArticles: function (req, res) {
			let source = req.params.source;
			let reqUrl = `${apiUrl}articles?source=${source}&apiKey=${apiKey}`;
			request(reqUrl, (error, response, body) => {
				if (!error && response.statusCode === 200) {
					res.end(response.body);
				}
			})
		},
		retrieveSources: function (req, res) {
			let reqUrl = `${apiUrl}sources?language=en`;
			request(reqUrl, (error, response, body) => {
				if(!error && response.statusCode === 200) {
					res.end(response.body);
				}
			})
		}
	}
})();