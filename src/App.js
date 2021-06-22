import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import gsap from 'gsap'

import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'




function App() {
  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } })
  }, [])

  return (
    <>
      <div className="scroll-app">
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
      </div>
    </>
  )
}

export default App
