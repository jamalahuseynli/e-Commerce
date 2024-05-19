import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import './details.css'
import { CartContext } from '../../context/CartContext';

const Details = () => {
  let { id } = useParams();
  const [item, setItem] = useState({})
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setItem(data)

      } catch (error) {
        console.log(error);
      }
    }
    getProductById(id)
  }, [])




  return (
    <div>
      {
        item ? <div className='container details mt-5'>
          <div className="d-flex flex-row row justify-content-around align-items-center" >
            <div className="col-lg-4 p-4">
              <img src={item.image} className="img-fluid" alt={item.title} />


            </div>
            <div className="card col-lg-5">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className='card-description'>{item.description}</p>
                <div className="">
                  <div className="col mt-3">
                    <span className='price-details'>{item.price} ₼</span>
                  </div>
                  <div className="row mt-5 align-items-center justify-content-around">
                    <button onClick={() => {
                      addToCart(
                        {
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          description:item.description,
                          category:item.category,
                          count: 1
                        })
                    }} className="col-lg-10">
                      Add to basket
                    </button>
                    <div className="col-lg-1">
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          :
          <Spinner />
      }
    </div>

  )
}

export default Details