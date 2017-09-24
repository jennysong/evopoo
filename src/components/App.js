import React from 'react'
import Header from './Header'
import Landing from './Landing'
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header/>
        <div id='AppBody'>
          <Landing/>
        </div>
      </div>
    );
  }
}

export default App