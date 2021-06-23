import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './Layout'
import { gsap } from 'gsap'

//Import Icones
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as IconLink } from '../assets/iconLink.svg'
import { ReactComponent as IconReturn } from '../assets/iconReturn.svg'

function WorkPage({ data }) {
  const history = useHistory()

  useEffect(() => {
    gsap.fromTo(
      '.SidouxieLogo',
      { css: { fill: '#1c1c1c' } },
      {
        ease: 'power3.out',
        css: { fill: '#fff' },
        scrollTrigger: {
          id: 'Logo',
          trigger: '.SidouxieLogo',
          start: 'top top',
          end: '+600',
          markers: false,
        },
      }
    )
  }, [])

  return (
    <Layout>
      <main className="main-work-page">
        <div
          className="section-details"
          style={{ backgroundColor: data.color }}
        >
          <div className="container">
            <div className="wrapper">
              <div className="section-head">
                <div className="icon-return" onClick={() => history.go(-1)}>
                  <IconReturn
                    width={'38px'}
                    height={'38px'}
                    style={{ fill: data.colorTitle, cursor: 'pointer' }}
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
                      <h2 style={{ color: data.colorTitle, opacity: 0.8 }}>
                        Objectif du client
                      </h2>
                    </div>
                    <div style={{ color: data.colorText }} className="text">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                  <div className="sec-card">
                    <div className="subtitle">
                      <h2 style={{ color: data.colorTitle, opacity: 0.8 }}>
                        Proposition
                      </h2>
                    </div>
                    <div style={{ color: data.colorText }} className="text">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="sec-link">
                  <div className="link">
                    <a
                      target="_blank"
                      href={data.link}
                      rel="noopener noreferrer"
                    >
                      <IconLink
                        width={'32px'}
                        style={{
                          fill: `${data.colorTitle}`,
                          cursor: 'pointer',
                        }}
                      />
                    </a>
                  </div>
                  <div className="link">
                    <a
                      target="_blank"
                      href={data.github}
                      rel="noopener noreferrer"
                    >
                      <Github
                        width={'32px'}
                        style={{
                          fill: `${data.colorTitle}`,
                          cursor: 'pointer',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-image">
          <img
            src={`.${data.imgPath}`}
            alt={`capture background de site ${data.title}`}
          />
        </div>
      </main>
    </Layout>
  )
}

export default WorkPage
