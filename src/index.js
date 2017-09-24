import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import reducer from './reducers'
import './semantic/dist/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


registerServiceWorker();
