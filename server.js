const io = require('socket.io')();
var counter = 0;

io.sockets.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('subscribeToCounter', () => {
    console.log('client is subscribing to counter, starting at:', counter);
  });

  client.on('incrementCounter', () => {
    counter++;
    io.sockets.emit('clientIncrement', counter);
    console.log('client incremented counter', counter);
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
