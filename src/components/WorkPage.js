import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './Layout'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//Import Icones
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as IconLink } from '../assets/iconLink.svg'
import { ReactComponent as IconReturn } from '../assets/iconReturn.svg'

gsap.registerPlugin(ScrollTrigger)

function WorkPage({ data }) {
  const history = useHistory()

  const [isLink, setIsLink] = useState(false)
  const [isGit, setIsGit] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleLink = () => {
    setIsLink(!isLink)
  }

  const handleHover = () => {
    setIsHover(!isHover)
  }

  const handleGit = () => {
    setIsGit(!isGit)
  }

  useEffect(() => {
    const tl = gsap.globalTimeline

    tl.fromTo(
      '.SidouxieLogo',
      { css: { fill: '#1c1c1c' } },
      {
        ease: 'power3.out',
        css: { fill: '#fff' },
        scrollTrigger: {
          id: 'Logo',
          trigger: '.SidouxieLogo',
          start: 'top top',
          end: 'top+=1400',
          markers: false,
          toggleActions: 'play reset play none',
        },
      }
    ).fromTo(
      '.IconUp',
      { css: { fill: '#1c1c1c' } },
      {
        ease: 'power3.out',
        css: { fill: '#fff' },
        scrollTrigger: {
          id: 'Logo',
          trigger: '.IconUp',
          start: 'top top',
          end: 'top+=1400',
          markers: false,
          toggleActions: 'play reset play none',
        },
      }
    )
  }, [])

  return (
    <>
      {data && (
        <Layout>
          <motion.main
            className="main-work-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.25 }}
          >
            <motion.div
              className="section-details"
              initial={{ backgroundColor: '#fff' }}
              animate={{ backgroundColor: data.color }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.25 }}
            >
              <div className="container">
                <div className="wrapper">
                  <div className="section-head">
                    <div className="icon-return" onClick={() => history.go(-1)}>
                      <IconReturn
                        width={'38px'}
                        height={'38px'}
                        onMouseEnter={() => handleHover(isHover)}
                        onMouseLeave={() => handleHover(!isHover)}
                        style={{
                          fill: `${isHover ? data.colorText : data.colorTitle}`,
                          cursor: 'pointer',
                        }}
                      />
                    </div>

                    <div
                      style={{ color: data.colorText, opacity: 0.5 }}
                      className="category"
                    >
                      <h3>site web</h3>
                    </div>
                    <div className="title">
                      <h2 style={{ color: data.colorTitle }}>{data.title}</h2>
                      <span
                        style={{ color: data.colorText, opacity: 0.5 }}
                        className="domain"
                      >
                        {data.domain}{' '}
                      </span>
                    </div>

                    <div className="sec-text">
                      <div className="sec-card">
                        <div className="subtitle">
                          <h2 style={{ color: data.colorTitle }}>Résumer</h2>
                        </div>
                        <div style={{ color: data.colorText }} className="text">
                          <p>{data.description}</p>
                        </div>
                      </div>
                      <div className="sec-card">
                        <div className="subtitle">
                          <h2 style={{ color: data.colorTitle }}>Stacks</h2>
                        </div>

                        <div className="sec-span">
                          {data &&
                            data.techno.map(({ id, stacks }) => (
                              <span
                                className="container-span"
                                style={{ opacity: 0.8 }}
                                key={id}
                              >
                                {stacks.map((stack) => (
                                  <span
                                    className="content-span"
                                    style={{
                                      color: data.colorText,
                                      border: `0.5px ${data.colorText} solid`,
                                    }}
                                    key={id++}
                                  >
                                    {stack}
                                  </span>
                                ))}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="sec-link">
                      <div className="link">
                        <span style={{ color: data.colorTitle }}>
                          consulter le site
                        </span>
                        <a
                          target="_blank"
                          href={data.link}
                          rel="noopener noreferrer"
                        >
                          <IconLink
                            width={'32px'}
                            title={`${data.title} site web`}
                            onMouseEnter={() => handleLink(isLink)}
                            onMouseLeave={() => handleLink(!isLink)}
                            style={{
                              fill: `${
                                isLink ? data.colorTitle : data.colorText
                              }`,
                              cursor: 'pointer',
                            }}
                          />
                        </a>
                      </div>
                      <div className="link">
                        <span style={{ color: data.colorTitle }}>
                          voir le code
                        </span>
                        <a
                          target="_blank"
                          href={data.github}
                          rel="noopener noreferrer"
                        >
                          <Github
                            width={'32px'}
                            title={`${data.title} Github repository`}
                            onMouseEnter={() => handleGit(isGit)}
                            onMouseLeave={() => handleGit(!isGit)}
                            style={{
                              fill: `${
                                isGit ? data.colorTitle : data.colorText
                              }`,
                              cursor: 'pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* section images */}

            <div className="section-image">
              <img
                src={`${data.photo.formats.large.url}`}
                alt={`capture background de site ${data.title}`}
              />
            </div>

            <div className="section-desc">
              <div className="container">
                <div className="wrapper">
                  <div className="title">
                    <h3>Le concepte design du projet</h3>
                  </div>
                  <div className="subtitle">
                    <h5>l'importance de l'ux dans le digital</h5>
                  </div>

                  <div className="text">
                    <p>{data.description}</p>
                  </div>

                  {/* section image mockup */}

                  <div className="section-mockup">
                    <img
                      src={data.mockupPhoto.url}
                      alt={`mockup du projet ${data.title}`}
                    />
                  </div>

                  <div className="section-btn">
                    <a
                      target="_blank"
                      href={data.link}
                      rel="noopener noreferrer"
                    >
                      visiter le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.main>
        </Layout>
      )}
    </>
  )
}

export default WorkPage
