import React from 'react'
import Menu from './Menu'

function Layout(props) {
  return (
    <>
      <Menu />
      {props.children}
    </>
  )
}

export default Layout
