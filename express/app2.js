var express = require('express');
var app = express();

app.get('/:id?',function(req, res){
	if(req.params.id){
		res.send(req.params.id);
	}else{
		res.send('oh hai');
	}
});

app.listen(9001);