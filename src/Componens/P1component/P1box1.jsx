import React from 'react'
import "../../css/Page1.css"


export default function P1box1({heading,img,text,CARG}) {

  return (
    <div className='box51'>
      <div className="P1box1b1">
        <div className="P1box1b2">
          <img src={img} alt=""></img>
        </div>
        <h3 className="P1box1h1">{heading}</h3>
      </div>
      <p className="P1box1h2">{text}</p>
      <div className="P1box1b3">
        <div>
          <p>{CARG}</p>
          <p>17.80%</p>
        </div>
        <div>
          <p>Min Amount</p>
          <p>120</p>
          </div>
      </div>
    </div>
  )
}
