import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SidouxieLogo } from '../assets/SidouxieLogo.svg'
import { ReactComponent as IconUp } from '../assets/iconUp.svg'
import { ReactComponent as IconDown } from '../assets/iconDown.svg'
import { ReactComponent as Behance } from '../assets/behance.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Github } from '../assets/github.svg'
import { gsap } from 'gsap'

gsap.registerPlugin()

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
    const tl = gsap.globalTimeline
    if (isopen) {
      tl.fromTo(
        '.IconUp',
        { autoAlpha: 1, css: { display: 'block' } },
        { duration: 0.01, autoAlpha: 0, css: { display: 'none' } }
      )

        .to('.IconDown', { autoAlpha: 1, css: { display: 'block' } })

        .from('header .menu-mobile.active', 0.8, {
          opacity: 0,
          y: '-100%',
        })

        .to('header .menu-mobile.active', 0.8, {
          ease: 'power3.out',
          opacity: 1,
          y: 0,
        })
    } else {
      tl.to('.IconUp', { autoAlpha: 1, css: { display: 'block' }, scale: 1 })
        .to('.IconDown', {
          duration: 0.1,
          autoAlpha: 0,
          css: { display: 'none' },
        })

        .to('header .menu-mobile', 1.4, {
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
            className="SidouxieLogo"
            width={'100px'}
            style={{
              fill: '#1c1c1c',
              cursor: 'pointer',
            }}
          />
        </Link>

        <IconDown
          className="IconDown"
          onClick={() => handleClick(!isopen)}
          width={'20px'}
          style={{
            display: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '20px',
            right: '35px',
          }}
        />

        <IconUp
          className="IconUp"
          onClick={() => handleClick(!isopen)}
          width={'25px'}
          style={{ fill: '#1c1c1c', cursor: 'pointer' }}
        />
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
                width={'32px'}
                style={{ fill: '#1c1c1c', cursor: 'pointer' }}
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
                width={'32px'}
                style={{ fill: '#1c1c1c', cursor: 'pointer' }}
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
                width={'32px'}
                style={{ fill: '#1c1c1c', cursor: 'pointer' }}
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
