import React from 'react'

function CardWrapper({ data }) {
  return (
    <div className="card-index">
      <div className="sec-head">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
      <div className="sec-bg" style={{ backgroundColor: data.color }}></div>
    </div>
  )
}

export default CardWrapper
