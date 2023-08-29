import React from 'react'
import "../../css/Page1.css"
export default function P1box3({img,p1,p2}) {
  return (
    <div className='P1box3'>
      <img src={img} alt=""/>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
  )
}
