const io = require('socket.io')();
var counter = 0;

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('subscribeToCounter', (cb) => {
    client.emit('clientIncrement', counter);
    console.log('client is subscribing to counter, starting at:', counter);
  });

  client.on('incrementCounter', () => {
    counter++;
    client.emit('clientIncrement', counter)
    console.log('client incremented counter', counter);
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
