import React from 'react'
import Layout from './components/Layout'
import CardWrapper from './components/CardWrapper'

function Work({data}) {

  return (
    <>
      <Layout>
        <div className="container">
          <div className="wrapper">
            <main className="main-work">
              <div className="title">
                <h1>WORK</h1>
              </div>
              <div className="text">
                <p>
                  Voici quelques projets que j'ai réalisés dans mon parcours de
                  developpement web, plus qu'une patient un amour pour le code
                  et la nation, Born To Code.
                </p>
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
