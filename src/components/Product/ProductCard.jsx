import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const ProductCard = (props) => {
  const { title, description, image, price } = props.products
  return (
    <div className="col-lg-3">
      <div className="card" >
        <img src={image} className="card-img-top" alt={title} />
        <FaRegHeart/>
        <div className="card-body">
          <h5 className="card-title">{title.length > 20 ? title.slice(0, 20) + "..." : title}</h5>
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 ">
              <Link to="/" className="btn btn-dark">Go to product &#10095; </Link>
            </div>
            <div className="col-lg-4 text-end">
              <span>{price}₼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard