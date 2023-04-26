const net = require('net');
const {createReadStream} = require('fs')
// replace host with IP address of reciever
const client = net.createConnection({host:'127.0.0.1',port:3000});
// replace file name with absolute path of file you want to share
const readStream = createReadStream('test.bin');
readStream.pipe(client);