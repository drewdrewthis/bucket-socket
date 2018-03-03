const io = require('socket.io')();
var players = [];
var count = 0;

io.sockets.on('connection', (client) => {
  const info = {
    id: count,
    counter: 0
  };

  players[count] = info;

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('subscribeToCounter', () => {
    io.sockets.emit('clientIncrement', players);
    console.log(`#${info.id} client is subscribing to counter, starting at:`, info.counter);
  });

  client.on('incrementCounter', () => {
    info.counter++;
    io.sockets.emit('clientIncrement', players);
    console.log(`${info.id} client incremented counter`, info.counter);
  });

  client.on('disconnect', function (){
      console.log('player disconnected', info.id, players);
      players.splice(info.id, 1);
      count--;
      console.log('player disconnected', info.id, players);
      io.sockets.emit('clientIncrement', players);
  });

  count++;
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
