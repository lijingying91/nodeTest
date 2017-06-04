var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// app.use(express.limit('1mb'));
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.methodOverride());

app.get('/',function(req,res){
	res.send('<form method="post" action="/">'+
				'<input type="hidden" name="_method" value="put" />'+
				'Your Name:<input type="text" name="username" />'+
				'<input type="submit" />'+
				'</form>');
});

app.put('/',function(req,res){
	res.send('welcome, '+req.body.username);
});

app.listen(8080);