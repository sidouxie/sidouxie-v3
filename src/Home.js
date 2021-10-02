import React, { useState } from 'react'

import Layout from './components/Layout'

function Home() {
  const [isHover, setIsHover] = useState(false)

  const handleIsHover = () => {
    return setIsHover(!isHover)
  }

  return (
    <>
      <Layout>
        <div className="container">
          <div className="wrapper">
            <div className="hero-banner">
              <div className="sec-title">
                <h2>Hello !</h2>
                <div className="memoji">
                  <img
                    src="./images/memoji.png"
                    alt="sidouxie memoji code on her macbook"
                  />
                </div>
              </div>

              <div className="sec-text">
                <p>
                  Je suis <strong>Sid Ahmed Baroutchi</strong>, un ingénieur en
                  développement web front-end axée sur la conception et la
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
      </Layout>
    </>
  )
}

export default Home
