import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SidouxieLogo } from '../assets/SidouxieLogo.svg'
import { ReactComponent as IconUp } from '../assets/iconUp.svg'
import { ReactComponent as IconDown } from '../assets/iconDown.svg'
import { gsap } from 'gsap'

function Menu({ isopen, handleClick }) {
  let menuRef = useRef(null)

  useEffect(() => {
    gsap.from([menuRef.current], 0.8, {
      opacity: 0,
      x: '50%',
    })

    gsap.to([menuRef.current], 0.8, {
      ease: 'power3.out',
      opacity: 1,
      x: 0,
    })
  }, [isopen])

  return (
    <header>
      <nav>
        <Link to="/">
          <SidouxieLogo
            fill={'fefefe'}
            width={'100px'}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        {isopen ? (
          <IconDown
            onClick={() => handleClick(!isopen)}
            fill={'fefefe'}
            width={'20px'}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <IconUp
            onClick={() => handleClick(!isopen)}
            fill={'fefefe'}
            width={'25px'}
            style={{ cursor: 'pointer' }}
          />
        )}
      </nav>
      <div ref={menuRef} className={`menu-mobile ${isopen && 'active'}`}>
        <h2>This Is Menu MtherFucker</h2>
        <Link to="/work">WORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </header>
  )
}

export default Menu
