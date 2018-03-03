import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import {
  subscribeToTimer,
  subscribeToCounter,
  incrementCounter,
} from './api';
import Raceboard from './components/Raceboard';

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp: moment(timestamp).format('MMMM Do, YYYY - h:mm:ss')
    }));

    subscribeToCounter((err, counter) => this.setState({
      counter
    }));

    this.state = {
      timestamp: 'no timestamp yet',
      counter: 0
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            Current time on the server:
          </p>
          <p>
            { this.state.timestamp }
          </p>
        </header>
        <Raceboard players={[this.state.counter]}/>
        <button onClick={() => incrementCounter()}>Increment</button>
        <h2>{ this.state.counter }</h2>
      </div>
    );
  }
}

export default App;
