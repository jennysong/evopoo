import React from 'react'
import Landing from './Landing'

class LandingApp extends React.Component {
  render() {
    return (
      <div id="LandingApp">
        <div id='AppBody'>
          <Landing/>
        </div>
      </div>
    );
  }
}

export default LandingApp