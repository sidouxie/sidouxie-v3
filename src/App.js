import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import axios from 'axios'

import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'
import Politiques from './Politiques'
import Conditions from './Conditions'
import WorkPage from './components/WorkPage'
import InitialTrans from './components/InitialTrans'

/* const data = [
  {
    id: '1',
    slug: 'darky-plumbing',
    title: 'Darky-plumbing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#015d82',
    colorTitle: '#002729',
    colorText: '#3ac7e0',
    imgPath: './captures/darky-capture.jpg',
    domain: '.ml',
    link: 'https://darky-plumbing.netlify.app',
    github: 'https://github.com/sidouxie/Zayn-Plombier',
    techno: [
      {
        id: 1,
        stacks: ['Html', 'Scss', 'Javascript', 'Next Js'],
      },
    ],
  },
  {
    id: '2',
    slug: 'droppy',
    title: 'Droppy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#0033cc',
    colorTitle: '#001b6a',
    colorText: '#628bfd',
    imgPath: './captures/droppy-capture.jpg',
    domain: '.ml',
    link: 'https://droppy.vercel.app',
    github: 'https://github.com/sidouxie/droppy',
    techno: [
      {
        id: 2,
        stacks: ['Html', 'Scss', 'Javascript', 'Next Js'],
      },
    ],
  },
  {
    id: '3',
    slug: 'walid-khaladi-v2',
    title: 'Walid Khaladi v2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#1c1c1c',
    colorTitle: '#A8A8A8',
    colorText: '#8a8f8b',
    imgPath: './captures/willab-capture.jpg',
    domain: '.ml',
    link: 'https://willab.netlify.app',
    github: 'https://github.com/sidouxie/willab',
    techno: [
      {
        id: 3,
        stacks: ['Html', 'Scss', 'Javascript', 'React Js'],
      },
    ],
  },
  {
    id: '4',
    slug: 'n-seddi',
    title: 'N-Seddi',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi.',
    color: '#009898',
    colorTitle: '#002729',
    colorText: '#45e1e4',
    imgPath: './captures/nseddi-capture.jpg',
    domain: '.ml',
    link: 'https://n-seddi.netlify.app',
    github: 'https://github.com/sidouxie/n-seddi',
    techno: [
      {
        id: 4,
        stacks: ['Html', 'Scss', 'Javascript', 'Next Js'],
      },
    ],
  },
  {
    id: '5',
    slug: 'walid-khaladi-v1',
    title: 'Walid Khaladi v1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#74bac2',
    colorTitle: '#284042',
    colorText: '#B3F7FF',
    imgPath: './captures/walid-capture.jpg',
    domain: '.ml',
    link: 'https://walidkhaladi.netlify.app',
    github: 'https://github.com/sidouxie/walidkhaladi',
    techno: [
      {
        id: 5,
        stacks: ['Html', 'Scss', 'Javascript', 'Gatsby Js'],
      },
    ],
  },
  {
    id: '6',
    slug: 'sidouxie-v2',
    title: 'Sidouxie v2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#11e783',
    colorTitle: '#07693B',
    colorText: '#0CA85F',
    imgPath: './captures/sidouxie-capture.jpg',
    domain: '.ml',
    link: 'https://sidouxie-v2.netlify.app',
    github: 'https://github.com/sidouxie/sidouxie-v2',
    techno: [
      {
        id: 6,
        stacks: ['Html', 'Scss', 'Javascript'],
      },
    ],
  },
] */

export const dataContext = React.createContext()

function App() {
  /*   const [isFirst, setIsFirst] = useState(true) */
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const location = useLocation()
  /*   const history = useHistory() */

  useEffect(() => {
    gsap.to('body', { visibility: 'visible' })
    /* const unlisten = history.listen(() => {
      isFirst && setIsFirst(false)
    })
    return unlisten */

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
    } else setIsLoading(true)
  }, [isLoading, data])

  return (
    <>
      {data && (
        <dataContext.Provider value={data}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/"
                exact
                component={(props) => <Home isLoading={isLoading} {...props} />}
              />

              <Route path="/work" exact>
                {isLoading && <InitialTrans />}
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
                {isLoading && <InitialTrans />}
                <About />
              </Route>

              <Route path="/contact">
                {isLoading && <InitialTrans />}
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
    </>
  )
}

export default App
