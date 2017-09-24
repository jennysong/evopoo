import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div class='AppHeader'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }


}

export default Header;