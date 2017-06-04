// 创建一个新类支持EventEmitter事件
var utils = require('utils'),
	EventEmitter = require('events').EventEmitter;

var Server = function(){
	console.log('init');
};

utils.inherits(Server, EventEmitter);

var s = new Server();

s.on('abc',function(){
	console.log('abc');
});

s.emit('abc');