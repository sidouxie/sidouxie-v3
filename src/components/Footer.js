import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/SidouxieIcon.svg'
import { ReactComponent as Behance } from '../assets/behance.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Github } from '../assets/github.svg'

function Footer() {
  const [isHover, setIsHover] = useState(false)
  const [isBehance, setisBehance] = useState(false)
  const [isInsta, setisInsta] = useState(false)

  const handleHover = (e) => {
    setIsHover(!isHover)
  }
  const handleBe = (e) => {
    setisBehance(!isBehance)
  }
  const handleInsta = (e) => {
    setisInsta(!isInsta)
  }

  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="sec-top">
            <div className="logo">
              <Logo width={105} style={{ fill: '#333333' }} />
            </div>
            <div className="subtitle">
              <h4>
                Nous collaborons avec des marques et des personnes ambitieuses,{' '}
                <br />
                construisons ensemble quelque chose de grand.
              </h4>
            </div>
          </div>

          <div className="sec-center">
            <div className="linked">
              <div className="links">
                <div className="sub">Site links :</div>
                <ul>
                  <Link to="/">
                    <li>- Accueil</li>
                  </Link>

                  <Link to="/work">
                    <li>- work</li>
                  </Link>

                  <Link to="/about">
                    <li>- about</li>
                  </Link>

                  <Link to="/contact">
                    <li>- contact</li>
                  </Link>
                </ul>
              </div>
              <div className="get-contact">
                <div className="sub">Get contact :</div>
                <div className="info">
                  <a
                    href="mailto:sid_ouxie@hotmail.com"
                    target="_blank"
                    rel="nopenner noreferrer"
                    title="e-mail"
                  >
                    sid_ouxie@hotmail.com
                  </a>
                  <a
                    href="tel:+213557733115"
                    target="_blank"
                    rel="nopenner noreferrer"
                    title="Numéro de téléphone"
                  >
                    +213 557 73 31 15
                  </a>
                  <a
                    href="mailto:sid_ouxie@hotmail.com"
                    target="_blank"
                    rel="nopenner noreferrer"
                    title="Adresse postale"
                  >
                    cité aadl belle vue,
                    <br /> Ain Benian Alger 16018.
                  </a>
                </div>
              </div>
            </div>

            <div className="icones">
              <div className="icon">
                <a
                  href="https://github.com/sidouxie"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Github
                    width={30}
                    onMouseEnter={() => handleHover(isHover)}
                    onMouseLeave={() => handleHover(!isHover)}
                    style={{ fill: `${isHover ? '#e6e6e6' : '#333333'}` }}
                  />
                </a>

                <a
                  href="https://instagram.com/sid_ouxi"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Instagram
                    width={30}
                    onMouseEnter={() => handleInsta(isInsta)}
                    onMouseLeave={() => handleInsta(!isInsta)}
                    style={{ fill: `${isInsta ? '#e6e6e6' : '#333333'}` }}
                  />
                </a>

                <a
                  href="https://behance.net/sidouxie"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Behance
                    width={30}
                    onMouseEnter={() => handleBe(isBehance)}
                    onMouseLeave={() => handleBe(!isBehance)}
                    style={{ fill: `${isBehance ? '#e6e6e6' : '#333333'}` }}
                  />
                </a>
              </div>
              <ul>
                <Link to="/politiques-de-confidentialité">
                  <li>Politique de confidentialité</li>
                </Link>

                <Link to="/conditions-générales">
                  <li>conditions générales</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="sec-copyright">
            <div className="ligne"></div>
            <div className="wrp">
              <p>Copyright © 2021 Sidouxie.com</p>
              <p>
                Designed {'&'} coded by
                <a
                  href="https://twitter.com/sidouxie"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="twitter profile"
                >
                  Sidouxie.
                </a>{' '}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
