import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import reducer from './reducers'
import './semantic/dist/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import LandingApp from './components/LandingApp';
import DriverApp from './components/DriverApp'
import RiderApp from './components/RiderApp'


const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LandingApp}/>
        <Route path="/driver" component={DriverApp}/>
        <Route path="/rider" component={RiderApp}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)


registerServiceWorker();