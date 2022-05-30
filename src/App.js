import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSPlugin } from 'gsap/CSSPlugin'

import Routes from './Routes'

gsap.registerPlugin(ScrollTrigger, CSSPlugin)

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
