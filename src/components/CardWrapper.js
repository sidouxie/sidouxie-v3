import React, { useEffect, useRef } from 'react'
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

  useEffect(() => {
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
            start: 'top top+=150',
            end: 'top center',
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
            start: 'top top+=150',
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

  return (
    <div
      className="card-index"
      style={{ backgroundImage: `url(${data.imgPath})` }}
    >
      <div className="sec-head">
        <h3 ref={addToRefsTitle}>{data.title}</h3>
        <p ref={addTextRef}>{data.desc}</p>
      </div>
      <div
        id={data.title}
        ref={addToRefs}
        className="sec-bg"
        style={{ backgroundColor: data.color }}
      ></div>
    </div>
  )
}

export default CardWrapper
