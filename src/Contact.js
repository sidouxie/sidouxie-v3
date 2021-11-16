import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Layout from './components/Layout'
import { ReactComponent as Behance } from './assets/behance.svg'
import { ReactComponent as Instagram } from './assets/instagram.svg'
import { ReactComponent as Github } from './assets/github.svg'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin); 
}

const encode = (data) => {
  const formData = new FormData()
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k])
  })
  return formData
}

function Contact() {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [sujet, setSujet] = useState('')
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

  const data = {
    "form-name": "contact-v2",
    prenom,
    email,
    sujet,
    message }
  

  const handleSubmit = (e) => { 
    e.preventDefault()
    fetch("/", {
      method: "POST",
      //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data)
    })
      .then((res) => {
        
        alert('Votre message a bien été envoyé !')
        /* setPrenom('')
        setEmail('')
        setSujet('')
        setMessage('') */
      })
      .catch((error) => alert(error))
  }
  return (
    <>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        >
          <div className="bg-main">
            <div className="bg-head"></div>

            <div className="title-head">
              <h3>
                Think{' '}
                <motion.span
                  className="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.4,
                    delay: 1.2,
                  }}
                >
                  Different.
                </motion.span>
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
                            Veuillez utiliser le formulaire de contact
                            ci-dessous.
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
                      action="/thank-you/"
                      name="contact-v2"
                      netlify="true"
                      method="POST"
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
                          name="sujet"
                          placeholder="votre sujet"
                          value={sujet}
                          onChange={(e) => setSujet(e.target.value)}
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

                      <input type="hidden" name="bot-field" value="contact" />

                      <button
                        className="btn-form"
                        type='submit'
                      >
                        Envoyer
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </Layout>
    </>
  )
}

export default Contact
