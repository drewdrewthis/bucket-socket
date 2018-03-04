const io = require('socket.io')();
const players = [];

io.sockets.on('connection', (client) => {
  const user = {
    id: players.length,
    counter: 0,
    connected: true,
    createdAt: (new Date()).toLocaleString()
  };

  players.push(user);

  console.log(`#${user.id} created and connected. ${user.createdAt}`);

  const updatePlayers = () => {
    const currentPlayers = players.filter(({connected}) => connected);
    io.sockets.emit('updatePlayers', currentPlayers);
  }

  client.on('subscribeToTimer', (interval) => {
    // console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('subscribeToUser', () => {
    client.emit('user', user);
  });

  client.on('subscribeToPlayers', () => {
    updatePlayers();
    console.log(`#${user.id} client is subscribing to counter, starting at:`, user.counter);
  });

  client.on('incrementCounter', () => {
    user.counter++;
    updatePlayers();
    client.emit('user', user);
    console.log(`#${user.id} client incremented counter (${user.counter})`);
  });

  client.on('disconnect', function (){
    user.connected = false;
    updatePlayers();
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
