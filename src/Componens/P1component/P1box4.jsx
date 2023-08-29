import React from 'react'
import "../../css/Page1.css"
export default function P1box4({img,p1,p2}) {
  return (
    <div className='P1box4'>
      <p>{p2}</p>
      <p>{p1}</p>
    <img src={img} alt=""/>
    </div>
   
  )
}
