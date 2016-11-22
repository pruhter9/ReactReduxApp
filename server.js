/* Include relevant middleware */
var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

/*  Initiate the application and do basic setup */
var app = express();
var server = app.listen(8888);
console.log("Application running on port 8888");

var sessionMiddleware = session({
	secret: "NDAgK0Rrq0LtMGUd"
});

app.use(bodyParser.json());
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, './client')));


/* Include references to database and routing files */
// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);



var newsAPIKey = "10572864afa74604affb2aafeb98d894";
/* news API information 

There are two endpoints

https://newsapi.org/v1/

sources - reveals all of the available news sources that can be accessed
		  does not require the api key to access available sources


articles - pulls 10 articles from the api based upon the query parameters that are provided
		   requires the inclusion of the api key in order to access the specific articles

*/