import React from 'react'
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to React</h2>
		</div>
		<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
		</p>

		<Header />
		<Landing />
		<Footer />
	</div>
)

export default App