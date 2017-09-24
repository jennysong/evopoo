import React from 'react';
import logo from './logo.svg';
import './Header.css'
class Header extends React.Component {
  render() {
    return (
      <div id='AppHeader'>
        <img src={logo} className="AppLogo" alt="logo" />
      </div>
    )
  }


}

export default Header;