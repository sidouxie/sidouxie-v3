import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSPlugin } from 'gsap/CSSPlugin'

import Routes from './Routes'

gsap.registerPlugin(ScrollTrigger, CSSPlugin)

export const dataContext = React.createContext()

function App() {
  /* const [data, setData] = useState(null) */
  const [isLoading, setIsLoading] = useState(true)

  /* useEffect(() => {
    const fetch = async () => {
      await axios({
        method: 'get',
        url: 'https://api-sidouxie.herokuapp.com/postes?_sort=createdAt:DESC',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => {
          setData(res.data)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }

    if (data === null) {
      return fetch()
    }
  }, [isLoading, data]) */

  return (
    <>
      <Router>
        {/* <dataContext.Provider value={data}> */}
        <Routes isLoading={isLoading} />
        {/* </dataContext.Provider> */}
      </Router>
    </>
  )
}

export default App
