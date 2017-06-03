var express = require('express');
var fs = require('fs');
var app = express();

app.listen(80);
app.use('/lib', express.static('./node_modules/d3/build'));
app.use('/lib', express.static('./static'));

app.get('/', function(req, res) {
	fs.readFile('static/index.html', function(err, data) {
		if(!err)
			res.send(data.toString());
		else
			res.status(505);
	})
})