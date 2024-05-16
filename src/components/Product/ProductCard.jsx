import React, { useContext, useState } from 'react'
import './product.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ fav, setFav, products }) => {
  const navigate = useNavigate();
  const { id, title, description, image, price } = products
  const { addToCart } = useContext(CartContext)

  const basketHandler=()=>{
    addToCart({
      id:id,
      title:title,
      image:image,
      price:price,
      count:1
    })
    toast.success("Product added to cart!")
  }


  const addFav = () => {
    setFav(products)
  }


  return (
    <div className="col-lg-3">
        <div className="card" >
      <Link to={`/products/${id}`}>
          <img src={image} className="card-img-top" alt={title} />
      </Link>
          <FaRegHeart onClick={addFav} />
          <div className="card-body">
            <h5 className="card-title">{title.length > 20 ? title.slice(0, 20) + "..." : title}</h5>
            <div className="row d-flex align-items-center">
              <div className="col-lg-8 ">
               <button onClick={basketHandler} className="btn btn-dark">Add To Basket</button>
              </div>
              <div className="col-lg-4 text-end">
                <span>{price} ₼</span>
              </div>
            </div>
          </div>
        </div>
    </div >
  )
}

export default ProductCard