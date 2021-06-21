import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SidouxieLogo } from '../assets/SidouxieLogo.svg'
import { ReactComponent as IconUp } from '../assets/iconUp.svg'
import { ReactComponent as IconDown } from '../assets/iconDown.svg'
import { ReactComponent as Behance } from '../assets/behance.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Github } from '../assets/github.svg'
import { gsap } from 'gsap'

function Menu({ isopen, handleClick }) {
  const [isHover, setIsHover] = useState(false)
  const [isInsta, setIsInsta] = useState(false)
  const [isGit, setIsGit] = useState(false)

  const handlebehance = () => {
    setIsHover(!isHover)
  }

  const handleInsta = () => {
    setIsInsta(!isInsta)
  }

  const handleGit = () => {
    setIsGit(!isGit)
  }

  useEffect(() => {
    if (isopen) {
      gsap.from('header .menu-mobile.active', 0.8, {
        opacity: 0,
        y: '-100%',
      })

      gsap.to('header .menu-mobile.active', 0.8, {
        ease: 'power3.out',
        opacity: 1,
        y: 0,
      })
    } else {
      gsap.from('header .menu-mobile', 0.8, {
        opacity: 1,
        y: 0,
      })

      gsap.to('header .menu-mobile', 1.4, {
        stagger: {
          amount: 0.6,
        },
        ease: 'power3.out',
        opacity: 0,
        y: '-100%',
      })
    }
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
      <div className={`menu-mobile ${isopen && 'active'}`}>
        <div className="wrapper-mobile">
          <div className="ligne-top"></div>
          <div className="ligne-bot"></div>
          <div className="sec-links">
            <Link to="/work">WORK</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="sec-icons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://behance.net/sidouxie"
            >
              <Behance
                fill={'fefefe'}
                width={'32px'}
                style={{ cursor: 'pointer' }}
                opacity={isHover ? 1 : 0.5}
                onMouseEnter={() => handlebehance(isHover)}
                onMouseLeave={() => handlebehance(!isHover)}
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/sid_ouxi"
            >
              <Instagram
                fill={'fefefe'}
                width={'32px'}
                style={{ cursor: 'pointer' }}
                opacity={isInsta ? 1 : 0.5}
                onMouseEnter={() => handleInsta(isInsta)}
                onMouseLeave={() => handleInsta(!isInsta)}
              />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/sidouxie"
            >
              <Github
                fill={'fefefe'}
                width={'32px'}
                style={{ cursor: 'pointer' }}
                opacity={isGit ? 1 : 0.5}
                onMouseEnter={() => handleGit(isGit)}
                onMouseLeave={() => handleGit(!isGit)}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menu
