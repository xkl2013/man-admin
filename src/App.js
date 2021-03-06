import React, { Component } from 'react';
import Header from '@/components/head';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        <header className="App-header">
          <Header />
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
