import React, { useState } from 'react'
import Menu from './Menu'

function Layout(props) {
  const [isopen, setIsopen] = useState(null)
  const handleClick = () => {
    setIsopen(!isopen)
  }

  return (
    <>
      <Menu isopen={isopen} handleClick={handleClick} />
      {props.children}
    </>
  )
}

export default Layout
