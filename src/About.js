import React, { useEffect } from 'react'
import Layout from './components/Layout'
import gsap from 'gsap'

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
      { x: 0, opacity: 1, duration: 2, delay: 0.9, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.ligne',
      { css: { width: 0 }, opacity: 0 },
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
        <div className="container">
          <div className="wrapper">
            <main className="main-about">
              <div className="title">
                <h1>About</h1>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, magni asperiores. Odio impedit dicta consequuntur
                  mollitia reiciendis consectetur! Accusamus temporibus error
                  repellendus quas vitae exercitationem dolor odit tenetur,
                  impedit ex.
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
                  <p>Fullstack developer javascript, web designer ux</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
