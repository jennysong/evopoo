import React from 'react';
import Map from './Map'

class RiderMap extends Map {
  componentDidMount() {

  }
  render() {
    return (
      <div ref='google_map'></div>
    )
  }
}

export default RiderMap;