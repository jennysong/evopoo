import React, { Component } from 'react';
import AppHeader from './App/Header';
import AppBody from './App/Body';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppBody/>
      </div>
    );
  }
}

export default App;
