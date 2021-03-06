import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
}

const data = [
  {
    title: 'Express Js Logo',
    url: './images/1.png',
  },
  {
    title: 'Next Js Logo',
    url: './images/2.png',
  },
  {
    title: 'Sass Logo',
    url: './images/3.png',
  },
  {
    title: 'React Js Logo',
    url: './images/4.png',
  },
  {
    title: 'Node Js Logo',
    url: './images/5.png',
  },
  {
    title: 'Mongodb Logo',
    url: './images/6.png',
  },
  {
    title: 'Gatsby Js Logo',
    url: './images/7.png',
  },
]

function About() {
  useEffect(() => {
    gsap.fromTo(
      '.title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, delay: 0.4, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.text',
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 0.6, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.ligne',
      { css: { width: 0 }, opacity: 0 },
      {
        css: { width: '100%' },
        opacity: 1,
        duration: 2,
        delay: 0.8,
        ease: 'power3.out',
      }
    )

    gsap.fromTo(
      '.subtitle',
      { css: { x: 50 }, autoAlpha: 0, duration: 2, delay: 0.6 },
      {
        css: { x: 0 },
        autoAlpha: 1,
        duration: 2,
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
            <main className="main-about">
              <div className="title">
                <h1>About</h1>
              </div>
              <div className="text">
                <p>
                  Voici le r??sumer de mon parcours dans le digitale en
                  commencent par le design et en arriver au code.
                </p>
              </div>
              <div className="ligne"></div>

              <div className="sec-intro">
                <div
                  className="card-profile"
                  style={{ backgroundImage: 'url(./images/profile_me.webp)' }}
                ></div>
                <div className="title">
                  <h3>Sid Ahmed Baroutchi</h3>
                </div>
                <div className="subtitle">
                  <p>Fullstack developer javascript, web designer.</p>
                </div>

                <div className="btn-form">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1TpbZWbmVpvUw-LEv0_9d6HmNvGlR3BJC/view?usp=sharing"
                  >
                    Resum?? cv
                  </a>
                </div>
              </div>

              <div className="sec-detail">
                <div className="section-design">
                  <div className="title">
                    <h3>Design.</h3>
                  </div>
                  <div className="subtitle">
                    <h5>Design thinking</h5>
                  </div>
                  <div className="text">
                    <p>
                      Bonjour! Je m'appelle Sid Ahmed et j'aime cr??er des choses
                      qui vivent sur internet. Mon int??r??t pour le monde du
                      design a commenc?? en 2012 lorsque j'ai vu une vid??o
                      speed-art sur youtube - il s'av??re que j'ai commenc?? ??
                      apprendre les outiles de la suite adobe comme photoshop &
                      illustrator en designant des photos-manipulation et les
                      post??s sur{' '}
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.deviantart.com/sidouxie2014"
                      >
                        Deviantart.
                      </a>
                    </p>
                    <p>
                      Avance rapide jusqu'?? aujourd'hui, et j'ai eu le provil??ge
                      de travailler en freelance dans une agence, des
                      proffesionnels et des particuliers.{' '}
                    </p>
                    <p>
                      Mon objectif principal ces jours-ci est de cr??er des
                      produits accessibles et inclusifs et des exp??riences
                      num??riques pour une vari??t?? de clients.
                    </p>
                  </div>
                </div>

                <div className="section-dev">
                  <div className="title">
                    <h3>D??veloppement.</h3>
                  </div>
                  <div className="subtitle">
                    <h5>L'??xigence technique</h5>
                  </div>
                  <div className="text">
                    <p>
                      Mon int??r??t pour le d??veloppement web a commenc?? en 2016
                      lorsque j'ai voulu cr??er un cv en ligne - j'ai commenc?? ??
                      apprendre Html / Css, sur le site{' '}
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.openclassrooms.com"
                      >
                        openclassrooms.com
                      </a>{' '}
                      ( ex : siteduzero.fr ).
                    </p>

                    <p>
                      En 2018 j'ai commenc?? r??ellement ?? m'int??resser aux nouvel
                      technos react js et node js, et pour acqu??rir de
                      l'exp??rience j'ai vite commenc?? ?? travailler sur des
                      projets particuliers de mon entourage.
                    </p>

                    <p>
                      Voici quelques technologies avec lesquelles j'ai travaill??
                      r??cemment :
                    </p>
                  </div>
                  <div className="stack">
                    <div className="card-stack">
                      <span className="ligne-stack">
                        {' '}
                        <span className="triangle"></span> Javascript
                      </span>
                      <span className="ligne-stack">
                        <span className="triangle"></span> React
                      </span>
                      <span className="ligne-stack">
                        <span className="triangle"></span> Gatsby
                      </span>
                    </div>

                    <div className="card-stack">
                      <span className="ligne-stack">
                        {' '}
                        <span className="triangle"></span> Next
                      </span>
                      <span className="ligne-stack">
                        <span className="triangle"></span> MongoDb
                      </span>
                      <span className="ligne-stack">
                        <span className="triangle"></span> Express
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>

        <div className="section-logos">
          <div className="wrap-card">
            {data.map((logo) => (
              <img src={logo.url} alt={logo.title} key={logo.title} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
