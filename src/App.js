import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { BundleAnalyzer } from './features/bundleAnalyzer/BundleAnalyzer'
import { HomePage } from './features/home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:term" component={BundleAnalyzer} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
