import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <main className="not-found">
      <div className="container">
        <div className="wrapper">
          <div className="flexy">
            <div className="title">
              <h1>404</h1>
            </div>
            <div className="subtitle">
              <h5
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  lineHeight: '1.6',
                }}
              >
                Page not Found, please return home page
              </h5>
            </div>
            <Link to="/">Retournez à la page d'accueil.</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Notfound
