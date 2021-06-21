import React from 'react'
import Layout from './components/Layout'
import CardWrapper from './components/CardWrapper'

function Work() {
  const data = [
    {
      id: '1',
      title: 'Darky-plumbing',
      desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi. Corrupti ipsa aliquid consequuntur! Ipsam eaque molestiae ratione. Nobis voluptas reprehenderit, accusamus assumenda doloremque aut commodi praesentium voluptatem eligendi cum natus totam sint vel. Mollitia ipsum quae quas iure animi!',
      color: '#c6c6c6',
    },
    {
      id: '2',
      title: 'Droppy',
      desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi. Corrupti ipsa aliquid consequuntur! Ipsam eaque molestiae ratione. Nobis voluptas reprehenderit, accusamus assumenda doloremque aut commodi praesentium voluptatem eligendi cum natus totam sint vel. Mollitia ipsum quae quas iure animi!',
      color: '#c4c4c4',
    },
    {
      id: '3',
      title: 'Walid Khaladi',
      desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi. Corrupti ipsa aliquid consequuntur! Ipsam eaque molestiae ratione. Nobis voluptas reprehenderit, accusamus assumenda doloremque aut commodi praesentium voluptatem eligendi cum natus totam sint vel. Mollitia ipsum quae quas iure animi!',
      color: '#c2c2c2',
    },
    {
      id: '4',
      title: 'N-Seddi',
      desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi. Corrupti ipsa aliquid consequuntur! Ipsam eaque molestiae ratione. Nobis voluptas reprehenderit, accusamus assumenda doloremque aut commodi praesentium voluptatem eligendi cum natus totam sint vel. Mollitia ipsum quae quas iure animi!',
      color: '#c1c1c1',
    },
  ]

  return (
    <>
      <Layout>
        <div className="container">
          <div className="wrapper">
            <main className="main-work">
              <div className="title">
                <h1>WORK</h1>
              </div>
              <div className="ligne"></div>
              <div className="card-wrap">
                {data.map((card) => (
                  <CardWrapper data={card} key={data.id} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Work
