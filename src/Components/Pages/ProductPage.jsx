import { useState } from "react"
import React from 'react'
import Banana from "./../../Asset/Banana.png"
import "./ProductPage.css"
// import bell from "./../../Asset/Bell.png"


const ProductPage = () => {
    const imgs=[
        {id:0, value: Banana},
        {id:1, value:Banana},
        {id:2, value:Banana},
        {id:3, value:Banana},
      ]
      const [sliderData, setSliderData]= useState(imgs[0])
      const handleClick=(index)=>{
        console.log(index);
        const slider=imgs[index];
        setSliderData(slider);
      }
  return (
       <div className="productpage-container">
          <div className="nike">
                <img src={sliderData.value} height="" width="" alt=""/>
                <div className='flex-row'>
                {
              imgs.map((data, i)=>
              <div className='thumbnails'>
                <img className={sliderData.id===i?"clicked":""} key={data.id}src={data.value} alt=""onClick={()=>handleClick(i)} height="80" width="80"/>
              </div>
              )
                } 
            </div>
            </div>
        </div>
  )
}

export default ProductPage
