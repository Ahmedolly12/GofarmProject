import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-content'>
        <h1>GoFarmNG</h1>
        <div className="select">
            <select name="" id="">
                <option value="All-Categories">All Categories</option>
                <option value="Cereal">Cereal Crops</option>
                <option value="Fruits">Fruits</option>
                <option value="Tubers">Tubers</option>
                <option value="Jiuices">Juices</option>
                <option value="Bakery">Bakery</option>
                <option value="Spices">Spices</option>
                <option value="Seafoods">Sea Foods</option>
                <option value="Vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="Beverages">Beverages</option>
                <option value="Meat">Meat</option>
            </select>
            {/* <input type={search} placeholder="search"/> */}
        </div>
    </div>
  )
}

export default Header
