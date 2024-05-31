import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Spinner from '../../components/Spinner/Spinner'
import { CiTrash } from "react-icons/ci";
import './basket.css'

const Basket = () => {

  const { items, removefromCart, updateProductCount } = useContext(CartContext)

  if (items.length === 0) {
    return <div className='alert alert-danger w-25 my-5 m-auto'>Cart is empty</div>
  }

  console.log(items);

  return (
    <div className='container'>

      <div className="text-center mt-5 sh-c">Shopping Cart ({items.length})</div>

      <div className="row basket">
        <div className="col-9  ">
          {items ? items.map((item,index) => {
            return (
              <div className="row pr-list" key={index}>
                <div className="col-2 card ">
                  <img src={item.image} alt="" />
                </div>
                <div className="col-7">
                  <div className="title-price">
                    <p className='title-prod'>{item.title}</p>
                    <p className="price-prod">{item.price}₼</p>
                  </div>

                  <div className="prod-total">
                    <input type="number" onChange={(e)=>updateProductCount(e,item.id)} defaultValue={item.count}/>
                  </div>
                  <div className="price-cat-label">
                    <p>Category: <span>{item.category}</span></p>
                    <p>Total price: <span>{item.count * item.price}₼</span></p>
                  </div>
                </div>
                <div className="col-2">
                  <button className="btn trash" onClick={()=>removefromCart(item.id)}>
                    <CiTrash color='red'/>
                  </button>
                </div>
              </div>

            )
          }) : <Spinner />}
        </div>
        <div className="col-3">
          <div className="card p-3">
            <h4>Total Products on Cart</h4>
            
            <div className="total-price my-3">
              Total Price: <span></span>
            </div>
            <div className="coupon-price">
              Coupon Code: <span></span>
            </div>
            <button className='btn btn-dark mt-5'>Go to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket