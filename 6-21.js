var mongo = require('mongodb');
var host = "localhost";
var port = 27017;
var db = new mongo.Db('node-mongo-example', new mongo.Server(host, port, {}), {});

db.open(function(err, db){
	db.collection('users', function(err, collection){
		collection.insert({username: 'Bilbo', firstname: 'Shibo'}, function(err, docs){
			console.log(docs);
			db.close();
		})
	})
})