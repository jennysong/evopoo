import React from 'react';
import logo from './logo.svg';
import './Header.css'
class Header extends React.Component {
  render() {
    return (
      <div id='AppHeader'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }


}

export default Header;