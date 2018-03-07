var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == "/"){
		//显示首页
		fs.readFile("./index.html",function(err,data){
			res.end(data);
		});
	}
});

var io = require('socket.io')(server);
//监听连接事件

io.on("connection",function(socket){
	socket.on("tiwen",function(msg){
		io.emit("huida",msg);
	});
});

server.listen(3000,"127.0.0.1");