import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
