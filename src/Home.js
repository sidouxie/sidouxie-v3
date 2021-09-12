import React, { useEffect, useState, Suspense, lazy } from 'react'
/* import Layout from './components/Layout' */
import InitialTrans from './components/InitialTrans'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

const Layout = lazy(() => import('./components/Layout'))


const content = (isLoading) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isLoading ? 0.2 : 0 },
  },
})

function Home({ isLoading }) {
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
    <Suspense fallback={<InitialTrans />}>
      <Layout>
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        >
          {/* {isLoading && <InitialTrans />} */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={content(isLoading)}
          ></motion.div>
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
        </motion.div>
      </Layout>
      </Suspense>
    </>
  )
}

export default Home
