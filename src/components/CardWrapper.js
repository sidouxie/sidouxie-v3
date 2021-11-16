import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import {Image, Placeholder} from "cloudinary-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin); 
}

function CardWrapper({ data }) {
  let bgRef = useRef([])
  bgRef.current = []

  let titleRef = useRef([])
  titleRef.current = []

  let techRef = useRef([])
  techRef.current = []

  let textRef = useRef([])
  textRef.current = []

  useEffect(() => {
    
    bgRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          css: {
            x: 0,
            height: '100%',
            width: '0%',
            zIndex: -1,
          },
        },
        {
          duration: 1.2,
          delay: 0.2,
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
            id: `title card ${index++}`,
            trigger: el,
            start: 'top top+=200',
            end: '+=200',
            markers: false,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    techRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          scale: 1.5,
          stagger: {
            amount: 0.4,
          },
          autoAlpha: 0,
        },
        {
          duration: 1.2,
          delay: 0.8,
          ease: 'power3.inOut',
          scale: 1,
          autoAlpha: 0.8,
          stagger: {
            amount: 0.4,
          },
          scrollTrigger: {
            id: `techno card ${index++}`,
            trigger: el,
            start: 'top top+=300',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    textRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          duration: 0.4,
          delay: 0.2,
          ease: 'power3.out',
          y: 0,
          autoAlpha: 1,
          stagger: {
            amount: 0.4,
          },
          scrollTrigger: {
            id: `text card ${index++}`,
            trigger: el,
            start: 'top top+=350',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    ScrollTrigger.refresh()
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

  const addTechRef = (el) => {
    if (el && !techRef.current.includes(el)) {
      techRef.current.push(el)
    }
  }

  return (
    <div className="card-index">
      <Link to={`/work/${data.slug}`}>
        
        <Image
        loading="lazy"
        src={data.photo.formats.small.url}
        alt={`capture du site ${data.title}`}
        >
        <Placeholder type='predominat'></Placeholder></Image>
        <div className="sec-head">
          <h3 style={{ color: data.colorTitle }} ref={addToRefsTitle}>
            {data.title}
          </h3>
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
                      ref={addTechRef}
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
          <p style={{ color: data.colorText }} ref={addTextRef}>
            {data.description}
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
