import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home.js'
import Result from './pages/Result.js'

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
      <Router>
        <div>
          <header className={styles.header}>
            <h1>Dog or Cat</h1>
            <h2 className={styles.title}>Find out if you're a dog or cat person</h2>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
