// importing express framework
const express = require('express');

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
	return res.send('Hello World With CI/CD');
});
app.get('/hai', function (req, res) {
	return res.send('Hai lagi from ci/cd');
});



module.exports = app;
