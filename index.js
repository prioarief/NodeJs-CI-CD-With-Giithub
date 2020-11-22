const app = require('./app')

// listen to port 7000 by default
app.listen(process.env.PORT || 2121, () => {
	console.log('Server is running');
});