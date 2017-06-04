// 阻塞事件循环的代码
EE = require('events').EventEmitter;
ee = new EE();
die = false;
ee.on('die',function(){
	die = true;
});
setTimeout(function(){
	ee.emit('die')
},100);
while(!die){
}
console.log('done!');