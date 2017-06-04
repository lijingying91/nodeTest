// 杀死僵尸进程
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

var rssWarn = (50 * 1024 * 1024)
	,heapWarn = ( 50 * 1024 * 1024)

var workers = {}

if(cluster.isMaster){
	for(var i = 0; i < numCPUs; i++){
		createWorker()
	}
}
setInterval(function(){
	var time = new Date().getTime()
	for(pid in workers){
		
	}
}, 1000)