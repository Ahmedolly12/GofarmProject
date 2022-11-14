import { useState } from "react"
import React from 'react'
import Banana from "./../../Asset/Banana.png"
import Bana from "./../../Asset/banna.PNG"
import bannna from "./../../Asset/bannna.PNG"
import "./ProductPage.css"
import Star from "../../Components/Star"
import Increment from "../../Components/incrementDecreent"


const ProductPage = () => {
    const imgs=[
        {id:0, value: Bana},
        {id:1, value:bannna},
        {id:2, value:bannna},

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
            <div className="right-text">
              <h5>Farm Fresh Banana</h5>
              <Star/>
              <h6>#1000 <span>/kg</span></h6>
              <p className="text">Shop farm fresh banana. What is the benefits of banana?
                Bananas are a popular fruit with many potential health benefits. They may boost your digestion and heart health thanks to their fiber and antioxidant contents. Plus, they may support weight loss because they're relatively low in calories, nutrient dense, and filling.</p>
                <p className="seller"> Seller: <span>The Vine Farms</span></p>
                <p className="seller"> Categories: <span>Fruits</span></p>
              <Increment/>
            </div>
           
        </div>
      
  )
}

export default ProductPage
