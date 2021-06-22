import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { gsap } from 'gsap'

function Home() {
  const [isHover, setIsHover] = useState(false)

  const handleIsHover = () => {
    return setIsHover(!isHover)
  }

  useEffect(() => {
    gsap.from('.title', 1, {
      delay: 1,
      ease: 'power3.out',
      opacity: 0,
      y: 64,
      stagger: {
        amount: 0.15,
      },
    })

    gsap.to('.title', 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.15,
      },
    })
  }, [])

  return (
    <>
      <Layout>
        <div className="App">
          <div className="container">
            <div className="wrapper">
              <div className="hero-banner">
                <div className="sec-title">
                  <h2>Hello !</h2>
                  <div className="hand-slap">
                    <img src="./images/wave.png" alt="hand say hello" />
                  </div>
                </div>

                <div className="sec-text">
                  <p>
                    Je suis <strong>Sid Ahmed Baroutchi</strong>, un ingénieur
                    en développement web front-end axée sur la conception et la
                    création de belles interfaces et expériences utilisateur.
                  </p>

                  <div className="sec-btn">
                    <h3>me contacter : </h3>
                    <div
                      className="btn-action"
                      onMouseEnter={() => handleIsHover(!isHover)}
                      onMouseLeave={() => handleIsHover(!isHover)}
                    >
                      <a
                        href="mailto:sid_ouxie@hotmail.com"
                        rel="noopener noreferrer"
                        title="e-mail"
                      >
                        sid_ouxie@hotmail.com
                      </a>
                      <div
                        className={`ligne-blue ${isHover ? 'active' : ''}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
