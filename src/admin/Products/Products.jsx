import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner/Spinner';
import { CiEdit, CiTrash } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';


const Products = () => {

  const [productList, setProductList] = useState([])
  const [count, setCount] = useState(5)

  useEffect(() => {
    const getProductList = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        setProductList(data)
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProductList()
  }, [])

  const moreHandler = () => {
    setCount(count + 5)
  }

  const deleteButtonHandler = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`)
      toast.success("Deleted successfully!")
    } catch (error) {
      console.log(error.message)
      toast.error("Couldn't Delete!")
    }
  }



  return (
    <div className='products'>

      <h1>ALL PRODUCTS</h1>
      {productList ? <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Actions</th>

          </tr>

        </thead>
        <tbody>
          {productList.slice(0, count).map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className='w-30'>{product.title}</td>
                <td className='w-25'>
                  <img style={{ width: "10%" }} src={product.image} alt="" />
                </td>
                <td> {product.price}</td>
                <td className='actions'>
                  <button className='btn btn-warning'>
                    <CiEdit />
                  </button>
                  <button onClick={() => {
                    deleteButtonHandler(product.id)
                  }} className='btn btn-danger'>
                    <CiTrash />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
        : <Spinner />}
      <button onClick={moreHandler} className='btn-dark btn mb-5'>Load more</button>
      <Toaster position="top-center"
        reverseOrder={false} />
    </div>

  )
}

export default Products