import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './components/header'

import './app.css'

const App = () => (
  <Router>
    <div id="main">
      <Header />
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
