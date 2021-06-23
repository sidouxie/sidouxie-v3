import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './Layout'
import { ReactComponent as Github } from '../assets/github.svg'

function WorkPage({ data }) {
  const history = useHistory()

  return (
    <Layout>
      <main className="main-work-page">
        <div className="head-bg" style={{ backgroundColor: data.color }}>
          <div className="container">
            <div className="wrapper">
              <div className="section-head">
                <button
                  style={{ margin: '3rem 0' }}
                  onClick={() => history.push('./')}
                >
                  Retour à la page présedante
                </button>

                <div
                  style={{ color: data.colorText, opacity: 0.2 }}
                  className="category"
                >
                  <h3>site web</h3>
                </div>
                <div className="title">
                  <h2 style={{ color: data.colorTitle }}>{data.title}</h2>
                  <span
                    style={{ color: data.colorText, opacity: 0.2 }}
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
                      <Github
                        width={'38px'}
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
                        width={'38px'}
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
      </main>
    </Layout>
  )
}

export default WorkPage
