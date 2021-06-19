import React, {useEffect} from 'react'
import Layout from './components/Layout'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
  }, [])
  return (
    <Layout>
      <div className="App" data-scroll-container>
        <div className="container">
          <h1 className="title">Darky-plumbing</h1>
          <div className="subtitle">Objectif du client</div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis,
            velit iusto voluptatem porro placeat modi facere fuga architecto
            sunt sint culpa aperiam soluta voluptatum vero minus odio, sed iure.
            Libero repudiandae perspiciatis dicta. Nihil sint aspernatur natus
            aut quas iure itaque aliquid, totam nostrum qui aliquam eius
            voluptate laboriosam quidem, nulla distinctio? Non, consectetur
            recusandae praesentium amet corporis eligendi?
          </p>

          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis,
            velit iusto voluptatem porro placeat modi facere fuga architecto
            sunt sint culpa aperiam soluta voluptatum vero minus odio, sed iure.
            Libero repudiandae perspiciatis dicta. Nihil sint aspernatur natus
            aut quas iure itaque aliquid, totam nostrum qui aliquam eius
            voluptate laboriosam quidem, nulla distinctio? Non, consectetur
            recusandae praesentium amet corporis eligendi?
          </p>

          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis,
            velit iusto voluptatem porro placeat modi facere fuga architecto
            sunt sint culpa aperiam soluta voluptatum vero minus odio, sed iure.
            Libero repudiandae perspiciatis dicta. Nihil sint aspernatur natus
            aut quas iure itaque aliquid, totam nostrum qui aliquam eius
            voluptate laboriosam quidem, nulla distinctio? Non, consectetur
            recusandae praesentium amet corporis eligendi?
          </p>

          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis,
            velit iusto voluptatem porro placeat modi facere fuga architecto
            sunt sint culpa aperiam soluta voluptatum vero minus odio, sed iure.
            Libero repudiandae perspiciatis dicta. Nihil sint aspernatur natus
            aut quas iure itaque aliquid, totam nostrum qui aliquam eius
            voluptate laboriosam quidem, nulla distinctio? Non, consectetur
            recusandae praesentium amet corporis eligendi?
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App
