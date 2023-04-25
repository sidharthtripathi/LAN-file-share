const net = require('net');
const {createReadStream} = require('fs')
// replace host with IP address of any device connected to LAN
const client = net.createConnection({host:'localhost',port:3000});
// replace file name with absolute path of file you want to share
const readStream = createReadStream('tekken6.iso');
readStream.pipe(client);