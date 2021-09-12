import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
/* import Footer from './Footer'
import Menu from './Menu' */

const Footer = lazy(() => import('./Footer'))
const Menu = lazy(() => import('./Menu'))

function Layout(props) {
  const locate = useLocation().pathname
  const [isopen, setIsopen] = useState(false)
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    if (locate === '/') {
      setIsHome(true)
    } else {
      window.scrollTo(0, 0)
    }
  }, [isHome, locate])

  const handleClick = () => {
    setIsopen(!isopen)
  }

  return (
    <>
    <Suspense fallback={<div />}>
      <Menu isopen={isopen} handleClick={handleClick} />
      {props.children}
      {!isHome ? <Footer /> : null}
      </Suspense>
    </>
  )
}

export default Layout
