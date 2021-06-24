import React, { useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'

function Layout(props) {
  const [isopen, setIsopen] = useState(false)

  const handleClick = () => {
    setIsopen(!isopen)
  }

  return (
    <>
      <Menu isopen={isopen} handleClick={handleClick} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
