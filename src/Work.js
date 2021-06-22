import React from 'react'
import Layout from './components/Layout'
import CardWrapper from './components/CardWrapper'

function Work() {
  const data = [
    {
      id: '1',
      title: 'Darky-plumbing',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
      color: '#015d82',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/darky-capture.jpg'
    },
    {
      id: '2',
      title: 'Droppy',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
      color: '#0033cc',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/droppy-capture.jpg'
    },
    {
      id: '3',
      title: 'Walid Khaladi v2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',

      color: '#1c1c1c',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/willab-capture.jpg'
    },
    {
      id: '4',
      title: 'N-Seddi',
      desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore aliquam placeat aliquid voluptates dolore in repellat exercitationem ipsa possimus facere fugiat itaque error, laudantium rerum ut, fuga vero sequi.',
      color: '#009898',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/nseddi-capture.jpg'
    },
    {
      id: '5',
      title: 'Walid Khaladi v1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
      color: '#74bac2',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/walid-capture.jpg'
    },
    {
      id: '6',
      title: 'Sidouxie v2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda eligendi impedit facilis eveniet odit nemo quaerat natus! Aliquid, eveniet consectetur quidem animi temporibus expedita vel possimus assumenda ad fuga.',
      color: '#11e783',
      colorTitle: "#fefefe",
      colorText: "#f6f6f6",
      imgPath: './captures/sidouxie-capture.jpg'
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
                  <CardWrapper data={card} key={card.id} />
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
