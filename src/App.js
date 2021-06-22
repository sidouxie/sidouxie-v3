import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import gsap from 'gsap'

import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import WorkPage from './components/WorkPage'


const data = [
  {
    id: '1',
    slug: 'darky-plumbing',
    title: 'Darky-plumbing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#015d82',
    colorTitle: '#002729',
    colorText: '#62f9ff',
    imgPath: './captures/darky-capture.jpg',
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
  },
  {
    id: '4',
    slug: 'n-seddi',
    title: 'N-Seddi',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi.',
    color: '#009898',
    colorTitle: '#002729',
    colorText: '#62f9ff',
    imgPath: './captures/nseddi-capture.jpg',
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
  },
  {
    id: '6',
    slug: 'sidouxie-v1',
    title: 'Sidouxie v2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
    color: '#11e783',
    colorTitle: '#07693B',
    colorText: '#0CA85F',
    imgPath: './captures/sidouxie-capture.jpg',
  },
]

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
              <Work data={data} />
            </Route>

            <Route path="/work/:slug" render={({ match }) => (
              <WorkPage data={data.find(p => p.slug === match.params.slug)} />
            ) } />
              
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
