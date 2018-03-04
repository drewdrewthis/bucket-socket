import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import {
  subscribeToTimer,
  subscribeToPlayers,
  subscribeToUser,
  incrementCounter,
} from './api';
import Raceboard from './components/Raceboard';

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp: moment(timestamp).format('MMMM Do, YYYY - h:mm:ss')
    }));

    subscribeToUser((err, user) => this.setState({
      user
    }));

    subscribeToPlayers((err, players) => this.setState({
      players
    }));

    this.state = {
      user: {
        id: 0,
        counter: 0
      },
      timestamp: 'no timestamp yet',
      players: []
    };
  }
  render() {
    const {
      user,
      timestamp,
      players
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Player {user.id}</h2>
          <p className="App-intro">
            Current time on the server:
          </p>
          <p>
            { timestamp }
          </p>
        </header>
        <Raceboard players={players}/>
        <button onClick={() => incrementCounter()}>Increment</button>
        <h2>{ user.counter }</h2>
      </div>
    );
  }
}

export default App;
