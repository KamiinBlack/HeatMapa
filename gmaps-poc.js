var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mock_data = [];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomData () {
  for (i = 0; i < 20; i++) { 
    mock_data.push({
      id: i,
      lat: getRandomArbitrary(-90, 90),
      lon: getRandomArbitrary(-180, 180),
      value: getRandomArbitrary(0,10) 
    });
}
}

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('User connected');
  
  setInterval(() => {
    mock_data = [];
    getRandomData();
    io.emit('data', mock_data);
  }, 1000);
  
});



http.listen(80, function(){
  console.log('listening on *:80');
});