import React, { lazy } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Work = lazy(() => import('./Work'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Notfound = lazy(() => import('./Notfound'))
const Politiques = lazy(() => import('./Politiques'))
const Conditions = lazy(() => import('./Conditions'))
const WorkPage = lazy(() => import('./components/WorkPage'))

function Routes(props) {
  const location = useLocation()

  return (
    <>
      <Switch location={location} key={location.pathname}>
        <Route
          path="/"
          exact
          component={(props) => <Home isLoading={props.isLoading} {...props} />}
        />

        <Route path="/work" exact>
          <Work data={props.data} />
        </Route>

        <Route
          exact
          path="/work/:slug"
          render={({ match }) => (
            <WorkPage
              data={props.data.find((p) => p.slug === match.params.slug)}
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
    </>
  )
}

export default Routes
