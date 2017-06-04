// 客户端发送消息
// var net = require('net');
// var chatServer = net.createServer();

// chatServer.on('connection', function(client){
// 	client.write('Hi!\n');
// 	// client.write('Bye!\n');
// 	client.on('data', function(data){
// 		console.log(data);
// 	})
// 	// client.end();
// });

// chatServer.listen(9000);

// 把消息转发给所有的客户端
// var net = require('net');
// var chatServer = net.createServer(),
// 	clientList = [];

// chatServer.on('connection',function(client){
// 	client.write('Hi!\n');
// 	clientList.push(client);
// 	client.on('data',function(data){
// 		for(var i = 0; i < clientList.length; i+=1){
// 			clientList[i].write(data);
// 		}
// 	})
// });

// chatServer.listen(9000);

// 改进消息发送
var net = require('net');
var chatServer = net.createServer(),
	clientList = [];
chatServer.on('connection',function(client){
	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write('hi '+ client.name + '!\n');

	clientList.push(client);
	client.on('data',function(data){
		broadcast(data,client);
	});
	// 断开处理
	client.on('end',function(){
		clientList.splice(clientList.indexOf(client),1);
	});
	// 记录错误
	client.on('error',function(e){
		console.log(e);
	});
});

function broadcast(message,client){
	var cleanup = [];
	for(var i = 0; i<clientList.length;i+=1){
		if(client !== clientList[i]){
			if(clientList[i].writable){
				clientList[i].write(client.name + " says" + message)
			}else{
				cleanup.push(clientList[i]);
				clientList[i].destroy();
			}
			// clientList[i].write(client.name + " says" + message)
		}
	}

	for(var i = 0; i < cleanup.length; i+=1){
		clientList.splice(clientList.indexOf(cleanup[i]),1);
	}
}

chatServer.listen(9000);