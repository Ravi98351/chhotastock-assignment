import React from 'react'
import "../../css/Page1.css";
export default function FooterComp({h3,p1,p2,p3,imag}) {
  return (
    
      <div className='footercomp'>
            <h3>{h3}</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <img src={imag} alt=""></img>
        </div>
        
)
}
