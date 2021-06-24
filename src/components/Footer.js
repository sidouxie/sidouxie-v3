import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/SidouxieIcon.svg'
import { ReactComponent as Behance } from '../assets/behance.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Github } from '../assets/github.svg'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="sec-top">
            <div className="logo">
              <Logo width={40} style={{ fill: '#c6c6c6' }} />
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
                >
                  sid_ouxie@hotmail.com
                </a>
                <a
                  href="mailto:sid_ouxie@hotmail.com"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  +213 557 73 31 15
                </a>
                <a
                  href="mailto:sid_ouxie@hotmail.com"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  cité aadl belle vue, Ain Benian Alger 16018.
                </a>
              </div>
            </div>
            <div className="icones">
              <div className="icon">
                <a
                  href="https://github.com/sidouxie"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Github width={30} style={{ fill: '#fefefe' }} />
                </a>

                <a
                  href="https://instagram.com/sidouxie"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Instagram width={30} style={{ fill: '#fefefe' }} />
                </a>

                <a
                  href="https://behance.net/sidouxie"
                  target="_blank"
                  rel="nopenner noreferrer"
                >
                  <Behance width={30} style={{ fill: '#fefefe' }} />
                </a>
              </div>
              <ul>
                <Link to="/">
                  <li>Politique de confidentialité</li>
                </Link>

                <Link to="/">
                  <li>conditions générales</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="sec-copyright">
            <p>Copyright c 2021 sidouxie.com</p>
            <p>Designed & Coded By Sidouxie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
