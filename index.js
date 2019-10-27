const express = require("express");
const app = express(); //buat nembak ke browser
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'asset')));
const portListen = 8000;

let userCt = 0;

io.on('connection', (socket) => {
    userCt++;
    console.log("user #" , userCt, " has connected");
})

io.on('disconnecting', (socket ) => {
    userCt--;

})

server.listen(portListen);

