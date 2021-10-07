import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Routes from './Routes'

export const dataContext = React.createContext()

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get('https://api-sidouxie.herokuapp.com/postes?_sort=createdAt:DESC')
        .then((res) => {
          setData(res.data)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }

    if (data === null) {
      return fetch()
    }
  }, [isLoading, data])

  return (
    <>
      <dataContext.Provider value={data}>
        <Routes data={data} isLoading={isLoading} />
      </dataContext.Provider>
    </>
  )
}

export default App
