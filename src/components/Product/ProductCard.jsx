import React, { useState } from 'react'
import './product.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({fav,setFav,products}) => {
  const navigate = useNavigate();
  const {id, title, description, image, price } = products


  const addFav=()=>{
    setFav(products)
  }
  

  return (
    <div className="col-lg-3">
      <div className="card" >
        <img src={image} className="card-img-top" alt={title} />
        <FaRegHeart onClick={addFav} />
        <div className="card-body">
          <h5 className="card-title">{title.length > 20 ? title.slice(0, 20) + "..." : title}</h5>
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 ">
              <Link to={`/products/${id}`}  className="btn btn-dark">Go to product &#10095; </Link>
            </div>
            <div className="col-lg-4 text-end">
              <span>{price} ₼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard