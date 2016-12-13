/* eslint-disable */

'use strict';

/* Include relevant middleware
newsAPIKey = "10572864afa74604affb2aafeb98d894";
SCClientId = "28528ad11d2c88f57b45b52a5a0f2c83";
*/

var express = require('express');
var path = require('path');
// var session = require('express-session');
var bodyParser = require('body-parser');

/*  Initiate the application and do basic setup */
var app = express();
var server = app.listen(8888);
console.log("Application running on port 8888");

// var sessionMiddleware = session({
// 	secret: "NDAgK0Rrq0LtMGUd"
// });

app.use(bodyParser.json());
// app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, './client')));

/* Include references to database and routing files */
// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// Server side react router config
app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
