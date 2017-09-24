import React from 'react'
import { Button } from 'semantic-ui-react'
import logo from "./logo.svg"
import "./Landing.css"
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render() {
    return(
      <div id='AppLanding'>
        <div className='Content'>
          <img src={logo} className='AppLogo'/>
          <div className='Description'>
            Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </div>
          <div className='Actions'>
            <Button.Group>
              <Link to="/driver">
                <Button inverted>Driver</Button>
              </Link>
              <Button.Or />
              <Link to="/rider">
                <Button active inverted>Rider</Button>
              </Link>
              </Button.Group>
          </div>
        </div>
        <div className='BackgroundImage'/>
      </div>
    )
  }
}

export default Landing