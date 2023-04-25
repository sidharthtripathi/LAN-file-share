const net = require('net');
const {createWriteStream} = require('fs');
// replace file name with absolute path of file you want to create
const writeStream = createWriteStream('output.iso');
const server = net.createServer();
server.on('connection',(socket)=>{
	console.log('File share started');
	socket.pipe(writeStream);
})

// Enter IP address of any device which is in the LAN

server.listen(3000);