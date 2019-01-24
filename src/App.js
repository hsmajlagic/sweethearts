import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (typeof FBInstant !== 'undefined') {
      let FBInstant = window.FBInstant
      FBInstant.initializeAsync()
        .then(function() {
          FBInstant.startGameAsync()
            .then(function() {

          });
      });
    } else {
      alert('Facebook Instant Game SDK failed to load.');
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
