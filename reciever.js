const net = require('net');
const {createWriteStream} = require('fs');
// replace file name with absolute path of file you want to create
const writeStream = createWriteStream('output.bin');
const server = net.createServer();
server.on('connection',(socket)=>{
	console.log('File share started');
	socket.pipe(writeStream);
	server.close()
})

// Enter IP address of reciever device

server.listen(3000);