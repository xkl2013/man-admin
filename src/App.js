import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '@/components/head';
const ss = 123;

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
