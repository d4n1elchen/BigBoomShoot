var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var JsonDB = require('node-json-db');
var db = new JsonDB("db", true, false);

server.listen(3000);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('shot', db.getData("/count"));
  socket.on('shoot', function (data) {
    console.log("Someone shoot!");
    db.push("/count", db.getData("/count")+1);
    db.save();
    socket.emit('shot', 1);
  });
});