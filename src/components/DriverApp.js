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
        <div>
          <div id="mappy" style={mappyStyle}></div>
          
          <div>From:</div>
          <Input id="autocompleteFrom" placeholder='Enter address...' />
          <Button onClick={clickPoint}>Click on map</Button>
          
          <div>To:</div>
          <Input id="autocompleteTo" placeholder="Enter address" />
          <Button onClick={clickPoint}>Click on map</Button>
          
          <div>Time:</div>
          <Input id="date" type="date" />
          <Input id="time" type="time" />
          
          <div>How many passengers:</div>
          <Input id="passengers" type="text" />

          <Button onClick={sendData}>Submit</Button>
        </div>

      </div>
    )
  }

}

const mappyStyle = {
  width: "400px", 
  height: "500px"
}

const clickPoint = (type) => {
  alert('click');
}
const sendData = () => {
  alert('send');
}

export default DriverApp;