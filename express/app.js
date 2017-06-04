var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/',function(req, res){
	res.render('battlestar');
});
app.listen(9001);