
import React from 'react'
// import "./Card.css"
import Star from "../Components/Star"
import Button from "../Components/Button"
import Increment from "../Components/IncrementDecrement"

const Card = ({image, heading, Star, prices, Increment, Button}) => {
  return (

    <div className='container'>
        <img src={image} alt=""/>
        <p> {heading}</p>
        <Star/>
        <h4>{prices}<span>/Kg</span></h4>
       <p>{<Increment/>}</p> 
        <p>{<Button/>}</p>

    </div>
    
  )
}
export default Card

