import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CardWrapper({ data }) {
  let bgRef = useRef([])
  bgRef.current = []

  let titleRef = useRef([])
  titleRef.current = []

  let textRef = useRef([])
  textRef.current = []

  let cardRef = useRef([])
  cardRef.current = []

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

    cardRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { visibility: 'hidden', autoAlpha: 0, scale: 1.5, x: 60 },
        {
          duration: 0.6,
          delay: 0.2,
          visibility: 'visible',
          x: 0,
          scale: 1,
          autoAlpha: 1,
          ease: 'power3.out',
          stagger: {
            amount: 0.8,
          },
          scrollTrigger: {
            id: `visiblity card ${index + 1}`,
            trigger: el,
            start: 'top top+=400',
            markers: false,
          },
        }
      )
    })

    bgRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: -50, css: { height: '100%', width: '0', zIndex: -1 } },
        {
          duration: 1.6,
          delay: 0.4,
          x: 0,
          ease: 'power3.out',
          css: { zIndex: 1, width: '100%', opacity: 1 },
          scrollTrigger: {
            id: `card ${index + 1}`,
            trigger: el,
            start: 'top top+=250',
            end: '+=250',
            markers: false,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    titleRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { duration: 0, x: 50, opacity: 0 },
        {
          duration: 1.4,
          delay: 0.6,
          ease: 'power3.out',
          x: 0,
          opacity: 1,
          scrollTrigger: {
            id: `title card ${index + 1}`,
            trigger: el,
            start: 'top top+=200',
            end: '+=200',
            markers: false,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    textRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 50, autoAlpha: 0 },
        {
          duration: 0.4,
          delay: 0.2,
          ease: 'power3.out',
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            id: `text card ${index + 1}`,
            trigger: el,
            start: 'top top+=350',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !bgRef.current.includes(el)) {
      bgRef.current.push(el)
    }
  }

  const addToRefsTitle = (el) => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el)
    }
  }

  const addTextRef = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el)
    }
  }

  const addCardRef = (el) => {
    if (el && !cardRef.current.includes(el)) {
      cardRef.current.push(el)
    }
  }

  return (
    <div ref={addCardRef} className="card-index">
      <Link to={`/work/${data.slug}`}>
        <img src={`.${data.imgPath}`} alt={`capture du site ${data.title}`} />
        <div className="sec-head">
          <h3 style={{ color: data.colorTitle }} ref={addToRefsTitle}>
            {data.title}
          </h3>
          <p style={{ color: data.colorText }} ref={addTextRef}>
            {data.desc}
          </p>
        </div>
        <div
          id={data.title}
          ref={addToRefs}
          className="sec-bg"
          style={{ backgroundColor: data.color }}
        ></div>
      </Link>
    </div>
  )
}

export default CardWrapper
