import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'
import Politiques from './Politiques'
import Conditions from './Conditions'
import WorkPage from './components/WorkPage'

import { useGetPostesQuery } from './services/getData'
import LoaderSpinner from './components/LoaderSpinner'

function Routes() {
  const location = useLocation()

  const { data, isLoading } = useGetPostesQuery()

  return (
    <>
      <Switch location={location} key={location.pathname}>
        <Route
          path="/"
          exact
          component={(props) => <Home isLoading={props.isLoading} {...props} />}
        />

        <Route path="/work" exact>
          <Work data={data} />
        </Route>

        {isLoading ? (
          <div className="main-spinner">
            <LoaderSpinner />
          </div>
        ) : (
          <Route
            exact
            path="/work/:slug"
            render={({ match }) => (
              <WorkPage
                data={data && data.find((p) => p.slug === match.params.slug)}
              />
            )}
          />
        )}

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
