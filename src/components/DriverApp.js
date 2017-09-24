import React from 'react';
import Header from './Header'
import Map from './Map'

class DriverApp extends React.Component {
  render() {
    return (
      <div id='DriverApp'>
        <Header/>
        <Map/>
      </div>
    )
  }


}

export default DriverApp;