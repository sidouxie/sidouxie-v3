import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import axios from 'axios'

import Home from './Home'
import InitialTrans from './components/InitialTrans'

const Work = lazy(() => import('./Work'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Notfound = lazy(() => import('./Notfound'))
const Politiques = lazy(() => import('./Politiques'))
const Conditions = lazy(() => import('./Conditions'))
const WorkPage = lazy(() => import('./components/WorkPage'))
const AnimatePresence = lazy(() =>
  import('framer-motion').then((mod) => ({
    default: mod.motion.div,
  }))
)

export const dataContext = React.createContext()

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const location = useLocation()

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
      <Suspense fallback={<InitialTrans />}>
        {data && (
          <dataContext.Provider value={data}>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  path="/"
                  exact
                  component={(props) => (
                    <Home isLoading={isLoading} {...props} />
                  )}
                />

                <Route path="/work" exact>
                  <Work data={data} />
                </Route>

                <Route
                  exact
                  path="/work/:slug"
                  render={({ match }) => (
                    <WorkPage
                      data={data.find((p) => p.slug === match.params.slug)}
                    />
                  )}
                />

                <Route path="/about">
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/politiques-de-confidentialité">
                  <Politiques />
                </Route>

                <Route path="/conditions-générales">
                  <Conditions />
                </Route>

                <Route path="/*">
                  <Notfound />
                </Route>
              </Switch>
            </AnimatePresence>
          </dataContext.Provider>
        )}
      </Suspense>
    </>
  )
}

export default App
