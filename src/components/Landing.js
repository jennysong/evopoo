import React from 'react'
import { Button } from 'semantic-ui-react'
import logo from "./logo.svg"
import image from "./Landing-image.jpg"
import "./Landing.css"

class Landing extends React.Component {
  render() {
    return(
      <div id='AppLanding'>
        <img src={logo} className='AppLogo'/>
        <div className='Description'>
          Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </div>
        <Button inverted>Get Started</Button>
        <div className='BackgroundImage'>
          <img src={image}/>
        </div>
      </div>
    )
  }
}

export default Landing