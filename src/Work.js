import React, { useEffect } from 'react'
import Layout from './components/Layout'
import CardWrapper from './components/CardWrapper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

function Work({ data }) {
  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
      toggleActions: 'play complete',
    })

    gsap.fromTo(
      '.title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, delay: 3.2, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.text',
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 3.4, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.ligne',
      { css: { width: 0 }, opacity: 0, delay: 3.6 },
      {
        css: { width: '100%' },
        opacity: 1,
        duration: 2,
        delay: 1.6,
        ease: 'power3.out',
      }
    )
  }, [])
  return (
    <>
      <Layout>
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        >
          <div className="wrapper">
            <main className="main-work">
              <div className="title">
                <h1>WORK</h1>
              </div>
              <div className="text">
                <p>
                  Voici quelques projets que j'ai réalisés dans mon parcours de
                  developpement web.
                </p>
              </div>
              <div className="ligne"></div>
              <div className="card-wrap">
                {data.map((card) => (
                  <CardWrapper data={card} key={card.id} />
                ))}
              </div>
            </main>
          </div>
        </motion.div>
      </Layout>
    </>
  )
}

export default Work
