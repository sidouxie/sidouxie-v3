import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Layout from './components/Layout'
import { ReactComponent as Behance } from './assets/behance.svg'
import { ReactComponent as Instagram } from './assets/instagram.svg'
import { ReactComponent as Github } from './assets/github.svg'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [message, setMessage] = useState('')

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
          end: 'top+=667',
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
          end: 'top+=667',
          markers: false,
          toggleActions: 'play reset play none',
        },
      }
    )
  }, [])

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', prenom, numero, email, message }),
    })
      .then(() => {
        alert('Votre message a bien été envoyé !')
        setPrenom('')
        setEmail('')
        setNumero('')
        setMessage('')
      })
      .catch((error) => alert(error))

    e.preventDefault()
  }
  return (
    <>
      <Layout>
        <div className="bg-main">
          <div className="bg-head"></div>

          <div className="title-head">
            <h3>
              Think <span className="bold">Different.</span>
            </h3>
          </div>
        </div>

        <main className="contact-main">
          <div className="container">
            <div className="wrapper">
              <div className="section">
                <div className="sec-contact">
                  <div className="title">
                    <h2>CONTACT US</h2>
                  </div>
                  <div className="card-contact">
                    <div className="ligne"></div>

                    <div className="card-desc">
                      <div className="text">
                        <p>
                          <strong>POUR LES ENQUÊTES GÉNÉRALES</strong> -
                          Veuillez utiliser le formulaire de contact ci-dessous.
                        </p>
                      </div>
                      <div className="subtitle">
                        <p>sid_ouxie@hotmail.com</p>
                        <p>+213 557 73 31 15</p>
                      </div>

                      <div className="follow">
                        <p>Follow us :</p>

                        <div className="icones">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/sidouxie"
                          >
                            <Github
                              width={'32px'}
                              style={{ fill: '#8c8c8c', cursor: 'pointer' }}
                            />
                          </a>

                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://instagram.com/sid_ouxi"
                          >
                            <Instagram
                              width={'32px'}
                              style={{ fill: '#8c8c8c', cursor: 'pointer' }}
                            />
                          </a>

                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://behance.net/sidouxie"
                          >
                            <Behance
                              width={'32px'}
                              style={{ fill: '#8c8c8c', cursor: 'pointer' }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sec-submit">
                  <form
                    action="submit"
                    name="contact-sidouxie"
                    data-netlify="true"
                    method="post"
                    netlify-honeypot="bot-field"
                    hidden
                    onSubmit={handleSubmit}
                  >
                    <label>
                      Nom* :
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Nom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                      />
                    </label>

                    <label>
                      Email* :
                      <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>

                    <label>
                      Sujet :
                      <input
                        type="text"
                        name="numero"
                        placeholder="votre sujet"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                      />
                    </label>

                    <label>
                      Message* :
                      <textarea
                        type="text"
                        name="message"
                        placeholder="envoie-nous un message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </label>

                    <input type="hidden" name="form-name" value="contact" />

                    <button className="btn-form" type="submit" value="Envoyer">
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Contact
