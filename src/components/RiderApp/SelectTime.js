import React from 'react';
import { Input } from 'semantic-ui-react'
import RiderApp from '../RiderApp';


class SelectTime extends React.Component {
  render() {
    return (
      <RiderApp>
        <div className='SelectTime'>
          <Input placeholder='Set your time'/>
        </div>
      </RiderApp>
    )
  }
}

export default SelectTime;