import React from 'react'
import './nav.css'

const NavCard = ({imgLink , heading , description}) => {
  return (
    <>
    <div className="navCardContainer">
        <div className="imgContainer">
            <img src={imgLink} alt="" />
        </div>
        <div className="textContainer">
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    </div>    
    </>
  )
}

export default NavCard