import React from 'react'
import { ReactComponent as SidouxieLogo } from '../assets/SidouxieLogo.svg'
import { ReactComponent as IconUp } from '../assets/iconUp.svg'

function Menu() {
  return (
    <header>
      <nav>
        <SidouxieLogo fill={'fefefe'} width={'100px'} />
        <IconUp fill={'fefefe'} width={'25px'} />
      </nav>
    </header>
  )
}

export default Menu
