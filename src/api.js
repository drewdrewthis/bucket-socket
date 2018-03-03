import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToCounter(cb) {
  socket.on('clientIncrement', counter => cb(null, counter));
  socket.emit('subscribeToCounter');
}

function incrementCounter(cb) {
  socket.emit('incrementCounter');
}

export { subscribeToTimer, subscribeToCounter, incrementCounter }
