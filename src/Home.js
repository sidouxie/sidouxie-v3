import React, { useRef, useEffect } from 'react'
import Layout from './components/Layout'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'

function Home() {
  let ref = useRef(null)
  let line1 = useRef(null)

  useEffect(() => {
    if (ref.current) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
      })
    }
  }, [])

  useEffect(() => {
    gsap.from([line1.current], 1, {
      delay: 1,
      ease: 'power3.out',
      opacity: 0,
      y: 64,
      stagger: {
        amount: 0.15,
      },
    })

    gsap.to([line1.current], 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.15,
      },
    })
  }, [line1])

  return (
    <>
      <Layout>
        <div className="App" data-scroll-container ref={ref}>
          <div className="container" data-scroll data-scroll-speed={1}>
            <div className="wrapper">
              <h1 className="title" ref={line1}>
                Darky-plumbing
              </h1>
              <div className="subtitle">Objectif du client</div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>
            </div>

            <div className="wrapper">
              <h1 className="title">Droppy.ml</h1>
              <div className="subtitle">Objectif du client</div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis, velit iusto voluptatem porro placeat modi facere fuga
                architecto sunt sint culpa aperiam soluta voluptatum vero minus
                odio, sed iure. Libero repudiandae perspiciatis dicta. Nihil
                sint aspernatur natus aut quas iure itaque aliquid, totam
                nostrum qui aliquam eius voluptate laboriosam quidem, nulla
                distinctio? Non, consectetur recusandae praesentium amet
                corporis eligendi?
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
