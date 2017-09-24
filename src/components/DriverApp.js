import React from 'react';
import Header from './Header'
import Map from './Map'
import { Button, Input } from 'semantic-ui-react'

class DriverApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Map/>
      </div>
    )
  }

}

export default DriverApp;